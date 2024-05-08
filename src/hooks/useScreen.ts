import { setScreenWidth } from "@/store/features/global/GlobalSlide";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";

export const useScreen = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const onScreenResize = () => {
            dispatch(setScreenWidth(window.innerWidth));
        };
        window.addEventListener('resize', onScreenResize);
        onScreenResize();
        return () => {
            window.removeEventListener('resize', onScreenResize);
        };
    });
    return {
        
    };
};