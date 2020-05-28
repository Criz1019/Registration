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
          <b-nav-item class="nav_item" href="#" to="/">Login</b-nav-item>
          <b-nav-item class="nav_item" href="#" to="/About">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- end of  ml-auto -->
      </b-collapse>
    </b-navbar>
  </div>
  <!-- end of class container -->
</template>



<!-- <header>
  <div ="top-nav" justify>
    <div class="nav-menu">
      <b-navbar toggleable="lg" type="dark" variant="primary">

          <b-navbar-nav>
            <b-nav-item to="/Home" >Home</b-nav-item>
            <b-nav-item to="/Course">Courses</b-nav-item>
            <b-nav-item to="/Requirement">Admission Requirements</b-nav-item>
            <b-nav-item to="/Register">Register</b-nav-item>
            <b-nav-item to="../Login">Login</b-nav-item>
              <b-nav-item-dropdown text="Enroll">
                <b-dropdown-item to="/CollegeEnrollment">College Enrollment</b-dropdown-item>
                <b-dropdown-item to="/SHEnrollment">Senior High Enrollment</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown text="View Reports">
                <b-dropdown-item to="/GradeReport">Grade Report</b-dropdown-item>
                <b-dropdown-item to="/ScheduleReport">Schedule Report</b-dropdown-item>
              </b-nav-item-dropdown>
            <b-nav-item href="#">Account</b-nav-item>
          </b-navbar-nav>
          <b-left>
            <img src="../assets/images/comteq_logo1.png"  ="ComteqLogo" class="responsive"/>
          </b-left>
      </b-navbar>
    </div>
  </div>
</header> -->

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
