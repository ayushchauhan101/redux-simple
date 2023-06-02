import { useDispatch } from "react-redux";

import classes from "./Auth.module.css";
import { authActions } from "../store/authSlice";

const Auth = () => {
	// save the dispatch to a variable
	const dispatch = useDispatch();

	function loginhandler(e) {
		e.preventDefault();

		// call the login action from saved dispatch
		dispatch(authActions.login());
	}

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={loginhandler}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
						/>
					</div>
					<button>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
