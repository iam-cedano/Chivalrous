import { JSX, useContext, useRef, useState } from "react";
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
import { AddingServiceDialog } from "./components/dialogs/AddingServiceDialog";
import SingleServiceResponse from "./api/res/SingleServiceResponse";
import Services from "./data/Services.data";
import DialogContext from "./contexts/DialogContext";
import { CheckoutDialog } from "./components/dialogs/CheckoutDialog";

const services = Services.map(service => <Service key={service.service} {...service} />)

function Home(): JSX.Element {
    const [isDialogVisible, setDialogVisible ] = useState(false);
    const dialogSelected = useRef<number>(0);
    const visibility = isDialogVisible ? "hidden" : "block";

    const defaultDialogService: SingleServiceResponse = {
        id: 1,
        name: "Instagram Followers",
        banner_uri: "/build/assets/services/1/banner.webp",
        long_description: "**Lorem** ipsum dolor sit amet, **consectetur adipiscing** elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };

    return (
        <DialogContext.Provider value={{
            handleClosingDialog: () => {
                setDialogVisible(false);
                dialogSelected.current = 0;
            },
            handleAddingService: (dialog_id: number) => {
                setDialogVisible(true);
                dialogSelected.current = 1;

            },
            handleOpeningCheckout: () => {
                setDialogVisible(true);
                dialogSelected.current = 2;
            }
        }}>

            {isDialogVisible && dialogSelected.current == 1 && (
                <AddingServiceDialog service={defaultDialogService} />
            )}

            {isDialogVisible && dialogSelected.current == 2 && (
                <CheckoutDialog />
            )}

            <div className={`${visibility} p-[5px]`}>
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

                <CartButton />

            </div>

        </DialogContext.Provider>
    );
}

export { Home };