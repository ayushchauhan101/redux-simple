import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
	// discpatch/triggers an action to the store
	const dispatch = useDispatch();

	// mention name of state to access; redux sets up subscription to store
	const counter = useSelector((state) => state.counter);

	// show counter conditionally
	const toggleCounter = useSelector((state) => state.showCounter);

	function incrementHandler() {
		// must match the action type in reducer function
		dispatch({ type: "increment" });
	}

	// send additional custom data
	function increaseHandler() {
		dispatch({ type: "increase", amount: 10 });
	}

	function decrementHandler() {
		dispatch({ type: "decrement" });
	}

	const toggleCounterHandler = () => {
		dispatch({ type: "toggle" });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{toggleCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>+ 10</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
