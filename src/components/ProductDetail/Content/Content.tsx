import { IProductDetailContentProps, ProductDetailContentSelected } from "./Content.type";
import styles from './Content.module.scss';
import { useCallback, useEffect, useMemo, useState } from "react";
import { TickIcon } from "@/icons/tick";
import { Input } from "@/components/Fields";
import { HeartFillIcon } from "@/icons/heart-solid";
import { HeartIcon } from "@/icons/heart";
import Link from "next/link";
import { FullPrice } from "@/components/Price";
import { useCart } from "@/hooks/cart/useCart";
import { Loading } from "@/components/Loading";
import { useAppDispatch } from "@/store/hooks";
import { setConfig } from "@/store/features/toast/ToastSlide";
import {useRecommendedProductContent} from "@/components/ProductDetail/Content/useContent";

const BTN_LABEL = {
    IN_STOCK: "Add to cart",
    OUT_OF_STOCK: 'Out of stock'
};

export const ProductDetailContent = ({
    data, changeVariant
}: IProductDetailContentProps) => {
    const dispatch = useAppDispatch();
    const { selected, currentVariant, selectOption } = useRecommendedProductContent({
        variants: data.variants
    });
    const { addProduct } = useCart();
    const [ loading ,setLoading ] = useState(false);
    const [ quantity, setQuantity ] = useState(1);
    const [ addedWishlist, setAddedWishlist ] = useState(false);
    const tick = useMemo(() => (
        <TickIcon className={styles.tick}/>
    ), []);
    const isDisabled = useMemo(() => {
        return data.__typename === "ConfigurableProduct" && !currentVariant;
    }, [data, currentVariant]);
    const addToCartPros = useMemo(() => {
        const stock_status = (currentVariant ? currentVariant.product.stock_status : data.stock_status) as keyof typeof BTN_LABEL;
        return {
            label: BTN_LABEL[stock_status],
            disabled: stock_status === 'OUT_OF_STOCK'
        };
    }, [data, currentVariant]);
    const url = useMemo(() => `/${data.url_key}${data.url_suffix}`, [data.url_key, data.url_suffix]);

    const onAddProduct = useCallback(async () => {
        setLoading(true);
        if(!isDisabled) {
            const options = currentVariant ? currentVariant.attributes.map(attr => attr.uid) : undefined;
            const { errors } = await addProduct({
                product: {
                    quantity,
                    sku: data.sku,
                    ...(options ? {selected_options: options} : {})
                }
            });
            !errors?.length && dispatch(setConfig({
                type: "added_product",
                props: {
                    sku: data.sku,
                    options
                }
            }));
        }
        setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, quantity, addProduct]);
    useEffect(() => {
        changeVariant(currentVariant);
    }, [currentVariant, changeVariant]);

    return (
        <div className={styles.main}>
            <h3 className={styles.title} dangerouslySetInnerHTML={{__html: data.name}} />
            <div className={styles.price}>
                <FullPrice price_range={currentVariant ? currentVariant.product.price_range : data.price_range}/>
            </div>
            <hr className={styles.divider}/>
            {
                isDisabled && <div className={styles.error}>
                    Please select product options before adding this product to your cart
                </div>
            }
            <div className={styles.attrs}>
                { data.configurable_options?.length && data.configurable_options.map(option => (
                    <div key={option.attribute_code} className={styles.attrs__item}>
                        <div className={styles['attrs__title']}>
                            <strong>{option.label}:</strong>&nbsp;
                            { option.values.find(subOption => subOption.uid === selected[option.attribute_code])?.label }
                        </div>
                        <div className={styles['attrs__list']}>
                            {
                                option.values.map(optionValue => (
                                    <button
                                        key={optionValue.uid} className={styles['attrs__option']}
                                        style={option.attribute_code === 'color' ? { background: optionValue.swatch_data?.value } : undefined}
                                        title={optionValue.label}
                                        onClick={() => selectOption(option.attribute_code, optionValue.uid)}
                                    >
                                        {option.attribute_code !== 'color' && optionValue.label}
                                        { selected[option.attribute_code] === optionValue.uid && tick }
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
                <button
                    className={`${styles.actions__addcart} ${loading ? styles.loading : ''}`}
                    onClick={onAddProduct}
                    disabled={(isDisabled || addToCartPros.disabled) || undefined}
                >
                    {
                        loading ? <Loading small/> : addToCartPros.label
                    }
                </button>
                <button
                    className={styles.actions__wishlist}
                    onClick={() => setAddedWishlist(!addedWishlist)}
                >
                    {addedWishlist ? <HeartFillIcon /> : <HeartIcon /> }
                </button>
            </div>
            <hr className={styles.divider}/>
            <Link className={styles.link} href={url}>See all details</Link>
        </div>
    );
};