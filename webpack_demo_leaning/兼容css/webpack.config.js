const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = "development"
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "lib")
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            ident: "postcss"
                                        },
                                    ],
                                ],
                            },
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
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
                exclude: /\.(css|less|html|js|jpg|gif|png)/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/index.css"
        })
    ],
    mode: "development",
    devServer: {
        contentBase: resolve(__dirname, "lib"),
        compress: true,
        port: 3000,
        open: true
    }
}

//css 兼容(第二种 写法)
//package.json配置添加的
 // "browserslist": {
  //   "development": [
  //     "last 1 chrome version",
  //     "last 1 firefox version",
  //     "last 1 safair version"
  //   ],
  //   "production": [
  //     ">0.2%",
  //     "not dead ",
  //     "not op_mini all"
  //   ]
  // }



//   postcss.config.js(创建postcss.config.js)
//   module.exports={
//     plugins: [
//         [
//           'postcss-preset-env',
//           {
//             ident: "postcss"
//           },
//         ],
//       ],
//   }