const {
    addDecoratorsLegacy,
    disableEsLint,
    useBabelRc,
    override,
    overrideDevServer,
    watchAll,
    fixBabelImports
} = require("customize-cra")
const devserverConfig = (config) => {
    return {
        ...config,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' },
            },
        },
    }
}
module.exports = {
    webpack: override(
        disableEsLint(),
        addDecoratorsLegacy(),
        useBabelRc(),
        // fixBabelImports("import", {
        //     libraryName: "antd",
        //     style: true
        // })
    ),
    devServer: overrideDevServer(
        watchAll(),
        // ...devserverConfig()
    )
};