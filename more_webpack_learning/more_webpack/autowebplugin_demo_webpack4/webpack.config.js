const {  AutoWebPlugin } = require('web-webpack-plugin');
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const autoPlugin = new AutoWebPlugin(
    // the directory hold all pages
    './src',
    {
        // all props below is not required

        // {string,function}
        // the template file path used by all pages
        // if typeof template ===string: template config is html template file full path
        // if typeof template ===function: template config is function(pageName)=>newFullPath ,ask user for detail
        template: './src/template.html',

        // { function(pageName,templateFullPath)=>htmlString }
        // if provide AutoWebPlugin will use Compiler to compile org template file to html content before used it in WebPlugin
        // templateCompiler: (pageName, templateFullPath) => '',

        // {string,function}
        // get WebPlugin template's string content, high priority than template
        // typeof===string: template config is html template file string content
        // typeof===function: template config is function,ask user for detail
        templateContent: `<!DOCTYPE html>....`,

        // {string,function}
        // javascript main file for current page,if it is null will use index.js in current page directory as main file
        // typeof entry===string: entry config is entry file full path
        // typeof entry===function: entry config is function(pageName)=>newFullPath ,ask user for detail
        entry: null,

        // {function}
        // get WebPlugin output filename,default filename is pageName
        // set filename as function(pageName)=>filename to add custom logic
        filename: null,

        // {Array} pre append to all page's entry
        // preEntrys: ['./path/to/file1.js'],

        // {Array} post append to all page's entry
        // postEntrys: ['./path/to/file2.js'],

        // {string} publicPath for css file,for js file will use webpack.publicPath
        stylePublicPath: null,

        // page name list will not ignore by AutoWebPlugin(Not output html file for this page name)
        ignorePages: ['ignore'],

        // whether output a pagemap.json file which contain all pages has been resolved with AutoWebPlugin in this way:
        // {"page name": "page url",}
        outputPagemap: true,
    }
);
module.exports = {
    entry: autoPlugin.entry({
        "base": resolve(__dirname,"./src/base.js")
    }),
    output: {
        filename: "[name]_[hash:8].js",
        path: resolve(__dirname, "lib"),
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:"babel-loader"
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
		
            filename: '[name].css',
		}),
        autoPlugin
    ],
    devServer: {
        contentBase: resolve(__dirname, "lib"),
        compress: true,
        port: "8087",
        hot: true,
        open: true
    }, 
     watchOptions: {
        ignored: /node_modules/
    },
    mode:"development"
}

// webpack4