import { IMiniCartProductItem } from "./Item.type";
import styles from './Item.module.scss';
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/Fields";
import { TrashIcon } from "@/icons/trash";
import {useCallback, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import { setLoading } from "@/store/features/global/GlobalSlide";
import { useCart } from "@/hooks/cart/useCart";
import {Price} from "@/components/Price";
export const MiniCartProductItem = ({
    data
}: IMiniCartProductItem) => {
    const dispatch = useAppDispatch();
    const { getCurrentProduct } = useCart();
    const { locale, currencyCode } = useAppSelector(state => state.global);
    const [ refreshInput, setRefreshInput ] = useState(new Date().getTime());
    const { removeProduct: _removeProduct, updateProduct } = useCart();
    const [ removing, setRemoving ] = useState(false);
    const removeProduct = useCallback(async() => {
        dispatch(setLoading(true));
        await _removeProduct({
            itemId: data.uid
        });
        dispatch(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onChangeQuantity = useCallback(async(qty: number) => {
        dispatch(setLoading(true));
        const { error } = await updateProduct({
            cartItems: [
                { cart_item_uid: data.uid, quantity: qty }
            ]
        });
        if(error) {
            setRefreshInput(new Date().getTime());
        }
        dispatch(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const currentProduct = useMemo(() => getCurrentProduct(data), [data, getCurrentProduct]);
    const url = useMemo(() => `${currentProduct.product.url_key}${currentProduct.product.url_suffix}`, [currentProduct]);
    if(!data) return null;
    return <div className={`${styles.main} row`}>
        <Link
            href={url}
            className={`col-2 ${styles.image}`}
        >
            <Image
                src={currentProduct.product.thumbnail.url}
                alt={data.product.name}
                width={0}
                height={0}
                sizes="60px"
                style={{
                    width: '100%',
                    height: 'auto',
                }}  
            />
        </Link>
        <div className="col-6">
            <Link
                className={styles.title}
                href={url}
                dangerouslySetInnerHTML={{__html: data.product.name}}
            />
            {
                data.configurable_options?.map(option => (
                    <div className={styles.option} key={option.value_label}>{option.option_label}: {option.value_label}</div>
                ))
            }
            <div className={styles.price}>
                <Price money={data.prices.price.value} locale={locale} currencyCode={currencyCode}/>
            </div>
        </div>
        <div className={`col-4 ${styles.actions}`}>
            <Input key={refreshInput} type="number" btnRight value={data.quantity} min={1} onChange={val => onChangeQuantity(val as number)} changeWhenBlur/>
            <button className={styles.remove} onClick={() => setRemoving(true)}>
                <TrashIcon />
            </button>
        </div>
        {removing && ( <div className={styles.remove__confirm}>
            <div className={styles.remove__title}>
                Are you sure you want to remove this item?
            </div>
            <div className={styles.remove__actions}>
                <button className={styles.remove__cancel} onClick={() => setRemoving(false)}>
                    Cancel
                </button>
                <button className={styles.remove__ok} onClick={removeProduct}>
                    Remove
                </button>
            </div>
        </div>)}
    </div>;
};