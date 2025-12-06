function getPriceOfService(quantity: number, pricePerThousand: number): number {
    return quantity * pricePerThousand / 1000;
}

export default {
    getPriceOfService
};
