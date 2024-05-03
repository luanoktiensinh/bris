import { configureStore } from "@reduxjs/toolkit";
import MegaMenuReducer from "./features/megaMenu/MegaMenuSlide";
import GlobalModalSlide from "./features/globalModal/GlobalModalSlide";
import GlobalSlide from "./features/global/GlobalSlide";
import MiniCartSlide from "./features/miniCart/MiniCartSlide";
import ToastSlide from "./features/toast/ToastSlide";

export const store = configureStore({
    reducer: {
        megaMenu: MegaMenuReducer,
        globalModal: GlobalModalSlide,
        global: GlobalSlide,
        miniCart: MiniCartSlide,
        toast: ToastSlide
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;