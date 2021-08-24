// import {
//     add,
//     subtarct
// } from "./test.js";
console.log("wenjiangbeijiazhal")
const btn = document.querySelector("button");
console.log(btn);
btn.onclick = () => {
    // console.log(add())
    // console.log(subtarct())
    import(/*webpackChunkName:'test',webpackPrefetch:true*/"./test.js").then((res) => {
        console.log(res.add());
    })
}