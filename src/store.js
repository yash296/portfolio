import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    color: "dark"
  },
  getters: {
    getColor: state => {
      return state.color;
    }
  },
  mutations: {
    updateColor: (state, color) => {
      state.color = color;
    }
  },
  actions: {
    changeColor: (context, color) => {
      context.commit("updateColor", color);
    }
  }
});
