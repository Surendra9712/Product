import "./scss/main.scss";
import {RouterProvider} from "react-router";
import {router} from "./routes";
import React from "react";

function App() {
    document.documentElement.setAttribute("data-theme", "light");
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
