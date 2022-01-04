import { combineReducers } from 'redux'
import shopifyReducer from './shopifyReducer'
export default combineReducers({
    shopify: shopifyReducer
})