import { combineReducers } from 'redux'
import shopifyReducer from './shopifyReducer'
import sessionReducer from './sessionReducer'
export default combineReducers({
    shopify: shopifyReducer,
    session: sessionReducer,
})