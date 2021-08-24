const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path")
module.exports = {
    entry: ["./src/index.js","./src/index.html"],
    output: {
        filename: "[contenthash].js",
        path: resolve(__dirname, "lib"),
        clean: true
    },
    module:{
        rules:[
            {
                test:/\.html$/,
                use:'html-loader'
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader",
                options:{
                    presets:[
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns:"usage",
                                targets:{
                                    chrome: "60",
                                    firefox: "60",
                                    ie: '9',
                                    safari: "10",
                                    edge: "17"
                                },
                                corejs:{
                                    version:3
                                }
                            }
                        ]
                    ]
                }
            },
            {

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",
    devServer: {
        contentBase: resolve(__dirname, "lib"),
        compress: true,
        port: "3000",
        open: true,
        hot: true,
      
    },
    devtool:"eval-source-map"
}

// devServer: {
//     contentBase: resolve(__dirname, "lib"),
//     watchContentBase: true, // 监视contentBase 下 所有目录信息，一旦发生变化就会reload
//     watchOptions: {
//         //监视contentBase目录 下的node_modules
//         ignored: /node_modules/
//     },
//     compress: true,
//     port: "3000",
//     host:"localhost", 
//     open: true,
//     hot: true,
//     clientLogLevel: "none", //不要显示服务启动时的信息
//     quiet: true,   //除了基本启动信息 ， 其他 信息不显示
//     overlay: false, //如果出错，不要全屏提示
//     proxy: {
//         "/api": {
//             //服务器接收到(3000) /api/index 请求时，就会把请求转发到 另一个 服务器（5000）
//             target: "http://localhost:5000",
//             //请求路径重写  /api/index --> /index
//             pathRewrite: {
//                 "^/api": ""
//             }
//         }
//     }
// }