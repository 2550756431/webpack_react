const webpack = require("webpack");
const { resolve } = require("path");
const CleanWepackPlugin = require("clean-webpack-plugin");
module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"]
    },
    entry: {
        jquery: ["jquery"],
    },
    output: {
        path: resolve(__dirname, "dll"),
        filename: "[name].js",
        library: "lib_[name]",
    },
    plugins: [
        new webpack.DllPlugin({
            context: process.cwd(),
            path: resolve(__dirname, "dll/[name]-manifest.json"),
            name: 'lib_[name]'
        }),
        new CleanWepackPlugin(["dll"]),
    ]
};

