delete process.env.BROWSER;

require("babel/register")({
  stage: 0,
  optional: ["runtime"],
  sourceMaps: true
});

require("./src/server");
