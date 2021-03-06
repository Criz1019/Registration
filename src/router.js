import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Admin from "./views/Admin.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import Register from "./components/Register.vue";
import Course from "./components/Course.vue";
import Requirement from "./components/Requirement.vue";
import CollegeEnrollment from "./components/CollegeEnrollment.vue";
import SHEnrollment from "./components/SHEnrollment.vue";
Vue.use(Router);

/*NOTE: the meta inside each route is useless for now.
we might need this if we use a third party authentication library
or used a middleware*/
export default new Router({

  mode: 'history',
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        requiresAuth: true,
        is_admin: true
      },
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 2000);
      },
    },
    {
      path: "/course",
      name: "Course",
      component: Course,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 2000);
      },
    },
    {
      path: "/requirement",
      name: "Requirment",
      component: Requirement,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 2000);
      },
    },

    {
      path: "/collegeEnrollment",
      name: "CollegeEnrollment",
      component: CollegeEnrollment,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 2000);
      },
    },
    {
      path: "/shEnrollment",
      name: "SHEnrollment",
      component: SHEnrollment,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 2000);
      },
    },
  ]
});
