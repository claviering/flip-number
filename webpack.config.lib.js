const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "flipNumber", // 在全局变量中增加一个library变量
    libraryTarget: "umd"
  }
}