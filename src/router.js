import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Portfolio from "./views/Portfolio";
import Skills from "./views/Skills";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      component: Portfolio
    },
    {
      path: "/skills",
      component: Skills
    }
  ]
});
