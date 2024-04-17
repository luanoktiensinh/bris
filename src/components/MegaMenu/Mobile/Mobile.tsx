"use client"
import { Loading } from "@/components/Loading";
import { useAppSelector } from "@/store/hooks";
import { Suspense, lazy } from "react";
const MegaMenuMobileContainer = lazy(() => import("./Container").then(mod => ({ default: mod.MegaMenuMobileContainer})));
export const MegaMenuMobile = () => {
    const { mobileComponentLoaded, showMiniCart } = useAppSelector(store => store.megaMenu);
    return showMiniCart && mobileComponentLoaded && (
        <Suspense fallback={<Loading center small />}>
            <MegaMenuMobileContainer />
        </Suspense>
    )
};