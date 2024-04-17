import { getClient } from "@/lib/apolloClient"
import { GET_MEGAMENU_GQL } from "./MegaMenu.gql";
import { IMegaMenuItem, IMegaMenuResponse } from "./MegaMenu.type";
import { cloneDeep } from "lodash";
import { MEGAMENU_BRANDS_ID } from "@/const/global";

export const useMegaMenu = () => {
    const client = getClient();
    const formatItems = (items: IMegaMenuItem[], parentIndex: number = 0, parentPath: string = '', level = 0) => {
        let _parent_path = '';
        items.forEach((item, index) => {
            _parent_path = level ? `${parentPath}[${parentIndex}]` : '';
            item.level = level;
            item.parent_path = _parent_path;
            if(item.children?.length) {
                item.children = formatItems(item.children, index,  _parent_path + (level >= 1 ? `.children` : ''), level + 1);
            }
        });
        (level === 0) && items.push({
            id: MEGAMENU_BRANDS_ID,
            link: '/',
            name: 'Brands',
            level,
            children: [],
        });
        return items;
    }
    const getData = async () => {
        const { data } = await client.query<IMegaMenuResponse>({
            query: GET_MEGAMENU_GQL
        });
        const _data = cloneDeep(data);
        _data.getDynamicMenu.menu_items = formatItems(_data.getDynamicMenu.menu_items);
        return _data.getDynamicMenu;
    }
    return {
        getData
    }
}