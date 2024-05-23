import { IProductDetailProps } from "../ProductDetail/ProductDetail.type";
import { PRODUCT_RECOMMENDED } from "./GlobalModal.const";
import {IImageByIntagramItemDetailsProps} from "../ImageByIntagramItemDetails/ImageByIntagramItemDetails.type";
import { INSTAGRAM_IMAGES } from "./GlobalModal.const";

export type GlobalModalContents = {
    [PRODUCT_RECOMMENDED]: IProductDetailProps,
    [INSTAGRAM_IMAGES]: IImageByIntagramItemDetailsProps
}