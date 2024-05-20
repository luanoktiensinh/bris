export interface IProductRecommendedAttrItem {
    label: string,
    value: string,
}
export interface IProductRecommendedAttr {
    name: string,
    label: string,
    items: IProductRecommendedAttrItem[]
}
export interface IProductRecommended {
    uid: string,
    url_key: string,
    url_suffix: string,
    name: string,
    small_image: {
        url: string
    }
    price_range: PriceRange,
    attributes?: IProductRecommendedAttr[],
    sku: string,
    stock_status: string,
    configurable_options?: ConfigurableProductOption[],
    __typename?: "SimpleProduct" | "ConfigurableProduct"
}
export interface IProductRecommendedProps {
    title?: string,
    inMiniCart?: boolean
}
export interface IProductRecommendedResponse {
    products: {
        items: IProductRecommended[]
    }
}