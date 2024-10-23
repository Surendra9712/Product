import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cart, IAddToCart, IProduct} from "../../commons/models";
import {cartService} from "../../commons";
import {SliceStatusEnum} from "../../commons/enum";

interface CartState {
    item: Cart | null;
    status: SliceStatusEnum;
    error: any;
}

const initialState: CartState = {
    item: null,
    status: SliceStatusEnum.Idle,
    error: null,
};

export const addToCart = createAsyncThunk<
    Cart,
    IAddToCart,
    { rejectValue: any }
>('order/addToCart', async (product, {rejectWithValue}) => {
    try {
        return await cartService.addToCart(product.cartId,product.item).catch(er => {
            return Promise.reject(er)
        });
    } catch (er) {
        return rejectWithValue(er);
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItem: (state, action: PayloadAction<Cart|null>) => {
            state.item = action.payload;
        },
        removeCartItem: (state, action: PayloadAction<IProduct>) => {
            if (state.item) {
                const index = state.item.items.findIndex((item:IProduct) => item._id === action.payload._id);
                if (index !== -1) {
                    state.item.items.splice(index, 1);
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.status = SliceStatusEnum.Loading;
            })
            .addCase(addToCart.fulfilled, (state, action: PayloadAction<Cart>) => {
                state.status = SliceStatusEnum.Completed;
                state.item = action.payload;
            })
            .addCase(addToCart.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.status = SliceStatusEnum.Failed;
                state.error = action.payload || null;
            });
    },
});
export const {setCartItem, removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;
