import { lazy } from "react";
import { ADDED_PRODUCT } from "./Toast.const";

const AddedProduct = lazy(() => import(/* webpackChunkName: "added-product" */ "@/components/AddedProduct").then(mod => ({default: mod.AddedProduct})));
const components = {
    [ADDED_PRODUCT]: AddedProduct
};
export default components;