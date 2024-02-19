// utils
import { createSlice } from "@reduxjs/toolkit"
// actionsType
import {
	LOADING_SEARCH,
	SUCCESS_SEARCH,
	FAIL_SEARCH,
	SEARCHING
} from "@/store/actions/searchTickets.action"

const initialState = {
	isLoading: false,
	isFail: false,
	searchSettings: {
		date: {
			start: null,
			end: null
		},
		location: {
			start: null,
			end: null
		}
	},
	searchResult: []
}

export const SearchTicketsSlice = createSlice({
	name: "searchTickets",
	initialState,
	reducers: {
		[SEARCHING]: (state, { payload }) => {
			state.searchSettings = payload
		},
		[LOADING_SEARCH]: state => {
			state.isLoading = true
			state.isFail = false
		},
		[SUCCESS_SEARCH]: (state, { payload }) => {
			state.isLoading = false
			state.isFail = false
			state.searchResult = [...payload] && []
		},
		[FAIL_SEARCH]: (state, { payload }) => {
			state.isLoading = false
			state.isFail = true
			state.searchResult = [...payload] && []
		}
	}
})
