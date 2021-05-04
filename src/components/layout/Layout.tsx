import * as React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="layout">
      <Header/>
      <Main>
        { children }
      </Main>
      <Footer/>
    </div>
  );
}


export default Layout;
