const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: {
        "a1": "./src/js/index.js",
        "a2": "./src/js/test.js"
    },
    output: {
        path: resolve(__dirname, 'lib'),
        filename: "buit[contenthash:10].js",
        clean: true
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         "css-loader",
            //         {
            //             loader: "postcss-loader",
            //             options: {
            //                 postcssOptions: {
            //                     plugins: [
            //                         [
            //                             "postcss-preset-env",
            //                             {
            //                                 ident: "postcss"
            //                             }
            //                         ]
            //                     ]
            //                 }
            //             }
            //         }
            //     ]
            // }

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
        // new HtmlWebpackPlugin({
        //     template:"./src/index.html",
        //     minify:{
        //         removeComments:true,
        //         collapseWhitespace:true
        //     }
        // })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    mode: "development"
}