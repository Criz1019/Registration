import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import Admin from "./views/Admin.vue";
import HomePage from "./views/Home.vue";
import Header from "./components/OnlineRegHeader.vue";
import Footer from "./components/OnlineRegFooter.vue";
import Home from "./components/OnlineRegHome.vue";
import AdmissionCollege from "./components/OnlineRegAdmissionCollege.vue";
import AdmissionSHS from "./components/OnlineRegAdmissionSHS.vue";
import ProgramCollege from "./components/OnlineRegProgramCollege.vue";
import ProgramSHS from "./components/OnlineRegProgramSHS.vue";
import Register from "./components/OnlineRegRegister.vue";
import Course from "./components/OnlineRegCourse.vue";
import Requirement from "./components/OnlineRegRequirement.vue";
import CollegeEnrollment from "./components/OnlineRegCollegeEnrollment.vue";
import SHEnrollment from "./components/OnlineRegSHEnrollment.vue";
import About from "./components/OnlineRegAbout.vue";
import VissionMission from "./components/OnlineRegVissionMission.vue";
import Achievements from "./components/OnlineRegAchievements.vue";
import Events from "./components/OnlineRegEvents.vue";
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
    {
      path: "/Achievements",
      name: "Achievements",
      component: Achievements,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
    {
      path: "/Events",
      name: "Events",
      component: Events,
      beforeEnter(to, from, next){
        setTimeout(() => next(), 100);
      },
    },
  ]
});
