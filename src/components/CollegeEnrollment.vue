<template>
  <div class="main_container">
    <Header />

  <!-- 1st form -->
    <div>
      <b-card bg-variant="light">
        <b-text>Academic Information</b-text>
          <b-form-group
            label-cols-sm="3"
            label="Academic Year:"
            label-align-sm="right"
            label-for="academic"
            >
            <b-form-input id="academic"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Student Status:"
            label-align-sm="right"
            label-for="sstatus"
            >
            <b-form-input id="sstatus"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Course:"
            label-align-sm="right"
            label-for="course"
            >
            <b-form-input id="course"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Academic Status:"
            label-align-sm="right"
            label-for="astatus"
            >
            <b-form-input id="astatus"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Semester:"
            label-align-sm="right"
            label-for="sem"
            >
            <b-form-input id="sem"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Year:"
            label-align-sm="right"
            label-for="year"
            >
            <b-form-input id="year"></b-form-input>
          </b-form-group>
       </b-card>
      </div>

      <div>
        <!-- AG grid id need here -->
      </div>
      <Footer />
    </div>
  </template>


<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

    export default {
        name: 'CollegeEnrollment',
        components:{
          Header,
          Footer
        },

        data() {
            return {

            }
        },
        methods: {

            },

        }
</script>
