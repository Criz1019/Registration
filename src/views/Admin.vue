<template>
    <div class="main_container">
      <Home />
      <Register />
    </div>
</template>

<script>
    import Home from "../components/OnlineRegHome.vue";
    import Register from "../components/OnlineRegRegister.vue";
    import Course from "../components/OnlineRegCourse.vue";
    import Requirement from "../components/OnlineRegRequirement.vue";
    import CollegeEnrollment from "../components/OnlineRegCollegeEnrollment.vue";
    import SHEnrollment from "../components/OnlineRegSHEnrollment.vue";
    import About from "../components/OnlineRegAbout.vue";
    import VissionMission from "../components/OnlineRegVisionMission.vue";
    import Achievements from "../components/OnlineRegAchievements.vue";
    import Events from "../components/OnlineRegEvents.vue";

    import Axios from "axios";
    const baseUrl = "http://localhost/api/v1/";
    export default {
        name: 'Admin',
        components:{
          Home,
        },
        data() {
            return {};
        },
        mounted(){

          }

    }
</script>
