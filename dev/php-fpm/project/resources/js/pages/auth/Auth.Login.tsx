import * as LocalComponents from "./components/LocalComponents";
import ReactDOM from "react-dom/client";
import * as React from "react";

import RightBrand from "@/assets/brand.jpg";

ReactDOM.createRoot(document.getElementById("app")!)
    .render(
        <React.StrictMode>
            <LocalComponents.Container backgroundImageURL={RightBrand}>
                <LocalComponents.Pane>
                    
                </LocalComponents.Pane>
            </LocalComponents.Container>        
        </React.StrictMode>
    );