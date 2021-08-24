const { resolve } = require("path");
const  webpack = require("webpack");
process.env.NODE_ENV="production";
module.exports = {
    entry: {
        //要打包的库是【"jquery"】,生成的名字--jquery
        jquery: ["jquery"],
    },
    output: {
        filename: "jquery.js",
        path: resolve(__dirname, "dll"),
        library: "[name]_[hash]" , //打包生成的类容里面 的 title
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]_[hash]",  //映射 打包生成的类容里面 的 title
            path:resolve(__dirname,"dll/manifest.json")
        })
    ],
    mode:"production"
}