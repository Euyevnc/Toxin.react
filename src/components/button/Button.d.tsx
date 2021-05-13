declare type ButtonProps = {
  text: string,
  isHighlight?: boolean, 
  isLow?: boolean,  
  withArrow?: boolean, 
  type?: "button" | "submit" | "reset"
}