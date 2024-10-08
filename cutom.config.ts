const path = require("path");
module.exports = {
  mode: "",
  alias: {
    "@": path.resolve(__dirname, "src"),
    "@d": path.resolve(__dirname, "dist"),
  },
};
