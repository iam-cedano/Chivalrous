import { createContext } from "react";
import { Cart } from "@/domain/entities/Cart.entity";

const CartContext = createContext<Cart>({
    count: 0,
    services: []
});

export default CartContext;
