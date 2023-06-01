import { createStore } from "redux";

// create store actions
function counterReducer(state = { counter: 0 }, action) {
	if (action === "increment") {
		return { counter: state.counter + 1 };
	} else if (action === "decrement") {
		return { counter: state.counter - 1 };
	} else {
		return state;
	}
}

// create a store
let store = createStore(counterReducer);

// get store current states
function counterSubscriber() {
	const currentState = store.getState();
	console.log(currentState);
}

// connect to store
store.subscribe(counterSubscriber);
