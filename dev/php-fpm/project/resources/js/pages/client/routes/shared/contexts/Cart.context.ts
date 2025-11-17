import { createContext } from "react";

type Service = {
    id: number,
    details: string;
};

type Cart = {
    count: number,
    services: Service[] 
};

const CartContext = createContext<Cart>({
    count: 0,
    services: []
});

export default CartContext;