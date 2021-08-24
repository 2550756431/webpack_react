const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "lib"),
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ],

            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    // 文件小于8kb 会被转为base64位
                    limit: 8 * 1024,
                    // 保留打包后图片hash值前10位；
                    // ext 保留原文件的后缀名
                    name: "[hash:10].[ext]"
                }
            },
            {
                test: /\.html$/,
                // html-loader 引入img 图片，用于url-loader打包
                loader: "html-loader",
                options: {
                    esModule: false,
                }
            },
            {
                exclude: /\.(css|js|html|less|jpg|png|gif)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
             filename:"css/lib.css"
        })
    ],
    mode: "development",

    //自会在内存中打包，
    devServer: {
        contentBase: resolve(__dirname, "lib"),
        compress: true,
        port: 3000,
        open: true
    }
}


/*
css兼容处理：
postcss-loader
postcss-preset-env
*/

/*


*/