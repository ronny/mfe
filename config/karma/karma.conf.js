import RewireWebpackPlugin from "rewire-webpack";
import webpackSharedConfig from "../../webpack/shared";

export default function(config) {
  const obj = {
    frameworks: ["mocha", "chai"],
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    autoWatch: !process.env.CI,
    singleRun: process.env.CI,
    // autoWatchBatchDelay: 1500,
    browsers: ["Chrome"],

    mochaReporter: {
      output: "autowatch",
    },
    client: {
      mocha: {
        reporter: "html",
        ui: "bdd" // describe(), it() style
      }
    },

    basePath: "../..",
    files: [
      "src/**/*.test.js"
    ],
    exclude: [],
    preprocessors: {
      "src/**/*.test.js": ["webpack", "sourcemap"]
    },
    webpack: {
      // karma watches the test entry points (we don't need to specify the entry option)
      // webpack watches test dependencies
      module: {
        loaders: [
          webpackSharedConfig.loaders.js,
          {
            // We don't care about loading other asset types in tests
            test: /\.(css|sass|jpg|png|svg|gif|ico|eot|ttf|woff2?)$/,
            loader: "null",
          }
        ],
      },
      devtool: "inline-source-map",
      resolve: webpackSharedConfig.resolve,
      progress: true,
      cache: true,
      plugins: [
        new RewireWebpackPlugin()
      ]
    },
    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true
      }
    },

  };

  config.set(obj);
}
