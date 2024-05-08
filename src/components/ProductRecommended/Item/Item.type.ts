import { IProductRecommended } from "../ProductRecommended.type";

export interface IProductRecommendedItemsProps {
    data: IProductRecommended,
    onSelect: (id: string) => void,
    inMiniCart?: boolean
}