const SUPPORTED_ENVIRONMENTS = ["development", "staging", "production"];
const DEFAULT_ENVIRONMENT = "development";

let configFileBaseName = DEFAULT_ENVIRONMENT;

if (SUPPORTED_ENVIRONMENTS.find(supportedEnvironment => process.env.NODE_ENV === supportedEnvironment)) {
  configFileBaseName = process.env.NODE_ENV;
}

const config = require(`../config/${configFileBaseName}.js`);

export default config;
