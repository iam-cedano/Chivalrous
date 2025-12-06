enum OrderStatus {
    PENDIENT,
    DELIVERED,
    IN_PROGRESS,
    CANCELLED,
}

type Order = {
    id?: number;
    status?: OrderStatus;
    orderNumber?: string;
    serviceName?: string;
    socialMediaLogo?: string;
    url?: string;
    isLink?: boolean;
    quantity?: number;
    price?: number;
};

export type { Order };
export { OrderStatus };
