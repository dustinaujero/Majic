export const RECEIVE_CLIENT = "RECEIVE_CLIENT";
export const RECEIVE_CHECKOUT_ID = "RECEIVE_CHECKOUT_ID";
export const RECEIVE_CHECKOUT = "RECEIVE_CHECKOUT";

export const updateClient = (client) => ({
    type: RECEIVE_CLIENT,
    client
})
export const updateCheckoutID = (checkoutID) => ({
    type: RECEIVE_CHECKOUT_ID,
    checkoutID
})
export const updateCheckout = (checkout) => ({
    type: RECEIVE_CHECKOUT,
    checkout
})