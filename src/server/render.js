import React from "react";

import HtmlDocument from "../components/HtmlDocument/HtmlDocument";

import Router from "react-router";
import Location from "react-router/lib/Location";
import routes from "../routes";

import DocumentTitle from "react-document-title";

import fetchComponentsData from "./fetchComponentsData";

const doctype = "<!DOCTYPE html>";

function render(req, res, next) {
  try {
    const location = new Location(req.path, req.query);

    Router.run(routes, location, (error, initialState = {}) => {
      fetchComponentsData(initialState.components)
        .then((state) => {
          console.log("state", state);
          const markup = React.renderToString(
            <Router {...initialState} />
          );

          // The application component is rendered to static markup (like
          // renderToString but without the react specific attrs) and sent as
          // response.
          const html = React.renderToStaticMarkup(
            <HtmlDocument
              state={state}
              title={DocumentTitle.rewind()}
              markup={markup} />
          );
          res.send(doctype + html);
        });
    });
  } catch (e) {
    next(e);
  }
}

export default render;
