import { IProductDetailProps } from "./ProductDetail.type";
import { useProductDetail } from "./useProductDetail";
import styles from './ProductDetail.module.scss';
import { Loading } from "../Loading";
import { useAppDispatch } from "@/store/hooks";
import { setShow } from "@/store/features/globalModal/GlobalModalSlide";
import { ProductDetailImage } from "./Images";
import { ProductDetailContent } from "./Content";
import { useState, useEffect } from "react";
export const ProductDetail = ({
    id
}: IProductDetailProps) => {
    const dispatch = useAppDispatch();
    const { loading, data } = useProductDetail({ id });
    const [ image, setImage ] = useState<string>('');
    useEffect(() => {
      if(data) {
        setImage(data.image);
      }
    }, [data]);
    
    return (
        <div className={styles.main}>
            <button className={styles.close} onClick={() => dispatch(setShow(false))}>X</button>
            {
                loading ? <Loading small center /> : data && (
                    <div className="row">
                        <div className="col-5">
                            <ProductDetailImage key={image} items={Array(5).fill(image)} />
                        </div>
                        <div className="col-7">
                            <ProductDetailContent changeVariant={() => setImage('https://picsum.photos/400?random=' + new Date().getTime())} data={data}/>
                        </div>
                    </div>
                )
            }
        </div>
    );
};