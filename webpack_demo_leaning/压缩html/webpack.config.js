const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports={
    entry:"./index.js",
    output:{
        path:resolve(__dirname,"lib"),
        filename:"built.js"
    },
    module:{

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./index.html",
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        })
    ],
    mode:"production"
}