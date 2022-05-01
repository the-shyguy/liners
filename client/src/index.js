import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Auth from "./components/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./store/reducers";

const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);

const APP = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(APP);
