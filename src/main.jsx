import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";
import store from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	// provide built redux store to App component
	<Provider store={store}>
		<App />
	</Provider>
);
