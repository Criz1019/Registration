<template>
  <div class="main_container">
    <Header />
    <div class="body_container">
      <h2>Courses Offered</h2>
      <hr>

      <div class="horizontal_cards_container">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div class="horizontal_cards_container">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body title="Horizontal Card">
                <b-card-text>
                  This is a wider card with supporting text as a natural lead-in to additional content.
                  This content is a little bit longer.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

    </div> <!-- end of body container -->
    <Footer />
  </div>
</template>


<script>
import Header from "./OnlineRegHeader.vue";
import Footer from "./OnlineRegFooter.vue";
    export default {
        name: 'OnlineRegCourse',
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
