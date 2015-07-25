import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import configs from "./config";
import { notifyStats } from "./utils";

const debug = require("debug")(process.env.APP_NAME || "mfe");

const WEBPACK_HOST = process.env.HOST || "localhost";
const WEBPACK_PORT = parseInt(process.env.PORT) + 1 || 3001;

let config = configs.filter(c => c.name.match(/^for client/i))[0];

// Because of quiet and noInfo below
config.plugins = config.plugins.concat([
  function () {
    this.plugin("done", notifyStats);
  },
  new webpack.ProgressPlugin((percentage, message) => {
    var MOVE_LEFT = new Buffer("1b5b3130303044", "hex").toString();
    var CLEAR_LINE = new Buffer("1b5b304b", "hex").toString();
    process.stdout.write(CLEAR_LINE + Math.round(percentage * 100) + "% :" + message + MOVE_LEFT);
  })
]);

const serverOptions = {
  contentBase: `http://${WEBPACK_HOST}:${WEBPACK_PORT}`,
  quiet: false,
  noInfo: true,
  hot: true,
  publicPath: config.output.publicPath
};

const compiler = webpack(config);
const webpackDevServer = new WebpackDevServer(compiler, serverOptions);


webpackDevServer.listen(WEBPACK_PORT, WEBPACK_HOST, () => {
  debug("Webpack development server listening on %s:%s", WEBPACK_HOST, WEBPACK_PORT);
  console.info("Webpack development server listening on http://%s:%s", WEBPACK_HOST, WEBPACK_PORT);
});
