const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = " development"
module.exports = {
    entry: {
        home: './src/index.js',
        about: './src/entry.js',
    },
    output: {
        filename: "[name]_[contenthash:10].js",
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
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns: "usage",
                                "targets": {
                                    "chrome": "58",
                                    "ie": "11"
                                },
                                corejs: {
                                    version: 3
                                }
                            }
                        ]
                        ,
                        "@babel/preset-react"
                    ]
                }
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
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            automaticNameDelimiter: '~',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    // test(module) {
                    //     // `module.resource` contains the absolute path of the file on disk.
                    //     // Note the usage of `path.sep` instead of / or \, for cross-platform compatibility.
                    //     const path = require('path');
                    //     return (
                    //       module.resource &&
                    //       module.resource.endsWith('.svg') &&
                    //       module.resource.includes(`${path.sep}cacheable_svgs${path.sep}`)
                    //     );
                    //   },
                },
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true
                },
                defaultssss: {
                    minChunks: 1,
                    priority: -12,
                    reuseExistingChunk: true,
                    // name(module, chunks, cacheGroupKey) {
                    //     const moduleFileName = module && module
                    //         .identifier()
                    //         .split('/')
                    //         .reduceRight((item) => item);
                    //     return `${moduleFileName}`;
                    // },
                },
                // commonsssssssssssss: {
                //     name: 'commons',          //
                //     chunks: 'initial',        ////
                //     minChunks: 2,             //////////
                // },
            }
        },
    },
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

