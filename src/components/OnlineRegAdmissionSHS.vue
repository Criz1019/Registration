<template>
  <div class="main_container">
    <Header />
    <div class="body_container">
      <h2>Senior High Admission Info</h2>
      <hr>
      <div class="accordion_container">
        <div role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button  block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block href="#" v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div> <!-- end of accordion_container -->
    </div> <!-- end of body_container -->
    <Footer />
  </div> <!-- end of main_container -->

</template>

<script>
import Header from "./OnlineRegHeader.vue";
import Footer from "./OnlineRegFooter.vue";
    export default {
        name: 'OnlineRegAdmissionSHS',
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
