import React from "react";
import { history } from "react-router/lib/BrowserHistory";
import { Router } from "react-router";
import { Provider } from "react-redux";
import routes from "../routes";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import promiseMiddleware from "redux-promise";
import loggerMiddleware from "./loggerMiddleware";
import * as reducers from "../reducers";
import initialState from "../initialState";

console.log("initialState");
console.dir(initialState);

const reducer = combineReducers(reducers);

const store = applyMiddleware(
  thunkMiddleware,
  // promiseMiddleware,
  loggerMiddleware,
)(createStore)(reducer, initialState);

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history} children={routes} />
    }
  </Provider>,
  document.getElementById("app")
);
