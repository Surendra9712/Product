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
import Cart from "./pages/order/cart";
import MyOrder from "./pages/order/myOrder";

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
export const ORDERS = "orders";
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
                element: <Cart/>,
            },
            {
                path: ORDERS,
                element: <MyOrder/>,
            },
            {
                path: '*',
                element: <NotFound/>,
            },
        ]
    },
]);
