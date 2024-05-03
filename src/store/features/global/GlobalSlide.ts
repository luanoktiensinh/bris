import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface GlobalSlide {
    locale: string,
    currencyCode: string,
    screenWidth: number,
    loading: boolean
}

const initialState: GlobalSlide = {
    locale: 'en_US',
    currencyCode: 'USD',
    screenWidth: 0,
    loading: false
};

export const globalSlide = createSlice({
    name: 'Global',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setLocale: (state, action: PayloadAction<string>) => {
            state.locale = action.payload;
        },
        setCurrencyCode: (state, action: PayloadAction<string>) => {
            state.currencyCode = action.payload;
        },
        setScreenWidth: (state, action: PayloadAction<number>) => {
            state.screenWidth = action.payload;
        }
    }
});

export const {
    setLoading,
    setLocale,
    setCurrencyCode,
    setScreenWidth
} = globalSlide.actions;
export default globalSlide.reducer;