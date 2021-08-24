const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");
const OptimizeCssAssetsWebpackPlugin=require("optimize-css-assets-webpack-plugin")
process.env.NODE_ENV = "development";

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "lib"),
        clean:true
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
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
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    limits: 8 * 1024,
                    name: "[hash:10].[ext]"
                }
            },
            {
                exclude: /\.(css|less|html|js|jpg|gif|png)/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style/index.css",
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode: "development",
    devServer: {
        contentBase: resolve(__dirname, "lib"),
        compress: true,
        open: true,
        port: 3000
    }
}