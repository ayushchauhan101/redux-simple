import { configureStore } from "@reduxjs/toolkit";

// import the whole slice and connect the reducers
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";

let store = configureStore({
	reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
