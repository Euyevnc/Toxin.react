declare type MenuProps = {
  elements: Array<MenuElement>
}

declare type MenuElement = {
  name: string,
  href?: string,
  submenu ?: Array<MenuElement>
}