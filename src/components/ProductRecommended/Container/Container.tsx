import {ProductRecommendedContainerProps} from "@/components/ProductRecommended/Container/Container.type";
import {Swiper, SwiperSlide} from "swiper/react";
import {ProductRecommendedItem} from "@/components/ProductRecommended/Item";
import {useMemo} from "react";
import {SwiperOptions} from "swiper/types";
import {Mousewheel, Navigation, Scrollbar} from "swiper/modules";
import {useProductRecommended} from "@/components/ProductRecommended/useProductRecommended";
import {SkeletonProductRecommended} from "@/components/ProductRecommended/Skeleton";

export const ProductRecommendedContainer = ({
    inMiniCart,
    onSelect
}: ProductRecommendedContainerProps) => {
    const swiperOptions = useMemo<SwiperOptions>(() => ({
        modules: [ Mousewheel, Scrollbar, Navigation ],
        ...(inMiniCart ? {
            slidesPerView: 2.5,
            spaceBetween: 20
        }: {
            slidesPerView: 2,
            spaceBetween: 16,
            breakpoints: {
                768: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                }
            },
            navigation: true,
        }),
        mousewheel: {
            enabled: true,
        },
        scrollbar: {
            enabled: true,
            draggable: true
        }
    }), [inMiniCart]);
    const { loading, data } = useProductRecommended();
    return loading ? <SkeletonProductRecommended inMiniCart={inMiniCart}/> : data && (
        <Swiper {...swiperOptions}>
            {
                data.map(product => (
                    <SwiperSlide key={product.uid}>
                        <ProductRecommendedItem data={product} inMiniCart={inMiniCart} onSelect={(sku) => onSelect && onSelect(sku)}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};