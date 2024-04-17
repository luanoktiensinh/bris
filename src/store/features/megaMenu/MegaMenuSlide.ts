import { IMegaMenuData, IMegaMenuItem, IMegaMenuRightContent } from "@/components/MegaMenu/MegaMenu.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MegaMenuState {
    showMiniCart: boolean,
    mobileComponentLoaded: boolean,
    level: number,
    data?: IMegaMenuData,
    itemSelected?: IMegaMenuItem & IMegaMenuRightContent
}

const initialState: MegaMenuState = {
    showMiniCart: false,
    mobileComponentLoaded: false,
    level: 0,
};

export const globalSlide = createSlice({
    name: 'megaMenu',
    initialState,
    reducers: {
        setMobileComponentLoaded: (state, action: PayloadAction<boolean>) => {
            state.mobileComponentLoaded = action.payload;
        },
        setShowMiniCart: (state, action: PayloadAction<boolean>) => {
            state.showMiniCart = action.payload;
        },
        setData: (state, action: PayloadAction<IMegaMenuData>) => {
            state.data = action.payload;
        },
        setSelected: (state, action: PayloadAction<IMegaMenuItem & IMegaMenuRightContent | undefined>) => {
            state.itemSelected = action.payload;
        }
    }
});

export const {
    setShowMiniCart,
    setData,
    setSelected,
    setMobileComponentLoaded
} = globalSlide.actions;
export default globalSlide.reducer;