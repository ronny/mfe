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
        "css",
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
    extensions: ["", ".js", ".sass", ".jpg", ".png", ".svg", ".gif"],
    modulesDirectories: ["src", "node_modules"],
  }
};
