import { IMegaMenuItemDetailProps } from "./Detail.type";
import styles from './Detail.module.scss';
import { useMemo } from "react";
import Link from "next/link";
import { useMegaMenuItemDetail } from "./useDetail";
import Image from "next/image";
import { MegaMenuFooter } from "../../Footer";
export const MegaMenuItemDetail = ({
    item,
    footer_icons,
    selected
}: IMegaMenuItemDetailProps) => {
    const isShow = useMemo(() => item.id === selected?.id && item.children.length, [item, selected]);
    const { items: childrenItems } = useMegaMenuItemDetail(item.children);
    return <div
        className={styles.main}
    >
        <div className="container">
            <div className={styles.head}>
                <h3 className={styles.head__title}>{item.name}</h3>
                <Link className={styles.head__shopall} href={item.link} >Shop all</Link>
            </div>
            <div className={"row " + styles.content}>
                <div className={"col-8 " + styles.content__left}>
                    {
                        childrenItems.map((item, index) => (
                            <div key={index} className={styles['w-1/3']}>
                                <ul>
                                    {
                                        item.map(child => (
                                            <li key={child.id} className={styles.child}>
                                                <Link
                                                    className={styles.child__title}
                                                    dangerouslySetInnerHTML={{__html: child.name}}
                                                    href={child.link}
                                                />
                                                {
                                                    child.children?.length > 0 && (
                                                        <ul>
                                                            {
                                                                child.children.map(subChild => (
                                                                    <li key={subChild.id}>
                                                                        <Link
                                                                            className={styles.child__item}
                                                                            dangerouslySetInnerHTML={{__html: subChild.name}}
                                                                            href={subChild.link}
                                                                        />
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    )
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
                { item?.right_content && <div className="col-4" dangerouslySetInnerHTML={{__html: item.right_content}} /> }
            </div>
            <MegaMenuFooter
                items={footer_icons}
            />
        </div>
    </div>;
};