'use client';
import { IMegaMenuContainerProps } from "./Container.type";
import styles from './Container.module.scss';
import { MegaMenuItem } from "../Item";
import { IMegaMenuItem } from "../MegaMenu.type";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { useAppDispatch } from "@/store/hooks";
import { setData } from "@/store/features/megaMenu/MegaMenuSlide";
export const MegaMenuContainer = ({
    data
}: IMegaMenuContainerProps) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setData(data));
    });
    const [ selected, setSelected ] = useState<IMegaMenuItem>();
    return <div className={styles.main}>
        {
            data.menu_items.map(item => (
                <MegaMenuItem
                    key={item.id}
                    item={item}
                    footer_icons={data.footer_icons}
                    selected={selected}
                    setSelectedItem={debounce(setSelected, 200)}
                />
            ))
        }
    </div>;
};