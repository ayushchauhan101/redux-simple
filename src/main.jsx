import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";

import store from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	// connect to redux store
	<Provider store={store}>
		<App />
	</Provider>
);
