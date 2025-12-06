type CartService = {
    id: number;
    details: string;
};

type Cart = {
    count: number;
    services: CartService[];
};

type ShoppingInfo = {
    amount: number;
};

export type { Cart, CartService, ShoppingInfo };
