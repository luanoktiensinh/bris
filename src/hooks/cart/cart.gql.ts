import { gql } from "@apollo/client";
import {fragment_price_range} from "@/graphql/Product.gql";

const GQL_MINICART_FRAGMENT = gql`
    ${fragment_price_range}
    fragment MiniCartFragment on Cart{
        id
        total_quantity
        prices{
            subtotal_excluding_tax{
                currency
                value
            }
            subtotal_including_tax{
                currency
                value
            }
        }
        ...ProductListFragment
    }
    fragment ProductListFragment on Cart{
        id 
        items{
            uid
            product{
                uid
                name 
                sku 
                url_key
                url_suffix
                thumbnail{
                    url 
                }
                stock_status
                ...on ConfigurableProduct{
                    variants{
                        attributes{
                            uid
                            code
                            label
                        }
                        product{
                            uid
                            thumbnail{
                                url 
                            }
                            url_key
                            url_suffix
                            price_range {
                                ...PriceRangeCustom
                            }
                        }
                    }
                }
            }
            prices{
                price{
                    currency 
                    value 
                }
                total_item_discount{
                    value
                }
            }
            quantity
            ...on ConfigurableCartItem{
                configurable_options{
                    option_label 
                    configurable_product_option_value_uid 
                    value_label
                }
            }
        }
    }
`;
const GQL_MINICART_FRAGMENT_CART = gql`
    fragment CartFragment on Cart {
        id
        total_quantity
        total_summary_quantity_including_config
    }
`;

export const GQL_CREATE_CART = gql`
    mutation createCart {
        cartId: createEmptyCart
    }
`;

export const GQL_GET_CART = gql`
    ${GQL_MINICART_FRAGMENT}
    query MiniCartQuery($cartId:String!){
        cart(cart_id:$cartId){
            id
            ...MiniCartFragment
        }
    }
`;

export const GQL_GET_CART_TOTAL = gql`
    query MiniCartTotalQuantityQuery($cartId: String!){
        cart(cart_id:$cartId){
            total_quantity
        }
    }
`;

export const GQL_ADD_CART = gql`
    mutation AddProductToCart($cartId: String!, $product: CartItemInput!) {
        addProductsToCart(cartId: $cartId, cartItems: [$product]) {
            cart {
                id
                ...CartFragment
                ...MiniCartFragment
            }
            user_errors {
                code
                message
            }
        }
    }
    ${GQL_MINICART_FRAGMENT}
    ${GQL_MINICART_FRAGMENT_CART}
    
`;
export const GQL_REMOVE_CART_ITEM = gql`
    mutation RemoveItemForMiniCart($cartId: String!, $itemId: ID!) {
        removeItemFromCart(input: {cart_id: $cartId, cart_item_uid: $itemId}) {
            cart {
                id
                ...CartFragment
                ...MiniCartFragment
            }
        }
    }
    ${GQL_MINICART_FRAGMENT}
    ${GQL_MINICART_FRAGMENT_CART}
`;
export const GQL_UPDATE_CART_ITEM = gql`
    mutation UpdateCartItems($cartId: String!, $cartItems: [CartItemUpdateInput]!) {
        updateCartItems(input: {cart_id: $cartId, cart_items: $cartItems}) {
            cart {
                id
                ...CartFragment
                ...MiniCartFragment
            }
        }
    }
    ${GQL_MINICART_FRAGMENT}
    ${GQL_MINICART_FRAGMENT_CART}
`;