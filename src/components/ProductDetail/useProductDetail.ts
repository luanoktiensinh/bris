import { useEffect, useState } from "react";
import {useLazyQuery} from "@apollo/client";
import {GQL_RECOMMENDED_PRODUCTS_DETAIL} from "@/components/ProductDetail/ProductDetail.gql";
import {ProductDetailResponse} from "@/components/ProductDetail/ProductDetail.type";

interface IUseProductDetailProps {
    sku: string
}
export const useProductDetail = ({
    sku
}: IUseProductDetailProps) => {
    const [ getProduct, { loading, data, error} ] = useLazyQuery<ProductDetailResponse>(GQL_RECOMMENDED_PRODUCTS_DETAIL);
    useEffect(() => {
        if(sku) {
            getProduct({
                variables: {
                    sku
                }
            });
        }
    }, [sku, getProduct]);
    return {
        data: data?.products.items?.[0],
        error,
        loading,
        getProduct
    };
};