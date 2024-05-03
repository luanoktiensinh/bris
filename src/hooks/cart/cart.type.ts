
export type CreateCartResponse = {
    cartId: string
}
export type CartPrices = {
    subtotal_including_tax: Money,
    subtotal_excluding_tax: Money
}
export type CartProduct = {
    uid: string,
    product: {
        name: string,
        sku: string,
        url_key: string
        thumbnail: {
            url: string
        },
        stock_status: string,
    }
    prices: {
        price: Money,
        total_item_discount: {
            value: number
        }
    },
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