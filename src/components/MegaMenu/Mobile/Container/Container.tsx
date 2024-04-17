"use client"
import styles from './Container.module.scss';
import { ArrowRightIcon } from '@/icons/arrow-right';
import { PlusIcon } from '@/icons/icon-plus';
import { useMegaMenuMobileContainer } from './useContainer';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { MegaMenuBrand } from '../../Brand';
import { MEGAMENU_BRANDS_ID } from '@/const/global';
export const MegaMenuMobileContainer = () => {
    const { items, data, itemSelected, selectItem, back } = useMegaMenuMobileContainer();
    
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        mainRef.current && (mainRef.current.scrollTop = 0);
    }, [itemSelected]);
    return (
        <div className={styles.main} ref={mainRef}>
            {
                !!itemSelected && (
                    <>
                        <button
                            className={styles.back}
                            onClick={back}
                        >
                            &lt; Back
                        </button>
                        {itemSelected.id !== MEGAMENU_BRANDS_ID &&  <div className={styles.head}>
                            { itemSelected.name }
                            <Link className={styles.head__shopall} href={itemSelected.link}>
                                Shop All
                            </Link>
                        </div>}
                    </>
                )
            }
            {
                itemSelected?.id === MEGAMENU_BRANDS_ID ? (
                    <MegaMenuBrand />
                ): items.map(item => (
                    <Link
                        key={item.id}
                        href={item.link}
                        className={item.level > 0 ? styles.item__small : styles.item}
                        onClick={(e) => selectItem(e, item)}
                    >
                        {item.name}
                        { (item.children?.length) || item.id === MEGAMENU_BRANDS_ID ? (item.level <= 1 ? <ArrowRightIcon /> : <PlusIcon />) : ''}
                    </Link>
                ))
            }
            {
                itemSelected ? (
                    itemSelected?.right_content && (
                        <div dangerouslySetInnerHTML={{__html: itemSelected.right_content}} />
                    )
                ) : (
                    <div className={styles.footer}>
                        {
                            data?.footer_icons.map(footerIcon => (
                                <Link
                                    key={footerIcon.name}
                                    href={footerIcon.link}
                                    className={styles.footer__link}
                                >
                                    {footerIcon.name}
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}