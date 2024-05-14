"use client";
import { IRoute } from "@/hooks/resolveURL/resolveURL.type";
import { HeroCarousel } from "@/components/HeroCarousel";
import dynamic from "next/dynamic";
import { ProductGrid } from "@/components/ProductGrid";
const ProductRecommended = dynamic(() => import( /* webpackChunkName: "product-recommended" */"@/components/ProductRecommended").then(mod => mod.ProductRecommended));

import { CommonProductList } from "@/components/CommonProductList";

export const CMSPage = async ({}: IRoute) => {

    return (
        <>
            <HeroCarousel />
            <CommonProductList />
            {/* <div dangerouslySetInnerHTML={{__html: content}}></div>
            <div dangerouslySetInnerHTML={{__html: bottom_content}}></div> */}
            <ProductRecommended />
        </>
    );
};