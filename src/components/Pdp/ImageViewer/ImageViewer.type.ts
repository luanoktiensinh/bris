import type { Swiper as SwiperType } from 'swiper';
import { IProduct } from '@/components/pages/Product/Product.type';

export interface IImageViewerProps {
    items: string[];
    product: IProduct;
    thumbsSwiper?: SwiperType | null;
    closeImageViewer: Function
}