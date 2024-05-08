import {IProductRecommendedResponse} from "./ProductRecommended.type";
import {useQuery} from "node_module/@apollo/client";
import {GQL_RECOMMENDED_PRODUCTS} from "@/components/ProductRecommended/ProductRecommended.gql";

export const useProductRecommended = () => {
    const { data, loading, error } = useQuery<IProductRecommendedResponse>(GQL_RECOMMENDED_PRODUCTS);
    return {
        loading,
        data: data?.products.items ?? [],
        error
    };
};