const { resolve } = require("path");
process.env.NODE_ENV="production"
module.exports = {
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, "lib"),
        filename: "[name].[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "thread-loader",
                        //多进程打包
                        options: {
                            worker: 2
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
    ],
    mode: 'production',
    devtool: "eval-source-map",
    externals:{
        // 阻止JQuery 被打包进来
        jQuery:"JQuery"
    }
}