import { createContext } from "react";

type DialogContextProps = {
    handleClosingDialog: () => void;
    handleAddingService: (dialogId: number) => void;
    handleOpeningCheckout: () => void;
};

const DialogContext = createContext<DialogContextProps>({
    handleClosingDialog: () => {
        console.info('closing dialog');
    },
    handleAddingService: (_dialogId: number) => {
        console.info('adding service handler');
    },
    handleOpeningCheckout: () => {
        console.info('opening checkout handler');
    },
}); // Default methods 

export default DialogContext;