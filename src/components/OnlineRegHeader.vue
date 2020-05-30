<template>
  <div class="nav">
    <b-navbar toggleable="lg" type="dark" >
      <!-- <b-navbar-brand href="#">COMTEQ</b-navbar-brand> -->
      <!-- <div class="logo_container">
        <b-img src="../../public/logo.jfif" fluclass alt="Responsive image"></b-img>
      </div> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse class="nav-collapse" is-nav>
        <b-navbar-nav class="navbar_nav">
          <b-nav-item class="nav_item" href="#" to="/Home">Home</b-nav-item>
          <b-nav-item class="nav_item dropdown" href="#">
            Programs
            <div class="dropdown-content">
              <router-link to="/ProgramCollege"><a href="#" >College</a></router-link>
              <b-dropdown-divclasser></br></b-dropdown-divclasser>
              <router-link to="/ProgramSHS"><a href="#" >Senior High</a></router-link>
            </div>
          </b-nav-item>

          <b-nav-item class="nav_item dropdown" href="#" >
            Admissions
            <div class="dropdown-content">
              <router-link to="/AdmissionCollege"><a href="#" >College</a></router-link>
              <b-dropdown-divclasser></br></b-dropdown-divclasser>
              <router-link to="/AdmissionSHS"><a href="#" >Senior High</a></router-link>
            </div>
          </b-nav-item>

          <b-nav-item class="nav_item" href="#" to="/Register">Register</b-nav-item>
          <b-nav-item class="nav_item" href="#" to="/About">About</b-nav-item>
        </b-navbar-nav>

        <div id="loginbtn">
          <b-nav-item href="#" to="/Login">Login</b-nav-item>
        </div>




        <!-- Right aligned nav items -->
        <!-- end of  ml-auto -->
      </b-collapse>
    </b-navbar>
  </div>
  <!-- end of class container -->
</template>




<script>
    export default {
        name: 'Header',
        data() {
            return {
            }
        },
        methods: {

            },

        }
</script>
