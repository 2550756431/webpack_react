const path = require("path");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const Os =require("os");
const { resolve } = require("_url@0.11.0@url");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: {
        "base": "./src/base.js"
    },
    output: {
        // filename: "[name]_[contenthash:8].[ext]",
        path: path.resolve(__dirname, "lib"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test:/.html$/,
                use:"html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/template.html"
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            // include specific files based on a RegExp
            include: /src/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // allow import cycles that include an asyncronous import,
            // e.g. via import(/* webpackMode: "weak" */ './file.js')
            allowAsyncCycles: false,
            // set the current working directory for displaying module paths
            cwd: process.cwd(),
        }),
       
    ],
    devServer:{
       contentBase:resolve(__dirname,'lib'),
        compress:true,
        port:7070,
        open:true,
        hot:true
        // host:"localhost"
    },
    mode: "development"
}