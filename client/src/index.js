import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { BrowserRouter } from "react-router-dom";
import { routerMiddleware } from "react-router-redux";

import { logger } from "redux-logger";

import MainApp from "./MainApp";

import reducers from "./components/reducers";

import "./index.css";

import * as serviceWorker from "./serviceWorker";
import reduxThunk from "redux-thunk";

const createHistory = require("history").createBrowserHistory

const history = createHistory();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk,routerMiddleware(history)))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
