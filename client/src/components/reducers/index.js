import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import authReducer from "./authReducer"
import weddingFormReducer from './weddingFormReducer'

export default combineReducers({
	authReducer,
	weddingFormReducer,
	routing: routerReducer
})