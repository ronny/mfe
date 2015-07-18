import React from "react";
import { history } from "react-router/lib/BrowserHistory";
import { Router } from "react-router";
import { Provider } from "react-redux";
import routes from "../routes";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "./loggerMiddleware";
import * as reducers from "../reducers";

const reducer = combineReducers(reducers);

const finalCreateStore = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
)(createStore);

const store = finalCreateStore(reducer);
// For debugging e.g. easily inspect the current app-wide state
// anytime by executing `__store.getState()` in the console.
if (window) {
  window.__store = store;
}

React.render(
  <Provider store={store}>
    {() => <Router history={history} children={routes} />}
  </Provider>,
  document.getElementById("app")
);
