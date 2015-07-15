import React, {PropTypes} from "react";
import ga from "./ga";
import config from "../../../config";

const webpackStats = require("../../../webpack-stats.json");
console.dir(webpackStats);

if (process.env.NODE_ENV === "development") {
  // Do not cache webpack stats: the script file would change since
  // hot module replacement is enabled in the development env
  delete require.cache[require.resolve("../../../webpack-stats.json")];
}

class HtmlDocument extends React.Component {
  static propTypes = {
    markup: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          <title>{this.props.title}</title>
          {webpackStats.css.map((css, i) => <link href={css} ref={i}
                media="screen, projection" rel="stylesheet" type="text/css"/>)}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}} />

          <script dangerouslySetInnerHTML={{__html: `__INITIAL_STATE__ = ${JSON.stringify(this.props.state)};`}} />

          { config.gaTrackingId &&
            <script dangerouslySetInnerHTML={{__html: ga.replace("{gaTrackingId}", config.gaTrackingId)}} />
          }

          <script src={webpackStats.script[0]}/>
        </body>
      </html>
    );
  }
}

export default HtmlDocument;
