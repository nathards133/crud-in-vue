import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/dashboard",
      name: "dashboard",
      component: () => import("./components/dashboard")
    },
    {
      path: "/register/:id",
      name: "pageRegister",
      component: () => import("./components/pageRegister")
    },
 
  ]
});