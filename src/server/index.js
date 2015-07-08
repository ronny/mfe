import path from "path";
import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import favicon from "serve-favicon";
import morgan from "morgan";
import csurf from "csurf";
// import locale from "locale";
// import config from "../config";
import render from "./render";

const server = express();

server.use(morgan(server.get("env") === "production" ? "combined" : "dev"));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(compression());
server.use(favicon(path.resolve(__dirname, "../components/HtmlDocument/favicon.png")));

/////////////////////////////////////////////////////////////////////
// Set the default locale
// locale.Locale.default = config.locales[0];

// Set req.locale based on the browser settings
// server.use(locale(config.locales));

// Overwrite req.locale either from cookie or querystring
// server.use(setLocale);

/////////////////////////////////////////////////////////////////////

server.use(csurf({ cookie: true }));

// On production, use the public directory for static files
// This directory is created by webpack on build time.
if (server.get("env") === "production") {
  server.use(express.static(path.resolve(__dirname, "../public"), {
    maxAge: 365 * 24 * 60 * 60
  }));
}

// On development, serve the static files from the webpack dev server.
if (server.get("env") === "development") {
  require("../../webpack/dev-server");
}

/////////////////////////////////////////////////////////////////////
// Render the app server-side and send it as response
server.use(render);

// Generic server errors (e.g. not caught by components)
server.use((err, req, res, next) => {  // eslint-disable-line no-unused-vars
  console.error("Error on request %s %s", req.method, req.url);
  console.error(err.stack);

  let msg = [
    "500 Internal Server Error",
    server.get("env") !== "production" ? err.stack : null,
  ].filter(item => item !== null).join("\n\n");

  res.status(500)
    .set({"Content-Type": "text/plain"})
    .send(msg);
});

/////////////////////////////////////////////////////////////////////
// Finally, start the express server
server.set("port", process.env.PORT || 3000);

server.listen(server.get("port"), (err) => {
  if (err) {
    console.error("Error while starting express:", err);
  }

  console.info(`Express ${server.get("env")} server listening on http://localhost:${server.get("port")}`);
});
