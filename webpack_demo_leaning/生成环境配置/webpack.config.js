const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "lib")
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
                                        { ident: "posscss" }
                                    ]
                                ]
                            }
                        }
                    }
                ],
            },
            //在package.json 中 配置检查规则，使用eslint-config-airbnb-base eslint eslint-plugin-import
            {
                test: /\.js$/,
                loader: "eslint-loader",
                options: {
                    fix: true
                },
                enforce: "pre"
            },
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
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    esModule: false
                }
            },
            {
                test: /\.(pgn|jpg|gif)$/,
                loader: "url-loader",
                options: {
                    limits: 8 * 1024,
                    name: "[hash:10].[ext]"
                }
            },
            {
                exclude: /\.(html|js|css|gif|jpg|png)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assest/index.css"
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    mode: "production",
    devServer: {
        contentBase: resolve(__dirname, 'lib'),
        port: "3000",
        compress: true,
        open: true
    }
}