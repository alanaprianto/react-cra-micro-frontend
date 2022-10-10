const deps = require("./package.json").dependencies;

console.log(process.env.ROOT_PATH_MODE);
module.exports = {
  name: "portal",
  remotes: {
    blog: "blog@http://localhost:3001/remoteEntry.js",
  },
  filename: "remoteEntry.js",
  shared: {},
};