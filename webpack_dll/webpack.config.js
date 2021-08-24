const AddAssetsHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { resolve } = require("path")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "lib"),
        clean: true
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, "dll/manifest.json")
        }),
        new AddAssetsHtmlWebpackPlugin({
            filepath: resolve(__dirname, "dll/jquery.js")
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ],
    mode: "production"
}