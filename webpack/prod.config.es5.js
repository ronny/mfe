// Allows building the webpack config object in ES6+
require("babel/register")({
  stage: 0,
  optional: ["runtime"],
  sourceMaps: true
});

module.exports = require("./prod.config");
