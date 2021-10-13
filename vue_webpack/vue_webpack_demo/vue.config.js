module.exports = {
    // publicPath: process.env.NODE_ENV = 'develepment' ? "/production-app" : "/",
    outputDir: "lib",
    assetsDir: "assets",
    indexPath: "index.html", // default
    filenameHashing: true,  //default  //requires the index HTML to be auto-generated by Vue CLI.
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        subpage: 'src/subpage/main.js'
    },
    lintOnSave: "default",    /*
     1.是否在开发期间使用eslint-loader，只有安装@vue/cli-plugin-eslint生效 ；；
     2.lintOnSave ------设置为true or 'warning' ，  将发出lint错误警告。。。。。。默认情况下，警告只记录到终端，不会导致编译失败，因此这对于开发来说是一个很好的默认设置。
    */
    runtimeCompiler: true,/*
        new Vue({
            template: '<div>{{ hi }}</div>'
        })
     */
    
}