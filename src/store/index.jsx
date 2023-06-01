import { createStore } from "redux";

// create store actions
function counterReducer(state = { counter: 0 }, action) {
	if (action.type === "increment") {
		return { counter: state.counter + 1 };
	} else if (action.type === "decrement") {
		return { counter: state.counter - 1 };
	} else if (action.type === "increase") {
		return { counter: state.counter + action.amount };
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
