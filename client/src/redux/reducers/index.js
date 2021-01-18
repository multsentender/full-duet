import {combineReducers} from 'redux'
import data from './data'
import cart from './cart'
import user from './user'

const rootReducer = combineReducers({
    data,
    cart,
    user
})

export default rootReducer