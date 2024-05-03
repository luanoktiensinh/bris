import { IProductRecommended } from "@/components/ProductRecommended/ProductRecommended.type"

export type MiniCartProduct = IProductRecommended & {
    quantity: number
}