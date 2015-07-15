delete process.env.BROWSER;

require("babel/register")({
  stage: 0,
  optional: ["runtime"],
  sourceMaps: true
});

console.log("index.js");
require("./src/server");
