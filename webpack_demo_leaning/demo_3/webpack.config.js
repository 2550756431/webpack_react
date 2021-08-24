//所有构建工具都是基于nodejs 平台运行的~模块化默认采用commonJS.
const { resolve } = require("path")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "lib"),

    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
            }
        ]
    },
    plugins: [],
    mode: "development"

}

// module.exports = {
//     entry: "./src/index.js",
//     output: {
//         filename: "built.js",
//         path: resolve(__dirname, "build"),
//         module: {
//             rules: {
//                 //详细loader的配置
//                 test: /\.css$/,
//                 use: ["style-loader", "css-loader"]
//             }
//         },

//         plugins: {
//             //详细plugins的配置
//         },
//         mode: "development"
//     }
// }

