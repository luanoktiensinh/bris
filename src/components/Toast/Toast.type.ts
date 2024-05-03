import { AddedProductProps } from "../AddedProduct/AddedProduct.type";
import { ADDED_PRODUCT } from "./Toast.const";

export type ToastContents = {
    [ADDED_PRODUCT]: AddedProductProps
}