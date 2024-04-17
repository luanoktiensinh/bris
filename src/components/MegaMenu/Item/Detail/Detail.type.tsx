import { IMegaMenuFooterIcon, IMegaMenuItem, IMegaMenuRightContent } from "../../MegaMenu.type";

export interface IMegaMenuItemDetailProps {
    item: IMegaMenuItem  & IMegaMenuRightContent,
    selected?: IMegaMenuItem,
    footer_icons: IMegaMenuFooterIcon[]
}