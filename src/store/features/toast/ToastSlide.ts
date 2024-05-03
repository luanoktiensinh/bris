import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ToastState, ToastStateConfig } from "./ToastSlide.type";


const initialState: ToastState = {
    show: false
};

export const ToastSlide = createSlice({
    name: 'Toast',
    initialState,
    reducers: {
        setShow: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        },
        setConfig: (state, action: PayloadAction<ToastStateConfig>) => {
            state.config = action.payload;
        },
    }
});

export const {
    setShow,
    setConfig
} = ToastSlide.actions;
export default ToastSlide.reducer;