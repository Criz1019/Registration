<template>
  <div class="main_container">
    <Header />

    <!-- start of cards  -->
    <div>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
            <b-card
              border-variant="default"
              header="For Upcoming College"
              header-border-variant="info"
              header-text-variant="black"
              align="center"
            >
            <b-col md="6">
              <img src="../assets/images/pic3.jpg" img-left class="rounded-0" />
            </b-col>
            <b-card-text>
              <ul>
                <li>Good Moral</li>
                <li>Form 137/Form 138</li>
                <li>Birth Certificate</li>
              </ul>
            </b-card-text>
          </b-card>
        </b-row>
      </b-card>
    </div>

    <div>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
            <b-card
              border-variant="default"
              header="For Upcoming Senior High"
              header-border-variant="info"
              header-text-variant="black"
              align="center"
            >
            <b-col md="6">
              <img src="../assets/images/pic3.jpg" img-left class="rounded-0" />
            </b-col>
            <b-card-text>
              <ul>
                <li>Good Moral</li>
                <li>Form 137/Form 138</li>
                <li>Birth Certificate</li>
              </ul>
            </b-card-text>
          </b-card>
        </b-row>
      </b-card>
    </div>

    <div>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
            <b-card
              border-variant="default"
              header="For Transferee"
              header-border-variant="info"
              header-text-variant="black"
              align="center"
            >
            <b-col md="6">
              <img src="../assets/images/pic3.jpg" img-left class="rounded-0" />
            </b-col>
            <b-card-text>
              <ul>
                <li>TOR</li>
                <li>Honorable Dismissal</li>
                <li>Good Moral</li>
                <li>Form 137/Form 138</li>
                <li>Birth Certificate</li>
              </ul>
            </b-card-text>
          </b-card>
        </b-row>
      </b-card>
    </div>

    <Footer />
  </div>
</template>


<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

    export default {
        name: 'Requirement',
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
