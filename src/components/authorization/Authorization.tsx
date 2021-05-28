import * as React from 'react';
import {useSelector} from 'react-redux'

import { Button } from '../Button/Button';

import "./authorization.scss";

export const Authorization:  React.FunctionComponent = () => {
  const local = useSelector((state: State) => {
    return state.language
  })

  const textsForEntry:LocalTexts = {
    en: 'entry',
    ru: 'войти'
  }

  const textForRegistration = {
    en: 'registration',
    ru: 'регистрация'
  }

  return(
    <span className = "authorization">
      <span className="authorization__entry-container">
        <Button isLow = {true} text = {textsForEntry[local]}></Button>
      </span>
      <span className="authorization__registration-container">
        <Button isLow = {true} isHighlight = {true} text = {textForRegistration[local]}></Button>
      </span>
    </span>
  )
}
