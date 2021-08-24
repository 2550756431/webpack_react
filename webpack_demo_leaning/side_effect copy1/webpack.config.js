const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/js/index.js",
    // entry: {
    //     index:"./src/js/index.js",
    //     test:"./src/js/test.js"
    // },
    output: {
        path: resolve(__dirname, 'lib'),
        filename: "[name]_[contenthash:10].js",
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
                                useBuiltIns: "usage",
                                targets: {
                                    firefox: "60",
                                    ie: '9',
                                    safari: "10",
                                    edge: "17"
                                },
                                corejs: {
                                    version: 3
                                }
                            }
                        ]
                    ]
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    mode: "development",
    devtool:"eval-source-map"
}