"use client";
import { IImageViewerProps } from "./ImageViewer.type";
import { useMemo, useState, useEffect  } from "react";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from './ImageViewer.module.scss';
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { CloseIcon } from '@/icons/close';

export const ImageViewer = ({
    items, thumbsSwiper, closeImageViewer, product
}: IImageViewerProps) => {

    const [thumbsSwiperActive, setThumbsSwiperActive] = useState<SwiperType | null>(null);    

    const options = useMemo<SwiperOptions>(() => ({
        initialSlide: thumbsSwiper?.clickedIndex,
        modules: [ Navigation, Thumbs ],
        loop: items?.length > 1,
        spaceBetween: 0,
        navigation: items?.length > 1,
        thumbs: { swiper: thumbsSwiperActive } 
    }), [items, thumbsSwiperActive]);
    
    return (
        <div className={styles['img-viewer']}>
            <button className={styles.close} onClick={() => closeImageViewer()}>
                <CloseIcon />
            </button>

            <div className={`${styles["img-wrap"]}`}>
                <div className={styles["img-main"]}>
                    <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiperActive }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        {...options}
                    >
                        {
                            items.map((item: any, index) => (
                                <SwiperSlide key={index} className={styles.item}>
                                    {item && <Image src={item?.url} width={770} height={770} alt={product.name} />}
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                <div className={styles["img-thumbs"]}>
                    <div className="container">
                        <Swiper
                            onSwiper={setThumbsSwiperActive}
                            spaceBetween={20}
                            slidesPerView={'auto'}
                            modules={[FreeMode, Navigation, Thumbs]}
                            freeMode={true}
                            scrollbar={true}
                            mousewheel={true}
                            watchSlidesProgress={true}
                            slideActiveClass={styles["img-thumbs-active"]}
                        >
                            {
                                items.map((item: any, index) => (
                                    <SwiperSlide key={index} className={styles.item}>
                                        {item && <Image src={item?.url} width={60} height={60} alt={product.name} />}
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageViewer;