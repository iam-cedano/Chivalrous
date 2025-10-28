import ReactDOM from "react-dom/client";
import { JSX, StrictMode } from "react";
import { Container } from "./components/Client.Container";
import { Header } from "./components/header/Header";
import { Hambuger } from "./components/header/Hambuger";
import { Wallet } from "./components/header/Wallet";
import { Account } from "./components/header/Account";
import { ServiceList } from "./components/Client.ServiceList";
import Services from "./data/Services.data";
import { Details } from "./components/details/Details";
import { Shopping } from "./components/shopping/Shopping";
import { Footer } from "../shared/Footer";

function Home(): JSX.Element {
    return (
        <Container>

            <Header>

                <Hambuger />

                <div className="flex gap-[10px]">
                    <Wallet />
                    <Account />
                </div>

            </Header>

            <Details />

            <ServiceList services={Services} />

            <Shopping />

            <Footer />

        </Container>
    );
}

export {Home};