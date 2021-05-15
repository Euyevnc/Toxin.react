declare type MenuProps = {
  elements: Array<MenuElement>
}

interface MenuElement extends Href {
  submenu ?: Array<MenuElement>
}