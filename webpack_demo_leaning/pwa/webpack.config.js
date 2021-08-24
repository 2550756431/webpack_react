const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin")
process.env.NODE_ENV="production"
//pwa 渐进式网络开发应用程序 offline 可访问
module.exports={
    entry:"./src/index.js",
    output:{
        path:resolve(__dirname,"lib/js"),
        filename:"[name].[contenthash:10].js",
        clean:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            /*
            1. serviceWorker 快速启动
            2.删除 旧的 serviceWorker

            生成 serviceWorker
            */ 
            clientsClaim:true,
            skipWaiting:true
        }),
    ],
    devtool:"eval-source-map",
    mode:"production"
}