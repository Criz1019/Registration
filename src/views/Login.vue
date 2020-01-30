<template>
    <div class="row no-gutters align-content-center" id="loginBody">
      <div class="col-sm justify-content-center align-items-center align-content-center">
        <img src="../assets/images/comteq_logo.png" id="loginComteqLogo" alt="COMTEQ LOGO">
        <h1>{{systemTitle}}</h1>
      </div>
      <b-form class="col-sm justify-content-center align-items-center" method="post" v-on:submit.prevent="login">
        <div class="container" id="loginContainer">
          <h1>Login</h1>
          <!--<p v-bind:class="{alert:hasError, 'alert-danger':hasError}">{{loginMessage}}</p>-->
          <b-alert variant="danger" v-model="hasError">{{loginMessage}}</b-alert>
          <b-form-group
            label="Username:"
            label-for="username">
              <b-form-input
                type="text"
                id="username"
                v-model="input.username"
                placeholder="username">
              </b-form-input>
          </b-form-group>
          <b-form-group
            label="Password:"
            label-for="Password">
              <b-form-input
                type="password"
                id="password"
                v-model="input.password"
                placeholder="password">
              </b-form-input>
          </b-form-group>
          <b-form-group>
              <b-button type="submit" id="LoginBtn" name="loginbtn" v-on:click="login()" variant="primary">Login</b-button>
          </b-form-group>
        </div>
      </b-form>
    </div>
</template>

<script>
    import Axios from "axios";
    const baseUrl = "http://localhost/api/v1/";

    export default {
        name: 'Login',
        data() {
          return {
            systemTitle: this.$store.state.systemTitle,
            input: {
              username: "",
              password: ""
            },
            loginMessage: "",
            hasError: false,

          }
        },
        mounted(){
          if(this.$store.state.authenticated){
            this.$router.replace("admin");
          }
          this.toggleBodyClass('removeClass', 'nav-md');
        },
        destroyed(){
          this.toggleBodyClass('addClass', 'nav-md');
        },
        methods: {
          toggleBodyClass(addRemoveClass, className){
            const el = document.body;
            if(addRemoveClass === 'addClass'){
              el.classList.add(className);
            }else{
              el.classList.remove(className);
            }
          },
          login(){
            /*TODO: Create a progress/activity indicator
                    while waiting for the server's response */
            /*TODO: Limit login attempt to three times
                    after which the account must be blocked.
                    A password reset request will be sent to
                    the system administrator. */
            Axios.post(baseUrl + "login", {username: this.input.username, password: this.input.password})
            .then(response => {
                //save user details in localStorage
                localStorage.setItem('ccbc_token', JSON.stringify({ user: response.data.user, token: response.data.token}));
                //save token in store
                this.$store.dispatch('setToken', response.data.token);
                //set global state authenticated to true
                this.$store.dispatch('setAuthenticated', true);
                //save state user in store
                this.$store.dispatch('setUser', response.data.user);
                //redirect page to admin page
                  this.$router.replace("/admin");

                  console.log(response.data.user)

            })
            .catch(error => {
              if(error.response.status==401){
                this.hasError = true;
                this.loginMessage = "Sorry, but the username or password you have entered is invalid.";
              }
            });
          }
        }
    }
</script>
