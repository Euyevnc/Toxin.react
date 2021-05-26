import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { rootReducer } from '../../redux/rootReducer';
import {Provider} from 'react-redux'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './index.scss';

const store = createStore(rootReducer)

const menuElements = [
  {name: 'О нас', link:'/about_us/'}, 
  {name: 'Услуги', submenu:[{ link:'/services1/', name:'Some'},{link:'/services3/', name:'Some else'}, {link:'/services3/', name:'Nevermind' } ]}, 
  {name: 'Вакансии', link:'/list/' },
  {name: 'Новости', link:'/news/' },
  {name: 'Соглашения', submenu:[{ link:'/convience1/', name:'Some'},{ link:'/convience2/', name:'Some else' }] } 
]

const footerElements = [
  {
    header:'Навигация', 
    hrefs:[
      {link: '/about/', name: 'О нас'},{href: '/news/', name: 'Новости'},
      {link: '/support/', name: 'Служба поддержки'},{href: '/services/', name: 'Услуги'} 
    ]
  }, 
  {
    header:'О нас', 
    hrefs:[
      {link: '/about_service/', name: 'О сервисе'},
      {link: '/team/', name: 'Наша команда'},
      {link: 'list/', name: 'Вакансии'},
      {link: '/investors/', name: 'Инвесторы'} 
    ]
  }, 
  {
    header:'Служба поддержки', 
    hrefs:[
      {link: '/convience/', name: 'Соглашения'},
      {link: '/comm/', name: 'Сообщества'},
      {link: '/connection/', name: 'Связь с нами'}
    ] 
  }   
]
ReactDOM.render(
  <Provider store = {store}>
    <Header menuElements = {menuElements}/>
    <main className="main">
      <div className = "main__content">
        
      </div>
    </main>
    <Footer blocks = {footerElements}></Footer>
  </Provider>, 
  document.getElementById('root') 
);
