import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

// uiReducer = name of uiSlice reducer; use to call via useSelector
const store = configureStore({
	reducer: {
		uiReducer: uiSlice.reducer,
		cartReducer: cartSlice.reducer,
	},
});

export default store;
