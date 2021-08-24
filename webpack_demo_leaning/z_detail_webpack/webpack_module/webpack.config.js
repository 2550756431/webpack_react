const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[contenthash].js",
        path: resolve(__dirname, "lib"),
        clean:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode:"production"
}