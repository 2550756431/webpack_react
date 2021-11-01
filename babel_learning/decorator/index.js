import { mixins } from './mixins/index.js';

const Foo = {
    foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass { 
    constructor(){
        this.info = this.getDetail()
    }

    getDetail(){
        return 8 ** 9
    }
}

let obj = new MyClass();
obj.foo() // "foo"
console.log(obj.info);l