// Allow writing karma conf in ES6+
require("babel/register")({
  stage: 0,
  optional: ["runtime"],
  sourceMap: true,
});

module.exports = require("./karmaConfBuilder");
