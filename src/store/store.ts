import { configureStore } from "@reduxjs/toolkit";
import MegaMenuReducer from "./features/megaMenu/MegaMenuSlide";
import GlobalModalSlide from "./features/globalModal/GlobalModalSlide";
import GlobalSlide from "./features/global/GlobalSlide";

export const store = configureStore({
    reducer: {
        megaMenu: MegaMenuReducer,
        globalModal: GlobalModalSlide,
        global: GlobalSlide
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;