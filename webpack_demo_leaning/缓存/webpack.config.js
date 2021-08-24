const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash].js",
        path: resolve(__dirname, "lib"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        { ident: "postcss" }
                                    ]
                                ]
                            }
                        }
                    }
                ]
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "eslint-webpack-plugin",
            //     options: {
            //         fix: true,

            //     },
            //     enforce: "pre"
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns: "usage",
                                corejs: {
                                    version: 3
                                },
                                targets: {
                                    chrome: "60",
                                    firefox: "60",
                                    ie: '9',
                                    safari: "10",
                                    edge: "17"
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(pgn|gif|jpg)$/,
                loader: "url-loader",
                options: {
                    limits: 8 * 1024,
                    name: "[hash:10].[ext]"
                }
            },
            {
                exclude: /\.(html|css|js|less|jpg|png|gif)$/,
                loader: "file-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "css/index.css"
        }),
        new OptimizeCssAssetsWebpackPlugin(),

    ],
    mode: "development",
    devServer: {
        contentBase: resolve(__dirname, "lib"),
        compress: true,
        port: "3000",
        open: true,
    }
}