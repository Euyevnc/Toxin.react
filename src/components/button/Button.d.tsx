declare type ButtonProps = {
  text: LocalTexts,
  isHighlight?: boolean, 
  isLow?: boolean,  
  withArrow?: boolean, 
  type?: "button" | "submit" | "reset",
  lang: Language
}

declare type ButtonOwnProps = {
  text: LocalTexts,
  isHighlight?: boolean, 
  isLow?: boolean,  
  withArrow?: boolean, 
  type?: "button" | "submit" | "reset",
}