import $ from "jquery";
function mul(x, y) {
    return x + y
}

const add = (a, b) => {
    return a * b;
}

export {
    add,
    mul
}

import("./test").then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err);
})