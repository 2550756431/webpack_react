const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssestsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, 'lib')
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
                                            ident: "postcss"
                                        }
                                    ]
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns: "usage",
                                corejs: 3,
                                targets: {
                                    chrome: "60",
                                    firefox: "60",
                                    ie: '9',
                                    safari: "10",
                                    edge: "17"
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(pgn|jpg|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 2 * 1024,
                    name: "[hash:10].[ext]"
                }
            },
            {
                test: /.html$/,
                loader: "html-loader",
                options: {
                    esModule: false,
                }
            },
            {
                exclude: /\.(html|js|css|png|jpg|gif)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        // new OptimizeCssAssestsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/index.css"
        }),
    ],
    devServer: {
        contentBase: resolve(__dirname, 'lib'),
        compress: true,
        port: "8000",
        open: true,
        hot: true
    },
    devtool:"eval-source-map",
    mode: "development"
}

/*  
https://webpack.docschina.org/configuration/devtool/#development   (detool)
1对于开发环境:
eval-source-map     *****
- 每个模块使用 eval() 执行，并且 source map 转换为 DataUrl 后添加到 eval() 中。初始化 source map 时比较慢，但是会在重新构建时提供比较快的速度，并且生成实际的文件。行数能够正确映射，因为会映射到原始代码中。它会生成用于开发环境的最佳品质的 source map。

eval 
- 每个模块都使用 eval() 执行，并且都有 //@ sourceURL。此选项会非常快地构建。主要缺点是，由于会映射到转换后的代码，而不是映射到原始代码（没有从 loader 中获取 source map），所以不能正确的显示行数

eval-cheap-source-map 
- 类似 eval-source-map，每个模块使用 eval() 执行。这是 "cheap(低开销)" 的 source map，因为它没有生成列映射(column mapping)，只是映射行数。它会忽略源自 loader 的 source map，并且仅显示转译后的代码，就像 eval devtool。

eval-cheap-module-source-map 
- 类似 eval-cheap-source-map，并且，在这种情况下，源自 loader 的 source map 会得到更好的处理结果。然而，loader source map 会被简化为每行一个映射(mapping)。

2特定场景...


3对于生产环境
source-map 
- 整个 source map 作为一个单独的文件生成。它为 bundle 添加了一个引用注释，以便开发工具知道在哪里可以找到它。

hidden-source-map 
- 与 source-map 相同，但不会为 bundle 添加引用注释。如果你只想 source map 映射那些源自错误报告的错误堆栈跟踪信息，但不想为浏览器开发工具暴露你的 source map，这个选项会很有用。


nosources-source-map 
- 创建的 source map 不包含 sourcesContent(源代码内容)。它可以用来映射客户端上的堆栈跟踪，而无须暴露所有的源代码。你可以将 source map 文件部署到 web 服务器。



*/