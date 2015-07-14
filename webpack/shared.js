import fs from "fs";

const nodeModules =
  fs.readdirSync("node_modules")
    .filter(x => ([".bin"].indexOf(x) === -1))
    .reduce((mods, mod) => {
      mods[mod] = "commonjs " + mod;
      return mods;
    }, {});

// console.log("nodeModules", nodeModules);

export default {
  loaders: {
    js: {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        "babel?optional[]=runtime&stage=0"
      ]
    },
    sass: {
      test: /\.sass$/,
      loaders: [
        "css/locals?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
        "autoprefixer?browsers=last 2 version",
        "sass?indentedSyntax",
      ]
    },
    image: {
      test: /\.(jpe?g|png|gif|svg|ico)$/,
      loaders: ["file"]
    },
  },

  resolve: {
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
  },

  // No need to include node_modules in the bundle.
  // externals: nodeModules,
};
