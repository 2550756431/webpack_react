const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = " development"
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "builts.js",
        path: resolve(__dirname, "lib"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("postcss-preset-env")()
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new OptimizeCssAssetsWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "index.css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        })
    ],
    mode: "development"
}


/*

"development": [
    "last 1 chrome version",  // 兼容最近的一个chrome版本
    "last 1 firefox version",
    "last 1 safari version"
],
"production":[
    ">0.2%",
    "not dead", // 不要已经丢弃的浏览器
    "not op_mini all" //不要所有的欧朋浏览器
]


*/