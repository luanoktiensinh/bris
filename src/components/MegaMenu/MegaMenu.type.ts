export interface IMegaMenuItem {
    id: number,
    name: string,
    link: string,
    level: number,
    parent_path?: string,
    children: IMegaMenuItem[]
}
export interface IMegaMenuRightContent {
    right_content?: string
}
export interface IMegaMenuData {
    menu_items: (IMegaMenuItem & IMegaMenuRightContent)[],
    footer_icons: IMegaMenuFooterIcon[]
}
export interface IMegaMenuResponse {
    getDynamicMenu: IMegaMenuData
}

export interface IMegaMenuFooterIcon {
    image: string,
    link: string,
    name: string
}