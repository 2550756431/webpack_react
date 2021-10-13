const webpack = require("webpack");
const ora = require("ora");
const webpackConfig = require("../webpack.config");

const spinner = new ora("Webpack is compiling ...\n");
spinner.color= "green";
spinner.start();


webpack(webpackConfig).run((err,status)=>{
    if(err){
        console.log("webpack compiling failed");
    }else{
        spinner.stop();
        process.stdout.write(status.toString({
            colors:true,
            modules:false,
            children:false,
            chunks:false,
            chunkModules:false
        }) + "\n\n")
        console.log("webpack compiler finished successfully! See ./dist");
    }
})