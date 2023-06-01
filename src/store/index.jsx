import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// create store actions and counter toggler
function counterReducer(state = initialState, action) {
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
			showCounter: state.showCounter,
		};
	} else if (action.type === "decrement") {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	} else if (action.type === "increase") {
		return {
			counter: state.counter + action.amount,
			showCounter: state.showCounter,
		};
	} else if (action.type === "toggle") {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		};
	} else {
		return state;
	}
}

// create a store
let store = createStore(counterReducer);

// get store current states
function counterSubscriber() {
	const currentState = store.getState();
	console.log("The counter value is: ", currentState.counter);
}

// connect to store
store.subscribe(counterSubscriber);

export default store;
