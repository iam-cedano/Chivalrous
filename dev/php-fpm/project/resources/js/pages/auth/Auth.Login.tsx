import { Container } from "./components/Auth.Container";
import { Pane } from "./components/Auth.Pane";
import { Slogan } from "./components/Auth.Slogan";
import ReactDOM from "react-dom/client";
import * as React from "react";

import RightBrand from "@/assets/brand.jpg";

ReactDOM.createRoot(document.getElementById("app")!)
    .render(
        <React.StrictMode>
            <Container backgroundImageURL={RightBrand}>
                <Pane>
                
                    <Slogan />
                
                </Pane>
            </Container>        
        </React.StrictMode>
    );