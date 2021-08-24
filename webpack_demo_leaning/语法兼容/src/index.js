// import "@babel/polyfill"
const add = (x, y) => {
    return x + y;
}

const pormise = new Promise((resolve) => {
    setTimeout(() => {
        console.log(111111111111)
        resolve()
    }, 1000);
})
console.log(add(454, 465))
console.log(pormise)


