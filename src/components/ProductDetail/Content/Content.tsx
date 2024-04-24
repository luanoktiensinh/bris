import { IProductDetailContentProps, ProductDetailContentSelected } from "./Content.type";
import styles from './Content.module.scss';
import { useEffect, useMemo, useState } from "react";
import { TickIcon } from "@/icons/tick";
import { Input } from "@/components/Fields";
import { HeartFillIcon } from "@/icons/heart-solid";
import { HeartIcon } from "@/icons/heart";
import Link from "next/link";
import { ProductRecommendedPrice } from "@/components/ProductRecommended/Price";
export const ProductDetailContent = ({
    data, changeVariant
}: IProductDetailContentProps) => {
    const [ selected, setSelected ] = useState<ProductDetailContentSelected>({});
    const [ quantity, setQuantity ] = useState(1);
    const [ addedWishlist, setAddedWishlist ] = useState(false);
    const tick = useMemo(() => (
        <TickIcon className={styles.tick}/>
    ), []);
    useEffect(() => {
        if(changeVariant) changeVariant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);
    return (
        <div className={styles.main}>
            <h3 className={styles.title} dangerouslySetInnerHTML={{__html: data.title}} />
            <div className={styles.price}>
                <ProductRecommendedPrice price={data.price}/>
            </div>
            <hr className={styles.divider}/>
            <div className={styles.attrs}>
            { data.attributes?.length && data.attributes.map(attr => (
                    <div key={attr.name} className={styles.attrs__item}>
                        <div className={styles['attrs__title']}>
                            <strong>{attr.label}:</strong>&nbsp;
                            { selected[attr.name]?.label }
                        </div>
                        <div className={styles['attrs__list']}>
                            {
                                attr.items.map(item => (
                                    <button
                                        key={item.value} className={styles['attrs__option']}
                                        style={attr.name === 'color' ? { background: item.value } : undefined}
                                        onClick={() => setSelected({...selected, [attr.name]: item })}
                                    >
                                        { attr.name !== 'color' ? item.label : '' }
                                        { selected[attr.name]?.value === item.value && tick }
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            <div>
                <div className={styles['attrs__title']}>
                    <strong>Quantity:</strong>
                </div>
                <Input
                    type="number"
                    value={quantity}
                    min={1}
                    max={10}
                    step={1}
                    onChange={value => setQuantity(+value)}
                />
            </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.actions__addcart}>Add to cart</button>
                <button
                    className={styles.actions__wishlist}
                    onClick={() => setAddedWishlist(!addedWishlist)}
                >
                    {addedWishlist ? <HeartFillIcon /> : <HeartIcon /> }
                </button>
            </div>
            <hr className={styles.divider}/>
            <Link className={styles.link} href="#">See all details</Link>
        </div>
    );
};