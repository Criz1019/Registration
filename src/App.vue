<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {

            }
        },
        mounted() {
            //check if token already exists in localStorage
            if(typeof localStorage.getItem("ccbc_token") !== 'undefined'  && localStorage.getItem("ccbc_token") !== null && localStorage.getItem("ccbc_token") !== ""){
              this.$store.dispatch('setAuthenticated', true);
              this.$store.dispatch('setUser', JSON.parse(localStorage.getItem("ccbc_token")).user);
              this.$store.dispatch('setToken', JSON.parse(localStorage.getItem("ccbc_token")).token);
            }

            //check if user is already authenticated and redirect to necessary page/view
            if(this.$store.getters.isAuthenticated){
              this.$router.replace("/admin");
            }else{
              this.$router.replace("/login");
            }
        },
        methods: {
            logout(){
              this.$store.dispatch('logout');
            }
        }
    }
</script>
