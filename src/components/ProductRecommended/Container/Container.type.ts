import {IProductRecommended} from "@/components/ProductRecommended/ProductRecommended.type";

export interface ProductRecommendedContainerProps {
    inMiniCart?: boolean,
    onSelect: (sku: string) => void
}