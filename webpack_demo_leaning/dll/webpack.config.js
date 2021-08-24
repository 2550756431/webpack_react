const { resolve } = require("path");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
process.env.NODE_ENV = 'production'
module.exports = {
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, "lib"),
        filename: "[name].[contenthash].js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({                                 
            template: "./src/index.html"
        }),
        new webpack.DllReferencePlugin({
            //告诉 webpack  那些库 不打包，同时 使用时得名称也得变
            manifest: resolve(__dirname, "dll/manifest.json")
        }),
        new AddAssetHtmlWebpackPlugin({
            // 将某个文件打包输出，并在html中 引入该资源；；
            filepath: resolve(__dirname, 'dll/jquery.js')
        })
    ],
    mode: "production",
    devtool: "eval-source-map"
}