import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";

// uiReducer = name of uiSlice reducer; use to call via useSelector
const store = configureStore({
	reducer: { uiReducer: uiSlice.reducer },
});

export default store;
