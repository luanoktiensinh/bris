import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface GlobalSlide {
    locale: string,
    currencyCode: string
}

const initialState: GlobalSlide = {
    locale: 'en_US',
    currencyCode: 'USD'
};

export const globalSlide = createSlice({
    name: 'Global',
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<string>) => {
            state.locale = action.payload;
        },
        setCurrencyCode: (state, action: PayloadAction<string>) => {
            state.currencyCode = action.payload;
        }
    }
});

export const {
    setLocale,
    setCurrencyCode
} = globalSlide.actions;
export default globalSlide.reducer;