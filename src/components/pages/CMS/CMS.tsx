"use client";
import { IRoute } from "@/hooks/resolveURL/resolveURL.type";
import { HeroCarousel } from "@/components/HeroCarousel";
import dynamic from "next/dynamic";
const ProductRecommended = dynamic(() => import("@/components/ProductRecommended").then(mod => mod.ProductRecommended));

export const CMSPage = ({}: IRoute) => {
    return (
        <>
            <HeroCarousel />
            {/* <div dangerouslySetInnerHTML={{__html: content}}></div>
            <div dangerouslySetInnerHTML={{__html: bottom_content}}></div> */}
            <ProductRecommended />
        </>
    );
};