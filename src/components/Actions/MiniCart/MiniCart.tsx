"use client";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import styles from './MiniCart.module.scss';
import { ShoppingCartIcon } from "@/icons/icon-shopping-cart";
import Link from 'next/link';
import {lazy, MouseEvent, Suspense, useCallback, useMemo} from 'react';
import { setShow } from '@/store/features/miniCart/MiniCartSlide';
import { useScreen } from '@/hooks/useScreen';
import {Loading} from "@/components/Loading";
import {useMiniCart} from "@/components/Actions/MiniCart/useMiniCart";
const MiniCart = lazy(() => import(/* webpackChunkName: "mini-cart" */ '@/components/MiniCart').then(mod => ({default: mod.MiniCart})));
export const HeaderActionMiniCart = () => {
    useScreen();
    const { show, data } = useAppSelector(state => state.miniCart);
    const { screenWidth } = useAppSelector(state => state.global);
    const dispatch = useAppDispatch();
    // const { data: total_quantity, loading } = useMiniCart();
    const loading = useMemo(() => false, []);
    const onClickCart = useCallback((e: MouseEvent) => {
        if(screenWidth >= 992) {
            e.preventDefault();
            dispatch(setShow(!show));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ show, screenWidth ]);
    // const totalQuantity = useMemo(() => data?.total_quantity ?? total_quantity, [data?.total_quantity, total_quantity]);
    const totalQuantity = useMemo(() => data?.total_quantity ?? 0, [data?.total_quantity]);
    return <div className={styles.main}>
        <Link
            href={'/cart'}
            className={styles.btn} title="Mini cart"
            onClick={onClickCart}
        >
            <ShoppingCartIcon />
            {
                !loading && totalQuantity > 0 ? (
                    <div className={styles.count}>
                        {totalQuantity}
                    </div>
                ) : ''
            }
        </Link>
        {
            show && <Suspense fallback={<Loading customClass={styles.loading} small/>}><MiniCart /></Suspense>
        }
    </div>;
};