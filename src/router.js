import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Admin from "./views/Admin.vue";
import HomePage from "./views/Home.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
import AdmissionCollege from "./components/AdmissionCollege.vue";
import AdmissionSHS from "./components/AdmissionSHS.vue";
import ProgramCollege from "./components/ProgramCollege.vue";
import ProgramSHS from "./components/ProgramSHS.vue";
import Register from "./components/Register.vue";
import Course from "./components/Course.vue";
import Requirement from "./components/Requirement.vue";
import CollegeEnrollment from "./components/CollegeEnrollment.vue";
import SHEnrollment from "./components/SHEnrollment.vue";
import About from "./components/About.vue";
import VissionMission from "./components/VissionMission.vue";
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
      path: "/home",
      name: "Home",
      component: Home,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 500);
      },
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
    {
      path: "/course",
      name: "Course",
      component: Course,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
    {
      path: "/requirement",
      name: "Requirment",
      component: Requirement,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },

    {
      path: "/collegeEnrollment",
      name: "CollegeEnrollment",
      component: CollegeEnrollment,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
    {
      path: "/shEnrollment",
      name: "SHEnrollment",
      component: SHEnrollment,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
    {
      path: "/AdmissionCollege",
      name: "AdmissionCollege",
      component: AdmissionCollege,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
    {
      path: "/AdmissionSHS",
      name: "AdmissionSHS",
      component: AdmissionSHS,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
    {
      path: "/ProgramSHS",
      name: "ProgramSHS",
      component: ProgramSHS,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
    {
      path: "/ProgramCollege",
      name: "ProgramCollege",
      component: ProgramCollege,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
    {
      path: "/About",
      name: "About",
      component: About,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
    {
      path: "/VissionMission",
      name: "VissionMission",
      component: VissionMission,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
  ]
});
