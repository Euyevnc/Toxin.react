declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const value: any;
  export = value;
}

declare type Href = {
  name: LocalTexts,
  link: string
}

declare type LocalTexts = {
  'ru': string,
  'en': string
}


