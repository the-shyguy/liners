import "../styles/globals.css";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "../reducers";

function MyApp({ Component, pageProps }) {
  const store = configureStore(
    { reducer: reducers },
    compose(applyMiddleware(thunk))
  );
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
