import {IProductRecommendedResponse} from "@/components/ProductRecommended/ProductRecommended.type";

export interface IProductDetailProps {
    sku: string
}
export type VariantProductDetail = {
    attributes: ConfigurableAttributeOption[],
    product: {
        sku: string,
        uid: string
        price_range: PriceRange,
        stock_status: string,
        media_gallery?: ProductGallery[]
    }
}
export type ProductDetailConfOption = {
    attribute_code: string,
    label: string,
    use_default: boolean,
    values: {
        label: string,
        use_default: boolean,
        uid: string,
        swatch_data?: {
            value: string
        }
    }[]
}
export type RecommendedProductItemDetail = Omit<IProductRecommendedResponse["products"]["items"]["0"], "configurable_options"> & {
    variants?: VariantProductDetail[],
    media_gallery?: ProductGallery[],
    configurable_options?: ProductDetailConfOption[]
}
export type ProductDetailResponse = {
    products: {
        items: RecommendedProductItemDetail[]
    }
}