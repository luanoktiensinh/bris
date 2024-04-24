import { IProductRecommended, IProductRecommendedAttrItem } from "@/components/ProductRecommended/ProductRecommended.type";

export interface IProductDetailContentProps {
    data: IProductRecommended,
    changeVariant: () => void
}
export type ProductDetailContentSelected = {
    [ key in string ]: IProductRecommendedAttrItem
}