import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { get } from "lodash";
import { useMemo } from "react";
import { IMegaMenuItem } from "../../MegaMenu.type";
import { setSelected } from "@/store/features/megaMenu/MegaMenuSlide";
import { MEGAMENU_BRANDS_ID } from "@/const/global";

export const useMegaMenuMobileContainer = () => {
    const dispatch = useAppDispatch();
    const { data, itemSelected } = useAppSelector(state => state.megaMenu);
    
    const parent = useMemo(() => (
        itemSelected?.parent_path && get(data?.menu_items, itemSelected.parent_path)
    ), [data, itemSelected]);
    const items = useMemo(() => (
        itemSelected ? itemSelected.children : (data?.menu_items ?? [])
    ), [data, itemSelected]);

    const selectItem = (e?: React.MouseEvent, item?: IMegaMenuItem) => {
        if(item?.children?.length || item?.id === MEGAMENU_BRANDS_ID) {
            e?.preventDefault();
            dispatch(setSelected(item));
        }
        else {
            dispatch(setSelected(undefined));
        }
    }
    const back = () => {
        selectItem(undefined, parent || null);
    }

    return {
        data,
        parent,
        items,
        itemSelected,
        back,
        selectItem
    }
}