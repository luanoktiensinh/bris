"use client";
import {useCallback, useEffect, useState} from "react";
import {useStorage} from "@/hooks/useStorage";
import {MINICART_ID_KEY_STORE} from "@/const/miniCart";
import {GQL_GET_CART_TOTAL} from "@/hooks/cart/cart.gql";
import {CartTotalResponse} from "@/hooks/cart/cart.type";
import {useLazyQuery} from "@apollo/client";

export const useMiniCart = () => {
    const { get: getStorage } = useStorage();
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ data, setData ] = useState(0);
    const [ _getCartTotal ] = useLazyQuery<CartTotalResponse>(GQL_GET_CART_TOTAL);
    const getCartTotal = useCallback(async () => {
        const cartId = getStorage(MINICART_ID_KEY_STORE);
        if(!cartId) return setData(0);
        setLoading(true);
        const { data } = await _getCartTotal({
            variables: {
                cartId
            }
        });
        setData(data?.cart.total_quantity ?? 0);
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        void getCartTotal();
    }, [getCartTotal]);
    return {
        data, loading
    };
};