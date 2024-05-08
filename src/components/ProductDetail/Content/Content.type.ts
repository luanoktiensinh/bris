import { IProductRecommendedAttrItem } from "@/components/ProductRecommended/ProductRecommended.type";
import {RecommendedProductItemDetail, VariantProductDetail} from "@/components/ProductDetail/ProductDetail.type";

export interface IProductDetailContentProps {
    data: RecommendedProductItemDetail,
    changeVariant: (data?: VariantProductDetail) => void
}
export type ProductDetailContentSelected = {
    [ key in string ]: IProductRecommendedAttrItem
}
export type VariantSelected = {
    [ key in string ]: string
}
export type UseProductDetailContentProps = {
    variants?: VariantProductDetail[]
}