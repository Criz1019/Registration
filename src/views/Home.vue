<template>
    <div class="main_container">
      <Home />
    </div>
</template>

<script>
    import Home from "../components/Home.vue";
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
