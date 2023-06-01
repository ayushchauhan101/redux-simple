import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// create action as well as reducer
const counterSlice = createSlice({
	name: "counter",
	initialState: initialState,
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

// initiate a redux store and one main reducer function
let store = configureStore({
	reducer: counterSlice.reducer,
});

// export all created actions
export const counterActions = counterSlice.actions;

export default store;
