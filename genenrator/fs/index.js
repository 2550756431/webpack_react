const fs = require("fs")
const Thunk = function (fn) {
    console.log(fn, "fnfnfnfnfnfn");
    return function (...args) {
        console.log(...args, "argsargsargsargs");
        return function (callback) {
            console.log(callback, "callbackcallback");
            return fn.call(this, ...args, callback);
        }
    };
};

const readFileThunk = Thunk(fs.readFile);

function* readAsync() {
    const r1 = yield readFileThunk('/url1');
    const r2 = yield readFileThunk('/url2');
    const r3 = yield readFileThunk('/url3');
}
//执行器
function run(fn) {
    const gen = fn();
    function next(err, data) { //方法可以通过手动执行推导
        const result = gen.next(data);
        console.log(result, "result");
        if (result.done) return;
        result.value(next); // 上面的异步操作是同类型的操作，自动执行相当于相同的next方法一直回调
    }
    next();
}
run(readAsync);