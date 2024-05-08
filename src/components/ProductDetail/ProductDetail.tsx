import {IProductDetailProps, VariantProductDetail} from "./ProductDetail.type";
import { useProductDetail } from "./useProductDetail";
import styles from './ProductDetail.module.scss';
import { Loading } from "../Loading";
import { useAppDispatch } from "@/store/hooks";
import { setShow } from "@/store/features/globalModal/GlobalModalSlide";
import { ProductDetailImage } from "./Images";
import { ProductDetailContent } from "./Content";
import {useState, useMemo} from "react";
export const ProductDetail = ({
    sku
}: IProductDetailProps) => {
    const dispatch = useAppDispatch();
    const { loading, data, error } = useProductDetail({ sku });
    const [variantSelected, setVariantSelected] = useState<VariantProductDetail>();
    const images = useMemo(() => {
        let gallery: ProductGallery[] = [];
        if(variantSelected) {
            gallery = variantSelected.product.media_gallery ?? [];
        }
        else {
            gallery = data?.media_gallery ?? [];
        }
        return gallery.map(media => media.url ?? '') ?? [];
    }, [data, variantSelected]);
    if(!loading && error) return null;
    return (
        <div className={styles.main}>
            <button className={styles.close} onClick={() => dispatch(setShow(false))}>X</button>
            {
                loading ? <Loading small center /> : data && (
                    <div className="row">
                        <div className="col-5">
                            <ProductDetailImage items={images} />
                        </div>
                        <div className="col-7">
                            <ProductDetailContent changeVariant={setVariantSelected} data={data}/>
                        </div>
                    </div>
                )
            }
        </div>
    );
};