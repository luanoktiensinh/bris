"use client";
import { IRoute } from "@/hooks/resolveURL/resolveURL.type";
import { HeroCarousel } from "@/components/HeroCarousel";
import dynamic from "next/dynamic";
const ProductRecommended = dynamic(() => import( /* webpackChunkName: "product-recommended" */"@/components/ProductRecommended").then(mod => mod.ProductRecommended));
const ProductGrid = dynamic(() => import(/* webpackChunkName: "product-grid" */ "@/components/ProductGrid").then(mod => mod.ProductGrid));

export const CMSPage = ({}: IRoute) => {
    return (
        <>
            <HeroCarousel />
            <ProductGrid />
            {/* <div dangerouslySetInnerHTML={{__html: content}}></div>
            <div dangerouslySetInnerHTML={{__html: bottom_content}}></div> */}
            <ProductRecommended />
        </>
    );
};