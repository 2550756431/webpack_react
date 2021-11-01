import Jquery from "jquery";
console.log(111);
if (module.hot) {
    module.hot.accept("./base.js", () => {
        console.log(1111111);
    })
}