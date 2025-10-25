import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "./components/Client.Container";
import * as Header from "./components/Client.Header";
import { ServiceList } from "./components/Client.ServiceList";
import ServiceAndURLsData from "./data/ServiceAndURLs.data";
import { Details } from "./components/Client.Details";
import { Shopping } from "./components/Client.Shopping";

ReactDOM.createRoot(document.getElementById("app")!)
    .render(
        <StrictMode>
            <Container>
               
                <Header.Parent>
                    
                    <Header.Hambuger />

                    <div className="flex gap-[10px]">
                        <Header.Wallet />
                        <Header.Account />  
                    </div>

                </Header.Parent>

                <Details />
                <ServiceList services={ServiceAndURLsData} />
                <Shopping />
                
            </Container>
        </StrictMode>
    );
    