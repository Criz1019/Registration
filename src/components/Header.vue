<template>
  <div class="container">
    <b-navbar class="nav" toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">COMTEQ</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" to="/Home">Home</b-nav-item>
          <b-nav-item href="#" to="/Course">Courses</b-nav-item>
          <b-nav-item href="#" to="/Requirement">Admission Requirements</b-nav-item>
          <b-nav-item href="#" to="/Register">Register</b-nav-item>
          <b-nav-item href="#" to="/">Login</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              User
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <!-- end of class ml-auto -->
      </b-collapse>
    </b-navbar>
  </div>
  <!-- end of class container -->
</template>



<!-- <header>
  <div class="top-nav" justify>
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
            <img src="../assets/images/comteq_logo1.png"  id="ComteqLogo" class="responsive"/>
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
