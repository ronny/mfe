// Allow building the webpack config object with ES6+
require("babel/register")({
  stage: 0,
  optional: ["runtime"],
  sourceMaps: true
});

module.exports = require("./dev.config");
