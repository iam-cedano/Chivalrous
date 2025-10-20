import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { Container } from "./components/Client.Container";
import * as Header from "./components/Client.Header";
import { ServiceList } from "./components/Client.ServiceList";
import ServiceAndURLsData from "./data/ServiceAndURLs.data";

ReactDOM.createRoot(document.getElementById("app")!)
    .render(
        <StrictMode>
            <Container>
               
                <Header.Parent>
                    
                    <Header.Hambuger />

                    <div className="flex gap-2">
                        <Header.Wallet />
                        <Header.Account />  
                    </div>

                </Header.Parent>

                <ServiceList services={ServiceAndURLsData} />
                
            </Container>
        </StrictMode>
    );
    