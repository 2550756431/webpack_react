const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./fs/co.js",
    output: {
        filename: "[contenthash:10].js",
        path: resolve(__dirname, "lib"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: "babel-loader",
                exclude:/node_modules/,
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
                                    chrome: 58
                                }
                            }
                        ]
                    ]
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./fs/co.html"
        })
    ],
    mode: "development"
}