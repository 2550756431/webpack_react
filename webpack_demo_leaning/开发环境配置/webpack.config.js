const {
    resolve
} = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index",
    output: {
        filename: "buit.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
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
            },
            {
                exclude: /\.(html|css|js|less|jpg|png|gif)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugins({
            template: "./src/index.html"
        })
    ],
    mode: "development",
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 3001
    }
}