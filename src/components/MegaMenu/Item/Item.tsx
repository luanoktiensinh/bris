import Link from "next/link";
import styles from './Item.module.scss';
import { IMegaMenuItemProps } from "./Item.type";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { MEGAMENU_BRANDS_ID } from "@/const/global";
const MegaMenuBrand = dynamic(() => import("../Brand").then(mod => mod.MegaMenuBrand));
const MegaMenuItemDetail = dynamic(() => import("./Detail").then(mod => mod.MegaMenuItemDetail));
export const MegaMenuItem = ({
    item,
    selected,
    setSelectedItem,
    footer_icons
}: IMegaMenuItemProps) => {
    const isShow = useMemo(() => item.id === selected?.id && (item.id === MEGAMENU_BRANDS_ID || item.children.length), [item, selected]);
    return <div
        onMouseOver={() => setSelectedItem(item)}
        onMouseOut={() => setSelectedItem(undefined)}
    >
        <Link
            href={item.link}
            className={styles.link}
        >
            {item.name}
        </Link>
        <div className={isShow ? '' : styles.hide}>
            {
                item.id === MEGAMENU_BRANDS_ID ? (
                <MegaMenuBrand
                    footer_icons={footer_icons}
                />) : (
                    <MegaMenuItemDetail
                        item={item}
                        selected={selected}
                        footer_icons={footer_icons}
                    />
                )
            }
        </div>
        
    </div>
}