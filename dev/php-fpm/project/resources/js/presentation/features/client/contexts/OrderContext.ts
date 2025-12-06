import { Context, createContext } from "react";

const OrderContext: Context<number> = createContext(1);

export { OrderContext };
