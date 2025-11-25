function getPriceOfService(quantity: number, price_per_thousand: number) {
    return quantity*price_per_thousand/1000;
}

export default {
    getPriceOfService
}