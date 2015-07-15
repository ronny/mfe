import path from "path";
import webpack from "webpack";
import writeStats from "./utils/write-stats";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import strip from "strip-loader";
import shared from "./shared";

const assetsPath = path.join(__dirname, "../public/assets");

const commonLoaders = [
  {
    ...shared.loaders.js,
    loaders: [
      "react-hot",
      "babel?optional[]=runtime&stage=0&cacheDirectory"
    ]
  },
  shared.loaders.image,
  shared.loaders.json,
];

export default [
  {
    devtool: "source-map",
    entry: {
      "main": "./src/client/index.js"
    },
    output: {
      path: assetsPath,
      filename: "[name]-[chunkhash].js",
      chunkFilename: "[name]-[chunkhash].js",
      publicPath: "/assets/",
      libraryTarget: "umd",
    },
    module: {
      loaders: [
        {
          ...shared.loaders.js,
          loaders: [
            strip.loader("debug"),
            ...shared.loaders.js.loaders
          ]
        },
        {
          test: shared.loaders.sass.test,
          loader: ExtractTextPlugin.extract(
            "style",
            shared.loaders.sass.loaders.join("!")
          )
        },
        shared.loaders.image,
      ],
    },
    progress: true,
    resolve: shared.resolve,
    externals: shared.externals,
    plugins: [
      new ExtractTextPlugin("[name]-[hash].css"),
      new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
      new webpack.DefinePlugin({
        "process.env": {
          // Mainly used to require CSS files with webpack, which can happen only on browser
          // Used as `if (process.env.BROWSER)...`
          BROWSER: JSON.stringify(true),
          // Useful to reduce the size of client-side libraries, e.g. react
          NODE_ENV: JSON.stringify("production"),
          __CLIENT__: true,
          __SERVER__: false,
        }
      }),

      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),

      function() { this.plugin("done", writeStats); }
    ]
  },
  {
    name: "server-side rendering",
    entry: "./src/server/render.js",
    target: "node",
    output: {
      path: assetsPath,
      filename: "../../src/server/render.generated.js",
      publicPath: "http://" + WEBPACK_HOST + ":" + WEBPACK_PORT + "/assets/",
      libraryTarget: "commonjs2",
    },
    externals: shared.externals,
    module: {
      loaders: [
        ...commonLoaders,
        {
          ...shared.loaders.css,
          loaders: [
            "css/locals?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
            "autoprefixer?browsers=last 2 version",
          ]
        },
        {
          ...shared.loaders.sass,
          loaders: [
            "css/locals?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
            "autoprefixer?browsers=last 2 version",
            "sass?indentedSyntax",
          ]
        }
      ]
    }
  }
];
