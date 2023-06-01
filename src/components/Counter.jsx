import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
	// discpatch/triggers an action to the store
	const dispatch = useDispatch();

	// mention name of state to access; redux sets up subscription to store
	const counter = useSelector((state) => state.counter);

	function incrementHandler() {
		// must match the action type in reducer function
		dispatch({ type: "increment" });
	}

	function decrementHandler() {
		dispatch({ type: "decrement" });
	}

	const toggleCounterHandler = () => {};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
