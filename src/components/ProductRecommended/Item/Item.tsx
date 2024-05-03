import { IProductRecommendedItemsProps } from "./Item.type";
import styles from './Item.module.scss';
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useMemo } from "react";
import { ProductRecommendedPrice } from "../Price";
export const ProductRecommendedItem = ({
    data,
    inMiniCart,
    onSelect
}: IProductRecommendedItemsProps) => {
    const limitColor = useMemo(() => inMiniCart ? 4 : 5, [inMiniCart]);
    const openQuickView = (e: MouseEvent, id: number) => {
        e.preventDefault();
        e.stopPropagation();
        onSelect && onSelect(id);
    };
    const colors = useMemo(() => {
        let attrColors;
        if((attrColors = data.attributes?.find(attr => attr.name === 'color'))) {
            return attrColors;
        }
        return null;
    }, [data]);
    
    return (
        <Link href={data.url} className={`${styles.main} ${inMiniCart ? styles.in_minicart : ''}`}>
            <Image
                className={styles.image}
                src={data.image}
                alt={data.title}
                width={384}
                height={384}
                sizes="384px"
            />
            <div className={styles.title} dangerouslySetInnerHTML={{__html: data.title}}/>
            {
                colors?.items.length && (
                    <div className={styles.variants}>
                        {
                            colors.items.slice(0, limitColor).map(color => (
                                <div
                                    key={color.value}
                                    className={styles.variants__item}
                                    has-border={(color.value === 'white') ? 'true' : undefined}
                                    style={{backgroundColor: color.value}}
                                />
                            ))
                        }
                        {
                            colors.items.length > limitColor && <div className={styles.variants__item} has-border="true">+{colors.items.length - limitColor}</div>
                        }
                    </div>
                )
            }
            <div className={styles.price}>
                <ProductRecommendedPrice price={data.price}/>
            </div>
            <div className={ styles.quickview}>
                <button onClick={(e) => openQuickView(e, data.id)}>Quick View</button>
            </div>
        </Link>
    );
};