'use client';

import {useCallback, useMemo} from "react";
import Image from 'next/image';
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperOptions} from "swiper/types";
import {Mousewheel, Navigation, Scrollbar} from "swiper/modules";
import { useImageByIntagram } from './useImageByIntagram';
import { INSTAGRAM_IMAGES } from "../GlobalModal/GlobalModal.const";
import { InstagramIcon } from '@/icons/instagram-icon';
import styles from './ImageByIntagram.module.scss';
import { useAppDispatch } from "@/store/hooks";
import { openModal } from "@/store/features/globalModal/GlobalModalSlide";

export const ImageByIntagram = () => {
    const { getData } = useImageByIntagram();
    const data = getData();
    const dispatch = useAppDispatch();
   
    const quickView = useCallback((index?: number) => {
        if(index !== undefined) {
            dispatch(openModal({
                type: INSTAGRAM_IMAGES,
                props: {
                    index: index,
                    items: data?.items
                }
            }));
        }
    }, [dispatch, data]);

    const swiperOptions = useMemo<SwiperOptions>(() => ({
        modules: [ Mousewheel, Scrollbar, Navigation ],
        ...{
            slidesPerView: 2,
            spaceBetween: 0.75,
            breakpoints: {
                768: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                }
            },
            navigation: true,
        },
        mousewheel: {
            enabled: true,
        },
        scrollbar: {
            enabled: false,
            draggable: true
        }
    }), []);
    
    return (
        <div className={`${styles["shop-instagram"]} ${styles.main}`}>
            <div className="container">
                <h3 className={styles["shop-instagram__title"]}>{data.title}</h3>
                <Swiper className={styles["instagram-images"]} {...swiperOptions}>
                    {data?.items?.map((item, index) => (
                        <SwiperSlide key={item.id} className={styles["instagram-image__item"]} onClick={() => quickView(index)}>
                            <Image
                                src={item.image_url}
                                alt={item.name}
                                priority={false}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <span className={styles["instagram-icon"]}><InstagramIcon /></span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
