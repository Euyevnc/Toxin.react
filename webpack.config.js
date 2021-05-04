const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  pages: path.join(__dirname, './src/pages')
};

const PAGES = { };

const htmlPlugins = [ ];

fs.readdirSync(PATHS.pages).forEach(
  (item) => {
    const itemPath = `${PATHS.src}/pages/${item}/${item}`;

    Object.defineProperty(PAGES, item, {
      enumerable: true,
      configurable: false,
      writable: false,
      value: `${itemPath}.tsx`,
    });
    
    htmlPlugins.push(
      new HtmlWebpackPlugin({
        chunks: ['common', item],
        filename: `${item}.html`,
        template: `${itemPath}.html`,
  
      })
    );
  },
);

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  return {
    entry: PAGES,

    output: {
      filename: 'scripts/[name].js',
      path: `${PATHS.dist}`,
      publicPath: isProduction ? './' : '/',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: '/node_modules/',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    devServer: {
      overlay: true,
      contentBase: 'dist',
      watchContentBase: true,
      liveReload: true,
    },

    plugins: htmlPlugins.concat([
      new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
      }),
    ]),

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /(?<!\.d)\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: '../' },
            },
            {
              loader: 'css-loader', options: { url: true, import: true },
            },

            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    'postcss-preset-env',
                    'autoprefixer',                   
                    'cssnano',
                    'css-mqpacker',
                  ],
                },
              },
            },
            { 
              loader: 'resolve-url-loader', options: { removeCR: true } 
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },

          ],
        },

        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [              
                    'postcss-preset-env',
                    'autoprefixer',
                    'cssnano',
                    'css-mqpacker',
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images',
          },
        },
        {
          test: /\.(ttf|woff|woff2|eot|svg)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
  };
};
