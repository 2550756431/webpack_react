module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',

    pluginOptions: {
        // 'style-resources-loader': {
        //     preProcessor: 'less',
        //     patterns: [
        //       // 配置哪些文件需要自动导入
        //       path.join(__dirname, './src/xx/xx.less')
        //     ]
        //   }
    }
}