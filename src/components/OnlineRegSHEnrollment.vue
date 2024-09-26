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
            label="Track:"
            label-align-sm="right"
            label-for="track"
            >
            <b-form-input id="track"></b-form-input>
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
            label="Major:"
            label-align-sm="right"
            label-for="major"
            >
            <b-form-input id="major"></b-form-input>
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
import Header from "./OnlineRegHeader.vue";
import Footer from "./OnlineRegFooter.vue";

    export default {
        name: 'OnlineRegSHEnrollment',
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
