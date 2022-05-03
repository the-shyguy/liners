import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Auth from "./components/Auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./store/reducers";
import PostDetails from "./components/PostDetails";

const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);

const APP = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<App />} />
          <Route path="/posts/search" element={<App />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(APP);
