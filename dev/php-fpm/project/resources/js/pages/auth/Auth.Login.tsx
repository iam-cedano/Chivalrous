import ReactDOM from "react-dom/client";
import * as React from "react";

import { Form } from "./components/Auth.Form";
import { Container } from "./components/Auth.Container";
import { Pane } from "./components/Auth.Pane";
import { Slogan } from "./components/Auth.Slogan";

import AccessMethod from "./shared/AccessMethod.enum";
import RightBrand from "@/assets/brand.jpg";

ReactDOM.createRoot(document.getElementById("app")!)
    .render(
        <React.StrictMode>
            <Container backgroundImageURL={RightBrand}>
                <Pane>
                
                    <Slogan />
                    
                    <Form defaultAcessMethod={AccessMethod.LOGIN} />        

                </Pane>
            </Container>        
        </React.StrictMode>
    );