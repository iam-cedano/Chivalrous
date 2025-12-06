import { useContext } from "react";
import DialogContext from "../../../../contexts/DialogContext";
import { OrderContext } from "../../../../contexts/OrderContext";

type FilledCartButtonProps = {
    orderCount: number;
    onClick: () => void;
};

function CartButton() {
    const { handleOpeningCheckout } = useContext(DialogContext);
    const orderCount: number = useContext(OrderContext);

    return (
        <div className="pt-[5px]">
            {orderCount > 0 ? <FilledCartButton onClick={handleOpeningCheckout} orderCount={orderCount} /> : <EmptyCartButton />}
        </div>
    );
}

function EmptyCartButton() {
    return (
        <button className="bg-[#BABABA] p-1.5 rounded-lg gap-2.5 flex items-center m-auto">
            <span className="rounded-md size-6 bg-white font-[Montserrat] text-base flex items-center justify-center font-bold text-black">0</span>
            <span className="text-white font-[Montserrat] text-lg font-bold">Shopping Cart</span>
            <img className="size-5" src="/build/assets/empty-cart.webp" alt="Cart button " />
        </button>
    );
}

function FilledCartButton({ orderCount, onClick }: FilledCartButtonProps) {
    return (
        <div>
            <button className="bg-[#39B437] p-1.5 rounded-lg gap-2.5 flex items-center m-auto" onClick={onClick}>
                <span className="rounded-md size-6 bg-white font-[Montserrat] text-base flex items-center justify-center font-bold text-black">{orderCount}</span>
                <span className="text-white font-[Montserrat] text-lg font-bold">Shopping Cart</span>
                <img className="size-5" src="/build/assets/filled-cart.webp" alt="Cart button " />
            </button>
        </div>
    );
}

export { CartButton };
