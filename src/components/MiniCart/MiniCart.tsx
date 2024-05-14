"use client";
import { CloseIcon } from '@/icons/close';
import styles from './MiniCart.module.scss';
import { ProductRecommended } from '../ProductRecommended';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setShow } from '@/store/features/miniCart/MiniCartSlide';
import { MiniCartProductItem } from './Item';
import { Price } from '../Price';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import {useCart} from "@/hooks/cart/useCart";
import {Loading} from "@/components/Loading";
export const MiniCart = () => {
    const dispatch = useAppDispatch();
    const { getCart, loading } = useCart();
    const { locale } = useAppSelector(state => state.global);
    const { show, data } = useAppSelector(state => state.miniCart);
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        void getCart();
        const onClick = (e: MouseEvent) => {
            const target = e.target as Node;
            if(target && show) {
                if(mainRef.current && !mainRef.current.contains(target)) {
                    dispatch(setShow(false));
                }
            }
        };
        document.addEventListener('click', onClick);
        return () => {
            document.removeEventListener('click', onClick);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <div className={styles.main} ref={mainRef}>
        <div className={styles.header}>
            <h3>Cart</h3>
            <button
                className={styles.close}
                onClick={() => dispatch(setShow(false))}
            >
                <CloseIcon />
            </button>
        </div>
        {
            loading ? <Loading small center /> :
                (data?.items.length ? (
                        <div className={styles.products}>
                            {
                                data.items.map(product => <MiniCartProductItem key={product.uid} data={product}/>)
                            }
                        </div>
                    ) : <div className={styles.empty}>Your cart is empty</div>
                )
        }
        <ProductRecommended inMiniCart title='You may also like'/>
        {
            !!data?.items.length && (<>
                <div className={styles.total}>
                    <span>Prices</span>
                    <Price money={data.prices.subtotal_including_tax.value} currencyCode={data.prices.subtotal_including_tax.currency} locale={locale} />
                </div>
                <Link href='/cart' className={styles.view}>View Cart</Link>
                <Link href='/checkout' className={styles.checkout}>Checkout Now</Link>
            </>)
        }
    </div>;
};