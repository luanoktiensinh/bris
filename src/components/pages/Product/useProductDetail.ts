import { useEffect, useState } from "react";
import {useLazyQuery} from "@apollo/client";
import {GQL_PRODUCTS_DETAIL} from "./ProductDetail.gql";
import { getClient } from "@/lib/apolloClient";

interface IUseProductDetailProps {
    urlKey: string
}
export const useProductDetail = async ({
    urlKey
}: IUseProductDetailProps) => {
    const client = getClient();

    const { data, error } = await client.query({
        query: GQL_PRODUCTS_DETAIL,
        variables: {
            urlKey
        }
    });

    return {
        product: data?.products.items?.[0],
        error,
    };
};