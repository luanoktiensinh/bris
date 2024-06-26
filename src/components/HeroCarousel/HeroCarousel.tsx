'use client';
import Image from 'next/image';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useHeroCarousel } from "./useHeroCarousel";
import './HeroCarousel.scss';

const HeroCarousel = () => {
    const { getData } = useHeroCarousel();
    const data = getData();
    return (
        <div className="container">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                className='hero-carousel-block'
                loop={true}
                navigation
                pagination={{ clickable: true }}
            >
                <div className="category-slider" data-widget="1">
                    {data?.items?.map((item, index) => (
                        <SwiperSlide key={index} virtualIndex={index} className="hero-banner-block height-full in-homepage">
                            <Link href="/" className={"d-block"}>
                                <Image
                                    className="d-none d-m-block"
                                    src={item.image_url_mobile?.src}
                                    alt={item.name}
                                    priority={index === 0 ? true : false}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <Image
                                    className="d-m-none"
                                    src={item.image_url?.src}
                                    alt={item.name}
                                    priority={index === 0 ? true : false}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default HeroCarousel;