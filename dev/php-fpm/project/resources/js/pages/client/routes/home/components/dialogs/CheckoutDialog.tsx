import FullScreenDialog from "@/pages/shared/components/FullScreenDialog";

type CheckoutProps = {
    onClose: () => void
};


function CheckoutDialog({ onClose }: CheckoutProps) {
    return (
        <FullScreenDialog onClose={onClose} title="Checkout ">
            <h1>Checkout</h1>
        </FullScreenDialog>
    );
}

export { CheckoutDialog }