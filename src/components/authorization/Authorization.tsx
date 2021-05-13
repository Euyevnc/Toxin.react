import * as React from 'react';
import {useSelector} from 'react-redux'

import { Button } from '../button/button';

import "./authorization.scss";

export const Authorization:  React.FunctionComponent = () => {

  const local = useSelector((state: State) => {
    return state.languages.terms[state.languages.current]
  })
  return(
    <span className = "authorization">
      <span className="authorization__entry-container">
        <Button isLow = {true} text = {local.entry}></Button>
      </span>
      <span className="authorization__registration-container">
        <Button isLow = {true} isHighlight = {true} text = {local.registration}></Button>
      </span>
    </span>
  )
}
