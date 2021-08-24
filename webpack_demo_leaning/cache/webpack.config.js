const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
process.env.NODE_ENV="production"
module.exports = {
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, "lib"),
        filename: "built.[contenthash].js",
        clean: true
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
                                useBuiltIns: 'usage',
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
                    ],
                    cacheDirectory: true
                }
            },
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
                                        {
                                            ident: "postcss"
                                        }
                                    ]
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    name: "[hash:10].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "filename.[contenthash].css"
        })
    ],
    mode: "production",
    devtool: "eval-source-map",
    devServer: {
        contentBase: resolve(__dirname, "lib"),
        hot: true,
        compress: true,
        open: true,
        port: "3000"
    }
}