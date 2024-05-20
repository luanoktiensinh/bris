import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface GlobalSlide {
    locale: string,
    currencyCode: string,
    screenWidth: number,
    loading: boolean,
	gridPerPage: number
}

const initialState: GlobalSlide = {
    locale: 'en_US',
    currencyCode: 'USD',
    screenWidth: 0,
    loading: false,
	gridPerPage: 24
};

export const globalSlide = createSlice({
    name: 'Global',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setLocale: (state, action: PayloadAction<string>) => {
            state.locale = action.payload.replace(/_/g, '-');
        },
        setCurrencyCode: (state, action: PayloadAction<string>) => {
            state.currencyCode = action.payload;
        },
        setScreenWidth: (state, action: PayloadAction<number>) => {
            state.screenWidth = action.payload;
        },
		setGridPerPage: (state, action: PayloadAction<number>) => {
			state.gridPerPage = action.payload;
		}
    }
});

export const {
    setLoading,
    setLocale,
    setCurrencyCode,
	setGridPerPage,
    setScreenWidth
} = globalSlide.actions;
export default globalSlide.reducer;