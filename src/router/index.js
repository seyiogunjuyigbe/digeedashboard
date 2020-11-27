import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../components/Profile";
import Result from "../components/Result";
import Register from "../components/auth/Register"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/result",
    name: "Result",
    component: Result
  },
  {
    path: "/signup",
    name: "Register",
    component: Register
  }
];

const router = new VueRouter({
  routes
});

export default router;
