import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { rootReducer } from '../../redux/rootReducer';
import {Provider} from 'react-redux'

import Header from '../../components/header/Header';
import './index.scss';

const store = createStore(rootReducer)

const menuElements = [
  {name: 'О нас', href:'/about_us/'}, 
  {name: 'Услуги', submenu:[{ href:'/services1/', name:'Some'},{href:'/services3/', name:'Some else'}, {href:'/services3/', name:'Nevermind' } ]}, 
  {name: 'Вакансии', href:'/list/' },
  {name: 'Новости', href:'/news/' },
  {name: 'Соглашения', submenu:[{ href:'/convience1/', name:'Some'},{ href:'/convience2/', name:'Some else' }] } 
]
ReactDOM.render(
  <Provider store = {store}>
    <Header menuElements = {menuElements}/>
  </Provider>, 
  document.getElementById('root') 
);
