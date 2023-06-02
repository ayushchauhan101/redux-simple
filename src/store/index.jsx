import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

// create action as well as reducer for counter component
const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			// state remains unchanged; accepting extra data from Counter
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

// authentication slice and login/logout actions
const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
	},
});

// initiate a redux store with single reducer function
// reducer function can be replaced by an object of multiple slice-reducers
let store = configureStore({
	reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// export all created actions
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
