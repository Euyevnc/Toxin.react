import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {Provider} from 'react-redux'

import { rootReducer } from '../../redux/reducers/rootReducer';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RoomSearch from '../../components/Room-search/Room-search';
import Paragraph from '../../components/Paragraph/Paragraph';

import "./index.scss";
import "react-datepicker/dist/react-datepicker.css";

const store = createStore(
  rootReducer, 
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)


const landingText: LocalTexts = {
  ru: 'Лучшие номера для вашей работы, отдыха и просто вдохновения',
  en: 'The best rooms for your work, relaxation and just inspiration'
}
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

const footerProps: FooterOwnProps = {
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
        <RoomSearch/>
        <div className = "main__text">
          <Paragraph text = {landingText}/>
        </div>
      </div>
    </main>
    <Footer {...footerProps}/>
  </Provider>, 
  document.getElementById('root') 
);
