<template>
    <div class="main_container">
      <Home />
      <Register />
    </div>
</template>

<script>
    import Home from "../components/Home.vue";
    import Register from "../components/Register.vue";
    import Course from "../components/Course.vue";
    import Requirement from "../components/Requirement.vue";
    import CollegeEnrollment from "../components/CollegeEnrollment.vue";
    import SHEnrollment from "../components/SHEnrollment.vue";
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
