
'use client'

import { useState } from 'react';
import styles from './Footer.module.scss';
import { IFooterBlock, IFooterItem } from './Footer.type';

export const FooterColumn = ({item}: {item: IFooterBlock}) => {
    const [ expanded, setExpanded ] = useState(false);
    
    return (
        <ul className={`${expanded ? styles["active"] : ""}`}>
            <li className={styles["footer-nav-item"]}>
                <span className={`${styles["footer-nav-link"]}`} aria-haspopup="true" aria-expanded={expanded ? "true" : "false"} onClick={() => setExpanded(!expanded)}>{item.title}</span>
                <div className={`${styles["footer-dropdown"]}`}>
                    {
                        item.items.map((childItem: IFooterItem, idx) => (
                            <a key={childItem.linkurl + idx} className={`${styles["footer-dropdown-item"]}`} href={childItem.linkurl}>{childItem.linktext}</a>
                        ))
                    }
                </div>
            </li>
        </ul>
    )
}