import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./routes/home/components/Client.Footer";
import { BrowserRouter, Route } from "react-router";


ReactDOM.createRoot(document.getElementById("app")!)
    .render(
        <StrictMode>
            
            <BrowserRouter>
                <Route  />
            </BrowserRouter>
            
            <Footer />
        </StrictMode>
    );
    