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


<!-- start of cards  -->
<!-- <div>
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
</div> -->

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
