import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

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

export const authActions = authSlice.actions;
export default authSlice;
