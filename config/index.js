const SUPPORTED_ENVIRONMENTS = ["development", "staging", "production"];
const DEFAULT_ENVIRONMENT = "development";

let configFileBaseName = DEFAULT_ENVIRONMENT;

if (SUPPORTED_ENVIRONMENTS.filter(supportedEnvironment => process.env.NODE_ENV === supportedEnvironment)[0]) {
  configFileBaseName = process.env.NODE_ENV;
}

import defaults from "./defaults";
const envConfig = require(`./${configFileBaseName}.js`);

const config = {
  ...defaults,
  ...envConfig,
};

export default config;
