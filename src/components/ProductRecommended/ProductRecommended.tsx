"use client";

import { IProductRecommendedProps } from "./ProductRecommended.type";
import styles from './ProductRecommended.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductRecommendedItem } from "./Item";
import { Suspense, lazy, useCallback, useEffect, useMemo } from "react";
import { SwiperOptions } from "swiper/types";
import { Mousewheel, Scrollbar, Navigation } from "swiper/modules";
import { useProductRecommended } from "./useProductRecommended";
import { SkeletonProductRecommended } from "./Skeleton";
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/features/globalModal/GlobalModalSlide";
import { Loading } from "../Loading";
const ProductDetail = lazy(() => import("../ProductDetail").then(mod => ({default: mod.ProductDetail})));

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { PRODUCT_RECOMMENDED } from "../GlobalModal/GlobalModal.const";


export const ProductRecommended = ({
    title = 'We think you will love these...',
}: IProductRecommendedProps) => {
    const dispatch = useAppDispatch();
    const { data, loading, getData } = useProductRecommended();
    const swiperOptions = useMemo<SwiperOptions>(() => ({
        modules: [ Mousewheel, Scrollbar, Navigation ],
        slidesPerView: 2,
        spaceBetween: 16,
        mousewheel: {
            enabled: true,
        },
        scrollbar: {
            enabled: true
        },
        navigation: true,
        breakpoints: {
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            }
        }    
    }), []);
    useEffect(() => {
        getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const quickView = useCallback((id: number) => {
        if(id !== undefined) {
            dispatch(openModal({
                type: PRODUCT_RECOMMENDED,
                props: {
                    id
                }
            }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className={styles.main}>
            <div className="container">
                {
                    title && <h3 className={styles.title}>{title}</h3>
                }
                {
                    loading ? <SkeletonProductRecommended /> : data && (
                        <Swiper {...swiperOptions}>
                            {
                                data.map(product => (
                                    <SwiperSlide key={product.id}>
                                        <ProductRecommendedItem data={product} onSelect={(id) => quickView(id)}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    )
                }
                
            </div>
        </div>
    );
};