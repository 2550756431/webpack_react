import print from "./print/index";
import "./style/index.css"
console.log(print());
const cacl = (a, b) => {
    return a + b
};

console.log(cacl(45546, 46));

if (module.hot) {
    module.hot.accept("./print/index.js", () => {
        console.log(print());
    })
}