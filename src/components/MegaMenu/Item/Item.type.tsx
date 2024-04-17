import { Dispatch, SetStateAction } from "react";
import { IMegaMenuFooterIcon, IMegaMenuItem, IMegaMenuRightContent } from "../MegaMenu.type";
import { DebouncedFunc } from "lodash";

export interface IMegaMenuItemProps {
    item: IMegaMenuItem & IMegaMenuRightContent,
    setSelectedItem: DebouncedFunc<Dispatch<SetStateAction<IMegaMenuItem | undefined>>>,
    selected?: IMegaMenuItem,
    footer_icons: IMegaMenuFooterIcon[]
}