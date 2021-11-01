import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,
      // 模块内容（module assets）
      state: () => ({
        name: "account"
      }), // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
      getters: {
        isAdmin() { } // -> getters['account/isAdmin']
      },
      actions: {
        login() {
          console.log("actions staged");
         } // -> dispatch('account/login')
      },
      mutations: {
        login() { } // -> commit('account/login')
      },

      // 嵌套模块
      modules: {
        // 继承父模块的命名空间
        myPage: {
          state: () => ({
            name: "myPage"
          }),
          getters: {
            profile() { } // -> getters['account/profile']
          }
        },

        // 进一步嵌套命名空间
        posts: {
          namespaced: true,

          state: () => ({
            name: "posts"
          }),
          getters: {
            popular() { } // -> getters['account/posts/popular']
          }
        }
      }
    }
  }
})


store.registerModule('myModule',
  {
    state: () => ({
      name: "registerModule"
    }),
    getters: {
      profile() { }
    }
  },
  { preserveState: true }
)

export default store
