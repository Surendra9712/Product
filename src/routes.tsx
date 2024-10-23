import {
    createBrowserRouter,
    Outlet,
} from "react-router-dom";
import {ErrorInterceptor} from "./interceptor/error-interceptor";
import React from "react";
import Dashboard from "./pages/dashboard/dashboard";
import Toolbar from "./commons/components/ui-components/Toolbar";
import ProductDetail from "./pages/dashboard/productDetail";
import {NotFound} from "./commons/components";
import CartPage from "./pages/order/cart-page";

export const PublicLayout = () => (
    <>
        <div className="app-content-wrapper">
            <ErrorInterceptor/>
            <Toolbar/>
            <Outlet/>
        </div>
    </>
);

export const HOME_PATH = "/";
export const PRODUCT_DETAIL = "product/:slug";
export const CART = "cart";
export const router = createBrowserRouter([
    {
        path: HOME_PATH,
        element: <PublicLayout/>,
        children: [
            {
                path: '',
                element: <Dashboard/>,
            },
            {
                path: PRODUCT_DETAIL,
                element: <ProductDetail/>,
            },
            {
                path: CART,
                element: <CartPage/>,
            },
            {
                path: '*',
                element: <NotFound/>,
            },
        ]
    },
]);
