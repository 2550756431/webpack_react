const { resolve } = require("path");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack");
process.env.NODE_ENV = "production"
module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: resolve(__dirname, "lib"),
        filename: "[name].[contenthash:10].js",
        clean: true,
    },
    module: {
        rules: [
            {

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
        ,
        new webpack.DllReferencePlugin({
            // 告诉webpack 那些库不打包
            manifest: resolve(__dirname, "dll/manifest.json")
        })
        ,
        new AddAssetHtmlWebpackPlugin({
            // ，并在html中 引入该资源；；
            filepath: resolve(__dirname, "dll/jquery.js")
        })
    ],
    mode: "production"
}