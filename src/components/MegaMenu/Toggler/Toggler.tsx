'use client';

import { setMobileComponentLoaded, setShowMiniCart } from '@/store/features/megaMenu/MegaMenuSlide';
import styles from './Toggler.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useTransition } from 'react';
export const MegaMenuToggler = () => {
    const [, startTransition] = useTransition();
    const { showMiniCart, mobileComponentLoaded } = useAppSelector(state => state.megaMenu);
    const dispatch = useAppDispatch();
    const clickBtn = useCallback(() => {
        dispatch(setShowMiniCart(!showMiniCart));
        !mobileComponentLoaded && startTransition(() => {
            dispatch(setMobileComponentLoaded(true));
        });
    }, [dispatch, showMiniCart, mobileComponentLoaded]);
    return <button
        className={showMiniCart ? styles.main_active : styles.main}
        onClick={clickBtn}
        title="show mega menu"
    >
        <span className={styles.line}/>
        <span className={styles.line}/>
        <span className={styles.line}/>
    </button>;
};