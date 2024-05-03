import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart } from "@/hooks/cart/cart.type";

interface miniCartSlide {
    show: boolean,
    id: string,
    data?: Cart
}

const initialState: miniCartSlide = {
    show: false,
    id: ''
};

export const miniCartSlide = createSlice({
    name: 'MiniCart',
    initialState,
    reducers: {
        setShow: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        },
        setId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
        setData: (state, action: PayloadAction<Cart>) => {
            state.data = action.payload;
        }
    }
});

export const {
    setShow,
    setId,
    setData,
} = miniCartSlide.actions;
export default miniCartSlide.reducer;