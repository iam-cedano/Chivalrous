import { JSX, useContext, useRef, useState } from "react";
import { ServiceDialog, ShoppingInfo } from "@/domain/entities";
import { serviceRepository } from "@/data/repositories";
import { ServiceDialogDTO } from "@/data/dto";
import ClientContext from "../../contexts/ClientContext";
import DialogContext from "../../contexts/DialogContext";
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
import Services from "./data/Services.data";

const services = Services.map(service => <Service key={service.service} {...service} />);

type DialogInformation = {
    status: boolean;
    data: ServiceDialogDTO | ShoppingInfo | null;
};

function HomePage(): JSX.Element {
    const { user } = useContext(ClientContext);

    const [isDialog, setDialog] = useState<DialogInformation>({
        status: false,
        data: null
    });

    const [isLoading, setIsLoading] = useState(false);

    const dialogSelected = useRef<number>(0);

    const visibility = isDialog.status ? "hidden" : "block";

    return (
        <DialogContext.Provider value={{
            handleClosingDialog: () => {
                setDialog({
                    status: false,
                    data: null
                });

                dialogSelected.current = 0;
            },
            handleAddingService: (serviceId: number) => {
                setIsLoading(true);

                serviceRepository.getServiceForDialog(serviceId).then(res => {
                    setIsLoading(false);

                    setDialog({
                        status: true,
                        data: res as unknown as ServiceDialogDTO
                    });

                    dialogSelected.current = 1;
                }).catch(() => {
                    setIsLoading(false);
                });
            },
            handleOpeningCheckout: () => {
                const data: ShoppingInfo = {
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
                <AddingServiceDialog service={isDialog.data as ServiceDialogDTO} />
            )}

            {isDialog.status && dialogSelected.current == 2 && (
                <CheckoutDialog />
            )}

            <div className={`${visibility} p-3 pb-20`}>

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

        </DialogContext.Provider>
    );
}

export { HomePage };
