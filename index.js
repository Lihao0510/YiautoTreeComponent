require("babel-core/register");
require("babel-core").transform("code", {
    plugins: ["transform-runtime"]
});
exports.BinaryTree = require("./lib/BinaryTree").default;