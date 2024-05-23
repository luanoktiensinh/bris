import { lazy } from "react";
import { PRODUCT_RECOMMENDED, INSTAGRAM_IMAGES } from "./GlobalModal.const";

const ProductDetail = lazy(() => import(/* webpackChunkName: "product-recommended-detail" */ "@/components/ProductDetail").then(mod => ({default: mod.ProductDetail})));
const ImageByIntagramItemDetails = lazy(() => import(/* webpackChunkName: "instagram-block-detail" */ "@/components/ImageByIntagramItemDetails").then(ImageIn => ({default: ImageIn.ImageByIntagramItemDetails})));
const components: any = {
    [PRODUCT_RECOMMENDED]: ProductDetail,
    [INSTAGRAM_IMAGES]: ImageByIntagramItemDetails
};
export default components;