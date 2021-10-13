const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "lib"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: {
                removeContent: true,
                collpaseWhiteSpace: true
            }
        })
    ],
    mode: "development"
}