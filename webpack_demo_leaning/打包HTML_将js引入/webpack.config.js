const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {

            }
        ]
    },
    plugins: [
        //html-webpack-plugins
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",
    optimization:{
        
    }
}

//每个不同类型的文件在loader转换时，都会被命中，遍历module中rules中所有loader;;;只要能匹配一个即可退出，  oneof;;;