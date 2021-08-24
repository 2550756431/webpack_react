console.log("modulemod11ule");
import add from "./js/index"
if(module.hot){
    module.hot.accept("./js/index.js",()=>{
        console.log(add())
    })
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        