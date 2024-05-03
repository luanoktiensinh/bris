import { useProductDetail } from "@/components/ProductDetail/useProductDetail";
import { IMiniCartProductItem } from "./Item.type";
import styles from './Item.module.scss';
import Link from "next/link";
import Image from "next/image";
import { ProductRecommendedPrice } from "@/components/ProductRecommended/Price";
import { Input } from "@/components/Fields";
import { TrashIcon } from "@/icons/trash";
import { useCallback, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setLoading } from "@/store/features/global/GlobalSlide";
import { useCart } from "@/hooks/cart/useCart";
export const MiniCartProductItem = ({
    data
}: IMiniCartProductItem) => {
    const dispatch = useAppDispatch();
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
    if(!data) return null;
    return <div className={`${styles.main} row`}>
        <Link
            href={data.product.url_key ?? '/'}
            className={`col-2 ${styles.image}`}
        >
            <Image
                src={data.product.thumbnail.url}
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
                href={data.product.url_key ?? ''}
                dangerouslySetInnerHTML={{__html: data.product.name}}
            />
            <div className={styles.price}>
                <ProductRecommendedPrice price={data.prices.price.value}/>
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