import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalState, ModalStateConfig } from "./globalModal.type";

const initialState: ModalState = {
    show: false,
};

export const modalSlide = createSlice({
    name: 'globalModal',
    initialState,
    reducers: {
        setShow: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        },
        openModal: (state, action: PayloadAction<ModalStateConfig>) => {
            state.show = true;
            state.config = action.payload;
        },
        setConfig: (state, action: PayloadAction<ModalStateConfig>) => {
            state.config = action.payload;
        },
    }
});

export const {
    setShow,
    setConfig,
    openModal
} = modalSlide.actions;
export default modalSlide.reducer;