import path from "path";
import fs from "fs";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";
// import strip from "strip-loader";
import { generateAssetManifest } from "./utils";

const DETECTED_ENV = process.env.NODE_ENV || "development";

const assetsPath = path.resolve(__dirname, "../public/assets");
const WEBPACK_HOST = "localhost";
const WEBPACK_PORT = parseInt(process.env.PORT, 10) + 1 || 3001;

const buildJsLoaders = () => {
  if (DETECTED_ENV === "development") {
    return [
      "react-hot",
      "babel?optional[]=runtime&stage=0&cacheDirectory"
    ];
  } else {
    return [
      "babel?optional[]=runtime&stage=0"
    ];
  }
};

const buildCssLoaders = ({ isServerSide, sass }) => {
  const cssLoaderBase = isServerSide ? "css/locals" : "css";
  const sassLoader = sass ? "sass?indentedSyntax" : null;

  const cssLoader = DETECTED_ENV === "development"
    ? `${cssLoaderBase}?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]`
    : `${cssLoaderBase}?modules`;

  const loaders = [
    cssLoader,
    "autoprefixer?browsers=last 2 version",
    sassLoader,
  ].filter(presence => presence);

  if (DETECTED_ENV === "development") {
    return ["style", ...loaders];
  } else {
    return ExtractTextPlugin.extract(
      "style",
      loaders.join("!")
    );
  }
};

const commonLoaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: buildJsLoaders(),
  },
  {
    test: /\.(jpe?g|png|gif|svg|ico)($|\?)/,
    loaders: ["url?limit=10000"],
  },
  {
    test: /\.woff2?($|\?)/,
    loaders: ["url?limit=100000"],
  },
  {
    test: /\.(ttf|eot)($|\?)/,
    loaders: ["file"],
  },
  {
    test: /\.html$/,
    loaders: ["html"],
  },
  {
    test: /\.(md|markdown)$/,
    loaders: ["html", "markdown"],
  },
  {
    test: /\.json$/,
    loaders: ["json"]
  }
];


const resolve = {
  // Only allow ".js" to be appended automatically when resolving (e.g.
  // `import foo from "./bar"` will find `./bar.js`), everything else must
  // be specified with the full extension, e.g. `import styles from
  // "./bar.sass"`
  extensions: ["", ".js"],

  // When resolving module paths (i.e. non-absolute and non-relative, e.g.
  // `import foo from "blah/foo"`), webpack will look in these dirs and any
  // parent dirs above it with the same names (e.g. `./blah`, `../blah`,
  // `../../blah`, etc).
  modulesDirectories: ["src", "node_modules"],
};

const nodeModulesExternals =
  fs.readdirSync("node_modules")
    .filter(mod => ([".bin"].indexOf(mod) === -1))
    .filter(mod => mod !== ".DS_Store")
    .reduce((mods, mod) => {
      mods[mod] = "commonjs " + mod;
      return mods;
    }, {});

const devtool = DETECTED_ENV === "development"
  ? "cheap-module-eval-source-map"
  : null;


const entries = {
  main: ["./src/client/index.js"]
};

const clientSideEntries = () => {
  return Object.keys(entries).reduce((memo, key) => {
    let values = entries[key];
    if (DETECTED_ENV === "development") {
      values = [
        "webpack-dev-server/client?http://" + WEBPACK_HOST + ":" + WEBPACK_PORT,
        "webpack/hot/only-dev-server",
        ...values,
      ];
    }
    memo[key] = values;
    return memo;
  }, {});
};


const publicPath = () => {
  if (DETECTED_ENV === "development") {
    return "http://" + WEBPACK_HOST + ":" + WEBPACK_PORT + "/assets/";
  } else {
    return "/assets/";
  }
};

const devClientPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(DETECTED_ENV),
      __CLIENT__: JSON.stringify(true),
    }
  }),
  function () {
    this.plugin("done", generateAssetManifest);
  },
];

const prodClientPlugins = [
  new ExtractTextPlugin("[name]-[hash].css"),
  new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(DETECTED_ENV),
      __CLIENT__: JSON.stringify(true),
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),

  function() {
    this.plugin("done", generateAssetManifest);
  }
];

const clientPlugins = () => {
  if (DETECTED_ENV === "development") {
    return devClientPlugins;
  } else {
    return prodClientPlugins;
  }
};

///////////////////////////////////////////////////////////////////////////////////////


const config = [
  {
    name: `for client-only in ${DETECTED_ENV}`,
    devtool: devtool,
    entry: clientSideEntries(),
    output: {
      path: assetsPath,
      filename: DETECTED_ENV === "development" ? "[name].js" : "[name]-[hash].js",
      chunkFilename: DETECTED_ENV === "development" ? "[name].js" : "[name]-[hash].js",
      publicPath: publicPath(),
    },
    module: {
      loaders: [
        ...commonLoaders,
        {
          test: /\.sass$/,
          loaders: buildCssLoaders({isServerSide: false, sass: true}),
        },
        {
          test: /\.css$/,
          loaders: buildCssLoaders({isServerSide: false, sass: false}),
        },
      ]
    },
    progress: true,
    resolve: resolve,
    plugins: clientPlugins(),
  },
  {
    name: `for server-side rendering in ${DETECTED_ENV}`,
    entry: "./src/server/render.js",
    target: "node",
    output: {
      path: assetsPath,
      filename: "../../src/server/render.generated.js", // relative to assetsPath
      publicPath: publicPath(),
      libraryTarget: "commonjs2",
    },
    externals: nodeModulesExternals,
    module: {
      loaders: [
        ...commonLoaders,
        {
          test: /\.sass$/,
          loaders: buildCssLoaders({isServerSide: true, sass: true}),
        },
        {
          test: /\.css$/,
          loaders: buildCssLoaders({isServerSide: true, sass: false}),
        },
      ]
    },
  }
];

// console.log("webpack config");
// console.dir(config);

export default config;
