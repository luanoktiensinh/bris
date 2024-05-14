import dynamic from "next/dynamic";
import { useProductGrid } from "./useCommonProductList";
import { ProductsResponse } from '../ProductGrid/Product.type';

import { ProductGrid } from '@/components/ProductGrid';
// const ProductGrid = dynamic(() => import("@/components/ProductGrid").then(mod => mod.ProductGrid));

const CommonProductList = async () => {
    const { getProductGridData } = useProductGrid();
    const productsResponse: ProductsResponse = await getProductGridData();

    return (
        <div className="container">
            <ProductGrid itemPerRow={5} productsResponse={productsResponse} />
        </div>
    );
};

export default CommonProductList;