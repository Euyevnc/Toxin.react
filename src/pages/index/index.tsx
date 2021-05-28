import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { rootReducer } from '../../redux/rootReducer';
import {Provider} from 'react-redux'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './index.scss';

const store = createStore(rootReducer)

// setTimeout(()=> {
//   store.dispatch({type: 'CHANGE_LANGUAGE', payload: 'en'})
// }, 3000)

const menuProps: HeaderProps = {
  menuElements: [
    {name: { ru: 'О нас', en: 'About us' }, link:'/about_us/'}, 
    {name: { ru: 'Услуги', en: 'Sevices' }, link: '', submenu:[
      {link:'/services1/', name: { en: 'Some', ru: 'Пункт#1' }},
      {link:'/services3/', name: { en: 'Some else', ru: 'Пункт#2' }}, 
      {link:'/services3/', name: { en: 'Nevermind', ru: 'Пункт#3' }} 
    ]}, 
    {name: { ru: 'Вакансии', en: 'Vacancies' }, link:'/list/' },
    {name: { ru: 'Новости', en: 'News' }, link:'/news/' },
    {name: { ru: 'Соглашения', en: 'Offerts' }, link: '', submenu:[
      {link:'/convience1/', name: { en: 'Some', ru: 'Пункт#1' }},
      {link:'/convience2/', name: { en: 'Some else', ru: 'Пункт#2' }}
    ]} 
  ]
}

const footerProps: FooterProps = {
  textUnderLogo: {
    ru: 'Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»',
    en: 'Reservation of rooms in the best hotel of 2019 according to the "Hotel Views" Association '
  },
  subscribeOfferHeader: {
    ru: 'подписка',
    en: 'subscription'
  },

  subscribeOfferText: {
    ru: 'Получайте специальные предложения и новости сервиса',
    en: 'Receive special offers and service news '
  },

  blocks: [
    {
      header:{
        ru: 'Навигация', 
        en: 'Navigation'
      },
      hrefs:[
        {link: '/about/', name: { ru: 'О нас', en: 'About us' }},
        {link: '/news/', name: { ru: 'Новости', en: 'News' }},
        {link: '/support/', name: { ru: 'Служба поддержки', en: 'Support' }},
        {link: '/services/', name: { ru: 'Услуги', en: 'Sevices' }} 
      ]
    }, 
    {
      header: { ru:'О нас', en: 'About us'}, 
      hrefs:[
        {link: '/about_service/', name: { ru: 'О сервисе', en: 'About service' }},
        {link: '/team/', name: { ru: 'Наша команда', en: 'Our team' }},
        {link: 'list/', name: { ru: 'Вакансии', en: 'Vacancies' }},
        {link: '/investors/', name: { ru: 'Инвесторы', en: 'Investors' }} 
      ]
    }, 
    {
      header:{ ru: 'Служба поддержки', en: 'Support' }, 
      hrefs:[
        {link: '/convience/', name: { ru: 'Соглашения', en: 'Offerts' }},
        {link: '/comm/', name: { ru: 'Сообщества', en: 'Communities' }},
        {link: '/connection/', name: { ru: 'Связь с нами', en: 'Contact us' }}
      ] 
    }   
  ]
}

ReactDOM.render(
  <Provider store = {store}>
    <Header {...menuProps}/>
    <main className="main">
      <div className = "main__content">
        
      </div>
    </main>
    <Footer {...footerProps}></Footer>
  </Provider>, 
  document.getElementById('root') 
);
