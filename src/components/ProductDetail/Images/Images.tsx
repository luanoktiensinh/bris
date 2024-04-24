import { IProductDetailImagesProps } from "./Images.type";
import { useMemo } from "react";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from './Images.module.scss';
import { Navigation } from "swiper/modules";

export const ProductDetailImage = ({
    items
}: IProductDetailImagesProps) => {
    const options = useMemo<SwiperOptions>(() => ({
        modules: [ Navigation ],
        loop: true,
        spaceBetween: 0,
        navigation: true
    }), []);
    return (<Swiper {...options} className={styles.main}>
        {
            items.map((item, index) => (
                <SwiperSlide key={index} className={styles.item}>
                    {item && <Image src={item} width={303} height={303} alt="Product image" />}
                </SwiperSlide>
            ))
        }
    </Swiper>);
};