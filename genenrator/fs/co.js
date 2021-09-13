const co = require('co');



function* gen() {
    const res = yield {
        0: Promise.resolve(1),
        1: Promise.resolve(2)
    }
    console.log(res, "gengengen");
}

let func = gen();
func.next();
func.next();