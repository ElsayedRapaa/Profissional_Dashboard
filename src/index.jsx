import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ModeContextProvider from "./reducer/ModeContext";
import reducer, { initialState } from "./reducer/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModeContextProvider reducer={reducer} initialState={initialState}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ModeContextProvider>
);
