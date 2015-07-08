import React from "react";
import { history } from "react-router/lib/BrowserHistory";
import Router from "react-router";
import routes from "../routes";

console.log("client");
React.render(<Router history={history} children={routes}/>, document.getElementById("app"));
