import { ApolloError, useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { GQL_ADD_CART, GQL_CREATE_CART, GQL_GET_CART, GQL_REMOVE_CART_ITEM, GQL_UPDATE_CART_ITEM } from "./cart.gql";
import { useStorage } from "../useStorage";
import { MINICART_ID_KEY_STORE } from "@/const/miniCart";
import { AddCartResponse, AddCartVariables, CartResponse, CreateCartResponse, RemoveCartResponse, RemoveCartVariables, UpdateCartResponse, UpdateCartVariables } from "./cart.type";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setData, setId } from "@/store/features/miniCart/MiniCartSlide";


export const useCart = () => {
    const dispatch = useAppDispatch();
    const { id: cartId } = useAppSelector(state => state.miniCart);
    const { get: getStorage, set: setStorage } =  useStorage();
    const [ error, setError ] = useState<ApolloError>();
    const [ loading, setLoading ] = useState(false);
    const [ _createCart ] = useMutation<CreateCartResponse>(GQL_CREATE_CART);
    const [ _getCart ] = useLazyQuery<CartResponse>(GQL_GET_CART);
    const [ _addProduct ] = useMutation<AddCartResponse>(GQL_ADD_CART);
    const [ _removeProduct ] = useMutation<RemoveCartResponse>(GQL_REMOVE_CART_ITEM);
    const [ _updateProduct ] = useMutation<UpdateCartResponse>(GQL_UPDATE_CART_ITEM);
    const getCartId = async () => {
        if(cartId) return cartId;
        let cartIdStored = getStorage(MINICART_ID_KEY_STORE);
        if(!cartIdStored) {
            const { data } = await _createCart();
            cartIdStored = data?.cartId ?? '';
        }
        dispatch(setId(cartIdStored));
        return cartIdStored;
    };
    const getCart = async () => {
        setLoading(true);
        let cartId = await getCartId();
        if(!cartId) {
            setLoading(false);
            return;
        }
        const { data, error } = await _getCart({
            variables: {
                cartId
            }
        });
        if(error || !data) {
            error && setError(error);
            setStorage(MINICART_ID_KEY_STORE, '');
            dispatch(setId(''));
            await getCart();
            return;
        }
        setStorage(MINICART_ID_KEY_STORE, data.cart.id);
        setLoading(false);
        dispatch(setData(data.cart));
    };
    const addProduct = async (payload: AddCartVariables) => {
        const { data } =  await _addProduct({
            variables: {
                ...payload,
                cartId: await getCartId()
            }
        });
        data?.addProductsToCart.cart && dispatch(setData(data.addProductsToCart.cart));
        return {
            cart: data?.addProductsToCart.cart,
            errors: data?.addProductsToCart.user_errors
        }
    };
    const removeProduct = async(payload: RemoveCartVariables) => {
        const { data } =  await _removeProduct({
            variables: {
                ...payload,
                cartId: await getCartId()
            }
        });
        data && dispatch(setData(data.removeItemFromCart.cart));
    };
    const updateProduct = async(payload: UpdateCartVariables) => {
        try {
            const { data } =  await _updateProduct({
                variables: {
                    ...payload,
                    cartId: await getCartId()
                }
            });
            data?.updateCartItems.cart && dispatch(setData(data.updateCartItems.cart));
            return { data };
        }
        catch(err) {
            return { error: err };
        }
    };
    return {
        loading,
        error,
        getCartId,
        getCart,
        addProduct,
        removeProduct,
        updateProduct
    };
};