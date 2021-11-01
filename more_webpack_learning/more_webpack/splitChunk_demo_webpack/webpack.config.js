const html
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash].js",
        path: resolve(__dirname, "lib")
    },
    module: {
        rules: [
            {

            }
        ]
    }, 
    plugins: [

    ],
    optimazition: {
        splitChunks: {
            cacheGroups: {
                svgGroup: {
                    test(module) {
                        // `module.resource` contains the absolute path of the file on disk.
                        // Note the usage of `path.sep` instead of / or \, for cross-platform compatibility.
                        const path = require('path');
                        return (
                            module.resource &&
                            module.resource.endsWith('.svg') &&
                            module.resource.includes(`${path.sep}cacheable_svgs${path.sep}`)
                        );
                    },
                },
                byModuleTypeGroup: {
                    test(module) {
                        return module.type === 'javascript/auto';
                    },
                },
                defaultVendors: {
                    // Note the usage of `[\\/]` as a path separator for cross-platform compatibility.
                    test: /[\\/]node_modules[\\/]|vendor[\\/]analytics_provider|vendor[\\/]other_lib/,
                    // filename: '[name].bundle.js',
                    filename: (pathData) => {
                        // Use pathData object for generating filename string based on your requirements
                        return `${pathData.chunk.name}-bundle.js`;
                    },
                    enforce: true,
                    idHint: 'vendors',
                },
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            }
        }
    },
    mode: "development",
}