const { resolve } = require("path");
const webpack = require("webpack");
const AddAssetToHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./index.js",
    output: {
        filename: "[name].[contenthash:8].js",
        path: resolve(__dirname, "lib")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                corejs: {
                                    version: "3"
                                },
                                targets: {
                                    chrome: 58
                                },
                                useBuiltIns: "usage"
                            }
                        ]
                    ]
                }
            },
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, 'dll/jquery-manifest.json'),
            name: "[name].json"
        }),
        new HtmlWebpackPlugin({
            tempalte: "./src/index.html"
        }),
        new AddAssetToHtmlWebpackPlugin( {
            filepath: resolve(__dirname, 'dll/jquery.js'),
        })
    ],
    mode: "development"
}