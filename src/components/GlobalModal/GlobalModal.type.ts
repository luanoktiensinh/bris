import { IProductDetailProps } from "../ProductDetail/ProductDetail.type";
import { PRODUCT_RECOMMENDED } from "./GlobalModal.const";

export type GlobalModalContents = {
    [PRODUCT_RECOMMENDED]: IProductDetailProps
}