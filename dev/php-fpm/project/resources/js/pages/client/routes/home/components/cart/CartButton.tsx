import { useContext } from "react";
import { orderContext } from "../../contexts/orderContext";

type FilledCartButtonProps = {
    orderCount: number,
    onClick: () => void
};

type CartButtonProps = {
    onClick: () => void
};


function CartButton({onClick}: CartButtonProps) {
    const orderCount: number = useContext(orderContext);

    return (orderCount > 0 ? <FilledCartButton onClick={onClick} orderCount={orderCount} /> : <EmptyCartButton />);
}

function EmptyCartButton() {
    return (
        <button className="bg-[#BABABA] p-1.5 rounded-[10px] gap-2.5 flex items-center m-auto">
            <span className="rounded-[5px] size-[25px] bg-white font-[Montserrat] text-[16px] flex items-center justify-center font-bold text-black">0</span>
            <span className="text-white font-[Montserrat] text-[20px] font-bold">Shopping Cart</span>
            <img  className="size-5" src="/build/assets/empty-cart.webp" alt="Cart button "/>
        </button>
    );
}

function FilledCartButton({ orderCount, onClick }: FilledCartButtonProps) {
    return (
        <div>
            <button className="bg-[#39B437] p-1.5 rounded-[10px] gap-2.5 flex items-center m-auto" onClick={onClick}>
                <span className="rounded-[5px] size-[25px] bg-white font-[Montserrat] text-[16px] flex items-center justify-center font-bold text-black">{orderCount}</span>
                <span className="text-white font-[Montserrat] text-[20px] font-bold">Shopping Cart</span>
                <img className="size-5" src="/build/assets/filled-cart.webp" alt="Cart button " />
            </button>
        </div>
    );
}

export { CartButton };