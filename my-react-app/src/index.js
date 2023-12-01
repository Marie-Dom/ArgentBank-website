import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/style/index.css";

//REDUX
import { Provider } from "react-redux";
import store from "./app/store";
// import createStore from "./createReduxStore";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../src/reducers";

// const store = createStore({
//   reducer: rootReducer,
//   devTools: true,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
