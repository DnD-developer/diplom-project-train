// utils
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
// slices
import { SearchTicketsSlice } from "@/store/slices/SearchTickets.slice"

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
	searchTickets: SearchTicketsSlice.reducer
})

export const store = configureStore({
	reducer: reducers
	// middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})
