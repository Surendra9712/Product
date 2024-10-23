import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
const store = configureStore({
    reducer: {
        product: productSlice,
        cart:cartSlice,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({ serializableCheck: false });
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;