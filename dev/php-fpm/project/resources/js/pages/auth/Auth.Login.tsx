import * as React from "react";
import ReactDOM from "react-dom/client";
import { Form } from "./components/Auth.Form";
import { Container } from "./components/Auth.Container";
import { Pane } from "./components/Auth.Pane";
import { Slogan } from "./components/Auth.Slogan";
import AccessMethod from "./shared/AccessMethod.enum";

ReactDOM.createRoot(document.getElementById("app")!)
    .render(
        <React.StrictMode>
            <Container backgroundImageURL="/build/assets/brand.jpg">
                <Pane>
                
                    <Slogan />
                    
                    <Form defaultAcessMethod={AccessMethod.LOGIN} />        

                </Pane>
            </Container>        
        </React.StrictMode>
    );