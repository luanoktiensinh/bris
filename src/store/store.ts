import { configureStore } from "@reduxjs/toolkit";
import megaMenuReducer from "./features/megaMenu/MegaMenuSlide";

export const store = configureStore({
    reducer: {
        megaMenu: megaMenuReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;