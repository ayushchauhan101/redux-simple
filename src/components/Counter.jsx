import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counterSlice";
import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();

	const counter = useSelector((state) => state.counter.counter);

	const toggleCounter = useSelector((state) => state.counter.showCounter);

	function incrementHandler() {
		dispatch(counterActions.increment());
	}

	function increaseHandler() {
		dispatch(counterActions.increase(10));
	}

	function decrementHandler() {
		dispatch(counterActions.decrement());
	}

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
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
