import "./scss/main.scss";
import {RouterProvider} from "react-router";
import {router} from "./routes";
import React from "react";
import {AppContainer} from "./commons/components";

function App() {
    document.documentElement.setAttribute("data-theme", "light");
    return (
        <AppContainer>
            <RouterProvider router={router}/>
        </AppContainer>
    );
}

export default App;
