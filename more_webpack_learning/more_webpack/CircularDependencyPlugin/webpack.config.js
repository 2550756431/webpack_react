const path = require("path");
// const CircularDependencyPlugin = require("circular-dependency-plugin");
const Os = require("os");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const { AutoWebPlugin } = require('web-webpack-plugin');
const HappyPack = require("happypack");
const HappyThreadPool = { size: Os.cpus().length }
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
        "base": "./src/base.js"
    }),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "lib"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "happypack/loader?id=jsx"
            },
            {
                test: /.html$/,
                use: "html-loader"
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: resolve(__dirname,"./src/template.html")
        // }),
        // new CircularDependencyPlugin({
        //     exclude: /node_modules/,
        //     // include specific files based on a RegExp
        //     include: /src/,
        //     // add errors to webpack instead of warnings
        //     failOnError: true,
        //     // allow import cycles that include an asyncronous import,
        //     // e.g. via import(/* webpackMode: "weak" */ './file.js')
        //     allowAsyncCycles: false,
        //     // set the current working directory for displaying module paths
        //     cwd: process.cwd(),
        // }),
        new HappyPack({
            id: 'jsx',
            threads: 4,  // 这个数字表示HappyPack在编译源文件时会生成多少个Node vm。在进行了大量的修改之后，我发现4个方法产生了最好的结果。这个值的回报肯定是递减的，如果超过8，我的进度就会慢下来。
            // threadPool: HappyThreadPool,
            loaders: ['babel-loader']
        }),
        autoPlugin

    ],
    devServer: {
        contentBase: resolve(__dirname, 'lib'),
        compress: true,
        port: 7070,
        open: true,
        hot: true
        // host:"localhost"
    },
    watchOptions: {
        ignored: /node_modules/
    },
    mode: "development"
}