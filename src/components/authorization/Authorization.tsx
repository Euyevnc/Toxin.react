import * as React from 'react';

import Button from '../Button/Button';

import "./authorization.scss";

const Authorization:  React.FunctionComponent = () => {
  const textsForEntry:LocalTexts = {
    en: 'entry',
    ru: 'войти'
  }

  const textForRegistration = {
    en: 'registration',
    ru: 'регистрация'
  }

  const entryProps: ButtonProps = {
    isLow: true,
    text: textsForEntry
  }

  const registrationProps: ButtonProps = {
    isLow: true,
    isHighlight: true,
    text: textForRegistration
  }
  return(
    <span className = "authorization">
      <span className="authorization__entry-container">
        <Button {...entryProps}></Button>
      </span>
      <span className="authorization__registration-container">
        <Button {...registrationProps}></Button>
      </span>
    </span>
  )
}

export default Authorization
