import { merge } from 'lodash';
import { 
    RECEIVE_CLIENT,
    RECEIVE_CHECKOUT_ID
} from '../actions/shopifyActions';

import Client from 'shopify-buy';
const shopifyClient = Client.buildClient({
    domain: 'solitdudellc.myshopify.com',
    storefrontAccessToken: '199d6524a76e5e4966034d6f445bcbb3'
});
const nullState = {
    client: shopifyClient,
    checkoutID: null,
}


export default (state = nullState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CLIENT: {
            return merge({}, state, { client: action.client })
        }
        case RECEIVE_CHECKOUT_ID: {
            const { checkoutID } = action
            console.log("updating stored checkout id")
            localStorage.setItem('checkoutID', checkoutID)
            return merge({}, state, { checkoutID })
        }

        default: return state;
    }
}