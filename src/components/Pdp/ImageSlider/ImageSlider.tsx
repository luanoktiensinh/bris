"use client";
import { IProductDetailImagesProps } from "./Images.type";
import { useMemo, useState  } from "react";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from './Images.module.scss';
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import { lazy } from 'react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

const ImageViewer = lazy(() => import(/* webpackChunkName: "image-viewer" */ "../ImageViewer").then(mod => ({default: mod.ImageViewer})));

export const ImageSlider = ({
    items, product
}: IProductDetailImagesProps) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [showImageViewer, setShowImageViewer] = useState(false);

    const options = useMemo<SwiperOptions>(() => ({
        modules: [ Navigation, Thumbs ],
        loop: items?.length > 1,
        spaceBetween: 0,
        navigation: false,
        thumbs: { swiper: thumbsSwiper }
    }), [items, thumbsSwiper]);

    return (
        <div className="container">
            <div className={`${styles["img-wrap"]}`}>

                <div className={styles["img-thumbs"]}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        freeMode={true}
                        scrollbar={true}
                        mousewheel={true}
                        watchSlidesProgress={true}
                        slidesPerView={'auto'}
                        modules={[FreeMode, Navigation, Thumbs]}
                        
                        slideActiveClass={styles["img-thumbs-active"]}
                        breakpoints={{
                            992: {
                                direction: "vertical"
                            }
                        }}
                    >
                        {
                            items.map((item: any, index) => (
                                <SwiperSlide key={index} className={styles.item}>
                                    {item && <Image src={item?.url} width={100} height={100} alt={product.name} />}
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                
                <div className={styles["img-main"]}>
                    <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        {...options}
                    >
                        {
                            items.map((item: any, index) => (
                                <SwiperSlide key={index} className={styles.item} onClick={() => setShowImageViewer(true)}>
                                    {item && <Image priority={true} src={item?.url} width={770} height={770} alt={product.name} />}
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>

            {
                showImageViewer ? <ImageViewer product={product} items={items} thumbsSwiper={thumbsSwiper} closeImageViewer={() => setShowImageViewer(false)}  /> : <></>
            }
        </div>
    );
};

export default ImageSlider;