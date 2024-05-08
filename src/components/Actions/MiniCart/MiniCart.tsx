"use client";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import styles from './MiniCart.module.scss';
import { ShoppingCartIcon } from "@/icons/icon-shopping-cart";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {lazy, MouseEvent, Suspense, useCallback, useEffect, useRef} from 'react';
import { setShow } from '@/store/features/miniCart/MiniCartSlide';
import { useScreen } from '@/hooks/useScreen';
import { useCart } from '@/hooks/cart/useCart';
import {Loading} from "@/components/Loading";
const MiniCart = lazy(() => import(/* webpackChunkName: "mini-cart" */ '@/components/MiniCart').then(mod => ({default: mod.MiniCart})));
export const HeaderActionMiniCart = () => {
    useScreen();
    const { show, data } = useAppSelector(state => state.miniCart);
    const { screenWidth } = useAppSelector(state => state.global);
    const dispatch = useAppDispatch();
    const { getCart } = useCart();
    const onClickCart = useCallback((e: MouseEvent) => {
        if(screenWidth >= 992) {
            e.preventDefault();
            dispatch(setShow(!show));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ show, screenWidth ]);
    useEffect(() => {
        getCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <div className={styles.main}>
        <Link
            href={'/cart'}
            className={styles.btn} title="Mini cart"
            onClick={onClickCart}
        >
            <ShoppingCartIcon />
            {
                data?.total_quantity && data.total_quantity > 0 ? (
                    <div className={styles.count}>
                        {data.total_quantity}
                    </div>
                ) : ''
            }
        </Link>
        {
            show && <Suspense fallback={<Loading customClass={styles.loading} small/>}><MiniCart /></Suspense>
        }
    </div>;
};