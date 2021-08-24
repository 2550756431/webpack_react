const { resolve } = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        jquery: ["jquery"]
    },
    output: {
        filename: "jquery.js",
        path: resolve(__dirname, "dll"),
        library: "[name]_[hash]", //打包生成的类容里面 的 title
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]_[hash]",//映射 打包生成的类容里面 的 title
            path: resolve(__dirname, "dll/manifest.json")
        })
    ],
    mode: "production"
}

