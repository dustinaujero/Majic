export const RECEIVE_CLIENT = "RECEIVE_CLIENT";
export const RECEIVE_CHECKOUT_ID = "RECEIVE_CHECKOUT_ID";
export const RECEIVE_CHECKOUT = "RECEIVE_CHECKOUT";
export const RECEIVE_CUSTOMER = "RECEIVE_CUSTOMER";

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
export const receiveCustomer = (customer) => ({
    type: RECEIVE_CUSTOMER,
    customer
})
export const createCustomer = (postData) => {
    return fetch(`solitdudellc.myshopify.com/admin/api/2022-01/customers.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': '199d6524a76e5e4966034d6f445bcbb3'
        },
        body: JSON.stringify(postData)
    }).then(res => res.json()).then(() => {

    })
}