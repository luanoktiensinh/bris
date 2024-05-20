import {ProductPageProps} from "@/components/pages/Product/Product.type";
import { ImageSlider } from "@/components/Pdp/ImageSlider";
import { Info } from "@/components/Pdp/Info";

import { useProductDetail } from "./useProductDetail";
import styles from './Pdp.module.scss';

export const ProductDetailPage = async ({
    data
}: ProductPageProps) => {
    const { product } = await useProductDetail({ urlKey: data.url_key });
    
    return (
        <div className={styles['pdp-page']}>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <ImageSlider items={product.media_gallery} product={product} />
                    </div>
                    <div className="col-4">
                        <Info product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
};