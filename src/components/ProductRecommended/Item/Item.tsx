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
    const openQuickView = (e: MouseEvent, sku: string) => {
        e.preventDefault();
        e.stopPropagation();
        onSelect && onSelect(sku);
    };
    const colors = useMemo(() => {
        const optionColors = data.configurable_options?.filter(option => option.attribute_code === 'color');
        const colors = optionColors?.map(optionColor => optionColor.values.map(value => value.swatch_data?.value)).flat();
        return Array.from(new Set(colors));
    }, [data]);
    return (
        <Link href={`/${data.url_key}${data.url_suffix}`} className={`${styles.main} ${inMiniCart ? styles.in_minicart : ''}`}>
            <div className={styles.image} style={{position: 'relative'}}>
                <Image
                    src={data.small_image.url ?? '/'}
                    alt={data.name}
                    sizes="(min-width: 992px) 25vw, (min-width: 768px) 33.3vw, 50vw"
                    fill
                />
            </div>
            <div className={styles.title} dangerouslySetInnerHTML={{__html: data.name}}/>
            {
                !!colors.length && (
                    <div className={styles.variants}>
                        {
                            colors.slice(0, limitColor).map(color => (
                                <div
                                    key={color}
                                    className={styles.variants__item}
                                    has-border={(color === '#ffffff') ? 'true' : undefined}
                                    style={{backgroundColor: color}}
                                />
                            ))
                        }
                        {
                            colors.length > limitColor && <div className={styles.variants__item} has-border="true">+{colors.length - limitColor}</div>
                        }
                    </div>
                )
            }
            <div className={styles.price}>
                <ProductRecommendedPrice small={inMiniCart} price_range={data.price_range}/>
            </div>
            <div className={ styles.quickview}>
                <button onClick={(e) => openQuickView(e, data.sku)}>Quick View</button>
            </div>
        </Link>
    );
};