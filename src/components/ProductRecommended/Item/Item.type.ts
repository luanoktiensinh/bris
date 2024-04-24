import { IProductRecommended } from "../ProductRecommended.type";

export interface IProductRecommendedItemsProps {
    data: IProductRecommended,
    onSelect: (id: number) => void
}