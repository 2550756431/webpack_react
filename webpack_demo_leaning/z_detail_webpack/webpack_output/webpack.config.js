const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].js",
        path: resolve(__dirname, 'lib'),
        // publicPath: "/asdfasdf",  //会将引入公共路径前缀 加上"/asdfasdf"
        chunkFilename:"[hash]_chunk.js",
        library:"[hash]",   //整个库向外暴露的变量名
        libraryTarget:"global",   //变量名添加到 node
        clean:true
    },
    module: {
        rules: [
            {
                test: /\.(pgn|gif|jpg)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    name: "[hash:10].[ext]"
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "production"
}