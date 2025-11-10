import { JSX, useContext, useState } from "react";
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
import FullScreenSlideDialog from "./components/cart/FullScreenSlideDialog";
import { ShoppingHeader } from "./components/shopping/ShoppingHeader";
import { SearchInputAndServices } from "./components/shopping/SearchInputAndServices";
import { Orders } from "./components/details/Orders";

type HomeMainProps = {
    onCheckout: () => void,
    isVisible: boolean
};

type CheckoutProps = {
    onClose: () => void
};

function HomeMain({onCheckout, isVisible}: HomeMainProps) {
    const services = Services.map(service => <Service key={service.service} {...service} />)
    
    return (
        <div className={ isVisible ? "block" : "hidden" }>
            <Header>
                <Hambuger />

                <div className="flex gap-2.5">
                    <Wallet />
                    <Account />
                </div>
            </Header>

            <Details>
                <Wallet />
                <Orders />
            </Details>

            <ServiceList>
                {services}
            </ServiceList>

            <Shopping>
                <ShoppingHeader />
                <SearchInputAndServices />
            </Shopping>

            <CartButton onClick={onCheckout} />
        </div>
    );
}

function CheckoutDialog({ onClose }: CheckoutProps) {
    return (
        <FullScreenSlideDialog open={true} onClose={onClose} closeLabel="X" title="Full Screen Dialog">
            <h1>Full Screen Slide Dialog</h1>
        </FullScreenSlideDialog>
    );
}

function Home(): JSX.Element {
    const [isCheckoutVisible, setCheckoutVisible] = useState(false);

    const checkoutHandler = () => setCheckoutVisible(true);
    const closeCheckoutHandler = () => setCheckoutVisible(false);

    return (
        <Container>

            { isCheckoutVisible && <CheckoutDialog onClose={closeCheckoutHandler} /> }

            <HomeMain onCheckout={checkoutHandler} isVisible={ ! isCheckoutVisible } />

            <Footer />

        </Container>
    );
}

export { Home };