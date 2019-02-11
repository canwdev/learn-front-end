import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    countString: (state) => (str) => {
        return str + state.count + 'ヾ(≧▽≦*)o'
      }
    
  },
  mutations: {
    increment(state, n = 0) {
      if (n) {
        state.count = state.count + n;
      } else {
        state.count++;
      }
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    delayIncreasement({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 1000);
    }
  }
})