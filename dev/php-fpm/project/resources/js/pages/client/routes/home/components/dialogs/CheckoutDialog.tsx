import FullScreenDialog from "@/pages/shared/components/FullScreenDialog";
import DialogContext from "../../contexts/DialogContext";
import { useContext } from "react";

function CheckoutDialog() {
    const { handleClosingDialog } = useContext(DialogContext);
    
    return (
        <FullScreenDialog onClose={handleClosingDialog} title="Checkout ">
            <h1>Checkout</h1>
        </FullScreenDialog>
    );
}

export { CheckoutDialog }