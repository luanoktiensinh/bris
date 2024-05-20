import { IProductRecommendedItemsProps } from "./Item.type";
import styles from './Item.module.scss';
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useMemo } from "react";
import { FullPrice } from "@/components/Price";
import {VariantPreview} from "@/components/Product/VariantPreview";
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
                data.configurable_options?.length ? <VariantPreview classes={styles.variants} options={data.configurable_options} /> : ''
            }
            <div className={styles.price}>
                <FullPrice small={inMiniCart} price_range={data.price_range}/>
            </div>
            <div className={ styles.quickview}>
                <button onClick={(e) => openQuickView(e, data.sku)}>Quick View</button>
            </div>
        </Link>
    );
};