<template>
  <div class="main_container">
    <Header />
    <div class="body_container">
      <h2>College Admission Info</h2>
      <hr>
      <div class="accordion_container">
        <div role="tablist">
          <!-- requirements -->
          <div class="accordion_cards">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button v-on:click="isActive = !isActive" v-bind:class="{ active: isActive }"  squared block href="#" v-b-toggle.accordion-1 variant="outline-dark">
                  <h4>Requirments</h4>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    Please input the condition of how to avail the Atletics scholarship of the school.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <!-- requirements -->
          <!-- procedure -->
          <div class="accordion_cards">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button v-on:click="isActive = !isActive" v-bind:class="{ active: isActive }"  squared block href="#" v-b-toggle.accordion-2 variant="outline-dark">
                  <h4>Procedure</h4>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    Please input the condition of how to avail the Atletics scholarship of the school.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <!-- procedure -->
        </div>
      </div> <!-- end of accordion_container -->
    </div> <!-- end of body_container -->
    <Footer />
  </div> <!-- end of main_container -->

</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
    export default {
        name: 'AdmissionCollege',
        components:{
          Header,
          Footer
        },

        data() {
            return {
              isActive: false
            }
        },
        methods: {

        },

        }
</script>
