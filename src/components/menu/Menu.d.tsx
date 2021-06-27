declare type MenuProps = {
  elements: Array<MenuElement>;
  lang: Language;
  login: string
}

declare type MenuOwnProps = {
  elements: Array<MenuElement>
}

interface MenuElement extends Href {
  submenu ?: Array<MenuElement>
}