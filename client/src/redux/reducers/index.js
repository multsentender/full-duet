import {combineReducers} from 'redux'
import data from './data'
import cart from './cart'

const rootReducer = combineReducers({
    data,
    cart
})

export default rootReducer