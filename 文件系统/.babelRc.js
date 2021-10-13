const presets = [
    [
        "@babel/preset-env"
        ,
        {
            useBuiltIns: "usage",
            corejs: "3",
            targets: {
                chrome: 58
            }
        }
    ] 
    
]
module.exports = {
    presets
}