import { JSX } from "react";
import { Container } from "./components/Client.Container";
import { Header } from "./components/header/Header";
import { Hambuger } from "./components/header/Hambuger";
import { Wallet } from "./components/header/Wallet";
import { Account } from "./components/header/Account";
import Services from "./data/Services.data";
import { Details } from "./components/details/Details";
import { Shopping } from "./components/shopping/Shopping";
import { Footer } from "../shared/Footer";
import { ServiceList } from "./components/services/ServiceList";
import { Service } from "./components/services/Service";
import { CartButton } from "./components/cart/CartButton";

function Home(): JSX.Element {
    const services = Services.map(service => <Service key={service.service} {...service} />)

    return (
        <Container>

            <Header>

                <Hambuger />

                <div className="flex gap-2.5">
                    <Wallet />
                    <Account />
                </div>

            </Header>

            <Details />

            <ServiceList>
                { services }
            </ServiceList>

            <Shopping />

            <CartButton />

            <Footer />

        </Container>
    );
}

export {Home};