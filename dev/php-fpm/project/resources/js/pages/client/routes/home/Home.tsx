import { JSX, useContext, useRef, useState } from "react";
import { Header } from "./components/header/Header";
import { Details } from "./components/details/Details";
import { Shopping } from "./components/shopping/Shopping";
import { ServiceList } from "./components/services/ServiceList";
import { Service } from "./components/services/Service";
import { CartButton } from "./components/cart/CartButton";
import { ShoppingHeader } from "./components/shopping/ShoppingHeader";
import { SearchInputAndServices } from "./components/shopping/SearchInputAndServices";
import { AddingServiceDialog } from "./components/dialogs/AddingServiceDialog";

import { CheckoutDialog } from "./components/dialogs/CheckoutDialog";
import { LoadingOverlay } from "./components/loading/LoadingOverlay";

import DialogContext from "./contexts/DialogContext";
import Services from "./data/Services.data";
import * as ServicesApi  from "./api/Services";
import ServiceDialogResponse from "./api/res/ServiceDialogResponse";
import ShoppingDialogResponse from "./api/res/ShoppingDialogResponse";
import ClientContext from "./contexts/ClientContext";

const services = Services.map(service => <Service key={service.service} {...service} />);

type DialogInformation = {
    status: boolean,
    data: ServiceDialogResponse | ShoppingDialogResponse | null
};

function Home(): JSX.Element {
    const {user} = useContext(ClientContext);

    const [isDialog, setDialog] = useState<DialogInformation>({
        status: false,
        data: null
    });

    const [isLoading, setIsLoading] = useState(false);
    
    const dialogSelected = useRef<number>(0);

    const visibility = isDialog.status ? "hidden" : "block";

    return (
        <DialogContext value={{
            handleClosingDialog: () => {
                setDialog({
                    status: false,
                    data: null
                });

                dialogSelected.current = 0;
            },
            handleAddingService: (serviceId: number) => {
                setIsLoading(true);

                ServicesApi.getServiceForDialog(serviceId).then(res => {
                    setIsLoading(false);

                    setDialog({
                        status: true,
                        data: res.data
                    });

                    dialogSelected.current = 1;
                }).catch(err => {
                    setIsLoading(false);
                });
            },
            handleOpeningCheckout: () => {
                const data: ShoppingDialogResponse = {
                    amount: 1000
                };
                
                setDialog({
                    status: true,
                    data: data
                });

                dialogSelected.current = 2;
            },
        }}>

            <LoadingOverlay isVisible={isLoading} />

            {isDialog.status && dialogSelected.current == 1 && (
                <AddingServiceDialog service={isDialog.data as ServiceDialogResponse} />
            )}

            {isDialog.status && dialogSelected.current == 2 && (
                <CheckoutDialog />
            )}

            <div className={`${visibility} p-[5px]`}>
                
                <Header amount={user?.balance?.amount ?? 0} 
                profile_img_url="/build/assets/srajo.webp"
                />

                <Details />

                <ServiceList>
                    {services}
                </ServiceList>

                <Shopping>
                    <ShoppingHeader />
                    <SearchInputAndServices />
                </Shopping>

                <CartButton />

            </div>

        </DialogContext>
    );
}

export { Home };