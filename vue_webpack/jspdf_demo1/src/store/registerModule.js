import Vuex from "vuex";

const store = new Vuex.Store({
  /* 选项 */
});

// 注册模块 `myModule`
store.registerModule("myModule", {
  // ...
});
// 注册嵌套模块 `nested/myModule`
store.registerModule(["nested", "myModule"], {
  // ...
});