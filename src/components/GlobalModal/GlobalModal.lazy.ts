import { lazy } from "react";
import { PRODUCT_RECOMMENDED } from "./GlobalModal.const";

const ProductDetail = lazy(() => import(/* webpackChunkName: "product-recommended-detail" */  "@/components/ProductDetail").then(mod => ({default: mod.ProductDetail})));
const components = {
    [PRODUCT_RECOMMENDED]: ProductDetail
};
export default components;