import { createStore, combineReducers } from "redux"
import { cartReducer } from "./reducers/cartReducers"

const reducer = combineReducers({ cartReducer: cartReducer })

const store = createStore(reducer)

export default store
