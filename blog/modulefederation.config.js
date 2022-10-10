const deps = require("./package.json").dependencies;

console.log(process.env.ROOT_PATH_MODE);
module.exports = {
  name: "blog",
  exposes: {
    "./App": "./src/App",
  },
  filename: "remoteEntry.js",
  shared: {},
};