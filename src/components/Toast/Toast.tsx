'use client';
import { setShow } from "@/store/features/toast/ToastSlide";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import styles from './Toast.module.scss';
import { ToastStateConfig } from "@/store/features/toast/ToastSlide.type";
import LazyComponents from './Toast.lazy';
import { Loading } from "../Loading";
const SHOW_DELAY = 250;
export const Toast = () => {
    const { show, config = {} as ToastStateConfig } = useAppSelector(state => state.toast);
    const { timeout = 4000 } = config;
    const [ itv, setItv ] = useState<any>();
    const [ itvShow, setItvShow ] = useState<any>();
    const dispatch = useAppDispatch();
    const TargetComponent = useMemo(() => {
        if(config) {
            return LazyComponents[config.type];
        }
        return null;
    }, [config]);
    const onShow = useCallback(() => {
        if(show) {
            setItv(setTimeout(() => {
                dispatch(setShow(false));
            }, timeout));
        }
        else if(itv) {
            setItv(null);
            clearInterval(itv);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show, timeout]);
    useEffect(() => {
        onShow();
    }, [onShow]);
    
    useEffect(() => {
        if(Object.keys(config).length) {
            let delayShow = show;
            if(delayShow) {
                clearInterval(itvShow);
                dispatch(setShow(false));
            }
            setItvShow(setTimeout(() => {
                dispatch(setShow(true));
            }, delayShow ? SHOW_DELAY : 0));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config]);
    const onMouseEnter = useCallback(() => {
        if(itv) {
            clearTimeout(itv);
            setItv(null);
        }
    }, [itv]);
    const onMouseLeave = useCallback(onShow, [onShow]);
    return <div
            className={show ? styles.main: styles.main_hide}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Suspense fallback={<Loading small center/>}>
                { TargetComponent && <TargetComponent {...config.props}/>}
            </Suspense>
        </div>;
};