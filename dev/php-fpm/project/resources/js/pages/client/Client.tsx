import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./routes/shared/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./routes/home/Home";


ReactDOM.createRoot(document.getElementById("app")!)
    .render(
        <StrictMode>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={ <Home /> }  />
                </Routes>
            </BrowserRouter>
            
            <Footer />
            
        </StrictMode>
    );
    