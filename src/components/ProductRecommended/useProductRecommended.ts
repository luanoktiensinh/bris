import { useState } from "react";
import { product } from "./ProductRecommended.mock";
import { IProductRecommended } from "./ProductRecommended.type";

export const useProductRecommended = () => {
    const [ loading, setLoading ] = useState(true);
    const [ data , setData] = useState<IProductRecommended[]>();
    const getData = ()=> {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setData(product);
        }, 1000);
    };
    return {
        getData,
        loading,
        data
    };
};