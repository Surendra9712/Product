import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import {SnackbarProvider} from "./provider/SnackbarProvider";
import Snackbar from "./commons/components/Snachbar";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <SnackbarProvider>
            <App />
            <Snackbar/>
        </SnackbarProvider>
    </Provider>
);

