import ReactDOM from "react-dom/client";
import Head from "./components/Login.Head";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("app")!)
    .render(
        <StrictMode>
            <Head />
            <h1>Login</h1>
        </StrictMode>
    );