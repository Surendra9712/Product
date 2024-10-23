import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Product} from "../../commons/models";

interface ProductState {
    data: Product[];
    isLoading:boolean
}

const initialState: ProductState = {
    data: [],
    isLoading: false,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<Product[]>) => {
            state.data = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setProduct,setLoading } = productSlice.actions;

export default productSlice.reducer;
