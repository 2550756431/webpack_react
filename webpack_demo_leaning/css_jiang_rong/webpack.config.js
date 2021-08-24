const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: resolve(__dirname, "lib"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            ident: "potcss"
                                        }
                                    ]
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css"
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode:"development"
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