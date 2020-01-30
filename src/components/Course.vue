<template>
  <div class="main_container">
    <Header />

    <!-- start of cards  -->
    <div>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
            <b-card
              border-variant="default"
              header="College of Computer Science"
              header-border-variant="info"
              header-text-variant="black"
              align="center"
            >
            <b-col md="6">
              <img src="../assets/images/pic3.jpg" img-left class="rounded-0" />
            </b-col>
            <b-card-text>
              <ul>
                <li>Bachelor of Science in Computer Science</li>
                <li>Bachelor of Science in Information Technology</li>
                <li>Associate in Computer Technology</li>
                   <small>(Ladderized course leading to BSIT/BSCS)</small>
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
              header="College of Bussiness Administration"
              header-border-variant="info"
              header-text-variant="black"
              align="center"
            >
            <b-col md="6">
              <img src="../assets/images/pic3.jpg" img-left class="rounded-0" />
            </b-col>
            <b-card-text>
              <ul>
                <li>Bachelor of Science in Business Admininstration(Major in HRDM)</li>
                <li>Bachelor of Science in Business Admininstration(Operating Mgt)</li>
                <li>Bachelor of Science in Accountancy</li>
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
              header="Senior High Programs"
              header-border-variant="info"
              header-text-variant="black"
              align="center"
            >
            <b-col md="6">
              <img src="../assets/images/pic3.jpg" img-left class="rounded-0" />
            </b-col>
            <b-card-text>
              <u>Academic Track</u>
              <ul>
                <li>Accountancy, Business & Mgt(ABM)</li>
                <li>Humanities & Social Sciences</li>
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
              header="Senior High Programs"
              header-border-variant="info"
              header-text-variant="black"
              align="center"
            >
            <b-col md="6">
              <img src="../assets/images/pic3.jpg" img-left class="rounded-0" />
            </b-col>
            <b-card-text text-right>
              <u>Teach-Voc Livelihood Track</u>
              <ul>
                <li>Information & Communication Technology</li>
                <li>Industrial Arts</li>
                <li>Home Econimics</li>
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
        name: 'Course',
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
