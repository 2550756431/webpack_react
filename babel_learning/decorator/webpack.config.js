const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "lib"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                corejs: {
                                    version: 3
                                },
                                useBuiltIns: "usage",
                                targets: {
                                    chrome: 60
                                }
                            }
                        ],
                        
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
       
    ],
    mode: "development"
}

