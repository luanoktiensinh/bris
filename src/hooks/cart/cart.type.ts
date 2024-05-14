export type CreateCartResponse = {
    cartId: string
}
export type CartPrices = {
    subtotal_including_tax: Money,
    subtotal_excluding_tax: Money
}
export type CartVariant = {
    product: {
        uid: string,
        thumbnail: {
            url: string
        },
        url_key: string,
        url_suffix: string,
        price_range: PriceRange
    },
    attributes: {
        uid: string,
        code: string,
        label: string
    }[]
}
export type CartProductOption = {
    option_label: string,
    value_label: string,
    configurable_product_option_value_uid: string
}
export type CartProduct = {
    uid: string,
    product: {
        name: string,
        sku: string,
        url_key: string,
        url_suffix: string
        thumbnail: {
            url: string
        },
        stock_status: string,
        variants?: CartVariant[]
    }
    prices: {
        price: Money,
        total_item_discount: {
            value: number
        }
    },
    configurable_options?: CartProductOption[],
    quantity: number
}
export type Cart = {
    id: string,
    total_quantity: number,
    prices: CartPrices,
    items: CartProduct[]
}
export type UserError = {
    message: string,
    code: string
}
export type CartResponse = {
    cart: Cart,
    user_errors: UserError[]
}
export type CartTotalResponse = {
    cart: {
        total_quantity: number
    }
}
export type AddCartProduct = {
    quantity: number,
    sku: string,
    selected_options?: string[]
}
export type AddCartVariables = {
    product: AddCartProduct
}
export type UpdateCartVariables = {
    cartItems: {
        cart_item_uid: string,
        quantity: number
    }[]
}
export type RemoveCartVariables = {
    itemId: string
}
export type AddCartResponse = {
    addProductsToCart: CartResponse
}
export type RemoveCartResponse = {
    removeItemFromCart: CartResponse
}
export type UpdateCartResponse = {
    updateCartItems: CartResponse
}

export type GetCurrentCartParam = {
    code: string, uid: string
}