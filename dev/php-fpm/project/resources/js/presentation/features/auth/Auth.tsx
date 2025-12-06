import * as React from "react";
import ReactDOM from "react-dom/client";
import { Container, Pane, Slogan, Form } from "./components";
import { AccessMethod } from "@/domain/entities";

ReactDOM.createRoot(document.getElementById("app")!)
    .render(
        <React.StrictMode>
            <Container backgroundImageURL="/build/assets/brand.webp">
                <Pane>
                    <Slogan />
                    <Form defaultAcessMethod={AccessMethod.LOGIN} />
                </Pane>
            </Container>
        </React.StrictMode>
    );
