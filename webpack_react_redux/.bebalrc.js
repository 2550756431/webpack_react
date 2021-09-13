const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                "chrome": "58",
                "ie": "11"
            },
            corejs: {
                versition: 3
            },
            useBuiltIns: "usage"
        }
    ],
    [
        "@babel/preset-react"
    ]
];
const plugins = [
    [
        "import", {
            libraryName: "antd",
            libraryDirectory: "lib",
            style: "css"
        }
    ]
];

module.exports = {
    presets,
    plugins
}