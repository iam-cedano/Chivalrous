import { JSX, useState } from "react";
import { Header } from "./components/header/Header";
import { Hambuger } from "./components/header/Hambuger";
import { Balance } from "./components/header/Balance";
import { Account } from "./components/header/Account";
import { Details } from "./components/details/Details";
import { Shopping } from "./components/shopping/Shopping";
import { ServiceList } from "./components/services/ServiceList";
import { Service } from "./components/services/Service";
import { CartButton } from "./components/cart/CartButton";
import { ShoppingHeader } from "./components/shopping/ShoppingHeader";
import { SearchInputAndServices } from "./components/shopping/SearchInputAndServices";
import { Orders } from "./components/details/Orders";
import { Wallet } from "./components/details/Wallet";
import { Footer } from "../shared/Footer";

import Services from "./data/Services.data";
import { AddingServiceDialog } from "./components/dialogs/AddingServiceDialog";
import SingleServiceResponse from "./api/res/SingleServiceResponse";

type HomeMainProps = {
    onCheckout: () => void,
    isVisible: boolean
};

function HomeMain({onCheckout, isVisible}: HomeMainProps) {
    const services = Services.map(service => <Service key={service.service} {...service} />)

    const visibility = isVisible ? "block" : "hidden";

    return (
        <main className={`${visibility} p-[5px]`}>
            <Header>
                <Hambuger />

                <div className="flex gap-2.5">
                    <Balance />
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

        </main>
    );
}

function Home(): JSX.Element {
    const [isCheckoutVisible, setCheckoutVisible] = useState(false);
    const defaultDialogService: SingleServiceResponse = {
        id: 1,
        name: "Instagram Followers",
        banner_uri: "/build/assets/services/1/banner.webp",
        long_description: "**Lorem** ipsum dolor sit amet, **consectetur adipiscing** elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };

    const checkoutHandler = () => setCheckoutVisible(true);
    const closeCheckoutHandler = () => setCheckoutVisible(false);

    return (
        <>
            { isCheckoutVisible && (
                <AddingServiceDialog service={defaultDialogService} onClose={closeCheckoutHandler} />
            ) }


            <HomeMain onCheckout={checkoutHandler} isVisible={ ! isCheckoutVisible } />

            <Footer />
        </>
    );
}

export { Home };