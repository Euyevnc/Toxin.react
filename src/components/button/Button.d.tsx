declare type ButtonProps = {
  text: LocalTexts,
  isHighlight?: boolean, 
  isLow?: boolean,  
  withArrow?: boolean, 
  type?: "button" | "submit" | "reset"
}