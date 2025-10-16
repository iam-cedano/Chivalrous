import * as LocalComponents from "./components/LocalComponents";
import ReactDOM from "react-dom/client";
import * as React from "react";

import RightBrand from "@/assets/brand.jpg";

ReactDOM.createRoot(document.getElementById("app")!)
    .render(
        <React.StrictMode>
            <LocalComponents.Container backgroundImageURL={RightBrand}>
                <LocalComponents.Pane>
                    <h1>Hello world</h1>
                </LocalComponents.Pane>
            </LocalComponents.Container>        
        </React.StrictMode>
    );