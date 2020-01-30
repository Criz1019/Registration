<template>
  <header>
    <div class="top-nav" justify>
      <div class="nav-menu">
        <b-navbar toggleable="lg" type="dark" variant="primary">

            <b-navbar-nav>
              <b-nav-item to="/Home"active href="#">Home</b-nav-item>
              <b-nav-item to="/Course">Courses</b-nav-item>
              <b-nav-item to="/Requirement">Admission Requirements</b-nav-item>
              <b-nav-item to="/Register">Register</b-nav-item>
              <b-nav-item href="#">Login</b-nav-item>
              <b-nav-item href="#">Enroll</b-nav-item>
                <b-nav-item-dropdown text="Enroll">
                  <b-dropdown-item to="/CollegeEnrollment">Grade Report</b-dropdown-item>
                  <b-dropdown-item to="/SHEnrollment">Schedule Report</b-dropdown-item>
                </b-nav-item-dropdown>
              <b-nav-item href="#">View Reports</b-nav-item>
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

    <div>
      <img src="../assets/images/cover1.png" fluid alt="Responsive image" class="cover_img" />
    </div>
  </header>
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
