import { merge } from 'lodash';
import { 
    RECEIVE_CUSTOMER
} from '../actions/shopifyActions';

const nullState = {
    customer: '',
}

export default (state = nullState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CUSTOMER: {
            return merge({}, state, { customer: action.customer })
        }
        default: return state;
    }
}