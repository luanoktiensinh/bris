"use client";

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import styles from './GlobalModal.module.scss';
import { setShow } from '@/store/features/globalModal/GlobalModalSlide';
import { MouseEvent, Suspense, useEffect, useMemo, useRef } from 'react';
import LazyComponents from './GlobalModal.lazy';
import { Loading } from '../Loading';

export const GlobalModal = () => {
    const { show, config } = useAppSelector(state => state.globalModal);
    const dispatch = useAppDispatch();
    const containerRef = useRef<HTMLDivElement>(null);
    const onMainClick = (e: MouseEvent) => {
        const target = e.target;
        if(
            (containerRef.current && containerRef.current.contains(target as Node))
        ) {
            e.stopPropagation();
            return;
        }
        dispatch(setShow(false));
    };
    const TargetComponent = useMemo(() => {
        if(config) {
            return LazyComponents[config.type];
        }
        return null;
    }, [config]);
    useEffect(() => {
        if(show && containerRef.current) {
            containerRef.current.focus();
        }
    }, [show]);
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if(event.key === "Escape") {
                dispatch(setShow(false));
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    });
    return show && config && (
        <div
            className={styles.main}
            onClick={(e) => onMainClick(e)}
            role='dialog'
        >
            <div className={config ? styles.container: ''} ref={containerRef}>
                <Suspense fallback={<Loading small />}>
                    { TargetComponent && <TargetComponent {...config.props}/>}
                </Suspense>
            </div>
        </div>);
};