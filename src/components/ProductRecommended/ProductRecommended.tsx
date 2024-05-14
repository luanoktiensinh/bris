"use client";

import { IProductRecommendedProps } from "./ProductRecommended.type";
import styles from './ProductRecommended.module.scss';
import {useCallback, useRef} from "react";
import { SkeletonProductRecommended } from "./Skeleton";
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/features/globalModal/GlobalModalSlide";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { PRODUCT_RECOMMENDED } from "../GlobalModal/GlobalModal.const";
import {ProductRecommendedContainer} from "@/components/ProductRecommended/Container";
import {useActivityDetector} from "@/hooks/useActivityDetector";
import {useIsVisible} from "@/hooks/useIsVisible";

export const ProductRecommended = ({
    title = 'We think you will love these...',
    inMiniCart
}: IProductRecommendedProps) => {
    const mainRef = useRef<HTMLDivElement>(null);
    const active = useActivityDetector();
    const visible = useIsVisible({ref: mainRef, renderOnce: true});
    const dispatch = useAppDispatch();
    const quickView = useCallback((sku?: string) => {
        if(sku !== undefined) {
            dispatch(openModal({
            type: PRODUCT_RECOMMENDED,
                props: {
                    sku
                }
            }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className={`${styles.main} ${inMiniCart ? styles.in_minicart  : ''}`} ref={mainRef}>
            <div className="container">
                {
                    title && <h3 className={styles.title}>{title}</h3>
                }
                {
                    active || visible
                        ? <ProductRecommendedContainer inMiniCart={inMiniCart} onSelect={quickView} />
                        : <SkeletonProductRecommended inMiniCart={inMiniCart}/>
                }
            </div>
        </div>
    );
};