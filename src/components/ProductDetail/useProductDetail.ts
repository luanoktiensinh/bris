import { useEffect, useState } from "react";
import { IProductRecommended } from "../ProductRecommended/ProductRecommended.type";
import { product } from "../ProductRecommended/ProductRecommended.mock";

interface IUseProductDetailProps {
    id: number
}
export const useProductDetail = ({
    id
}: IUseProductDetailProps) => {
    const [ data, setData ] = useState<IProductRecommended>();
    const [ loading, setLoading ] = useState(true);
    const getProduct = () => {
        setTimeout(() => {
            let productTarget;
            if((productTarget = product.find(item => item.id === id))) {
                setData(productTarget);
            };
            setLoading(false);
        }, 1000);
    };
    useEffect(() => {
        getProduct();
    });
    return {
        data,
        loading,
        getProduct
    };
};