<template>
  <div class="main_container">
    <Header />
      <div class="about_carousel">
        <b-card
          overlay
          :img-src="require('../assets/images/AboutBanner.jpg') "
          img-alt="Card Image"
          text-variant="white"
          title="Comteq Computer Business College"
          sub-title="Subtitle"
            >
          </b-card>

              <!-- b-card for icons -->
            <div class="about_cards">
                <b-card-group deck>

                  <b-card class="about_card">
                    <img src="../assets/images/vision_mission.png" img-alt="Image" class="medal" img-top />
                      <b-link to="/VisionMission">
                        Mission And Vision
                      </b-link>
                  </b-card>

                <b-card class="about_card">
                  <img src="../assets/images/achievement.png" img-alt="Image" class="medal" img-top />
                  <b-card-text>
                    <b-link to="/Achievements">
                      School Achievements
                    </b-link>
                  </b-card-text>
                </b-card>

                <b-card class="about_card">
                  <img src="../assets/images/event.png" img-alt="Image" class="medal" img-top />
                  <b-link to="/Events">
                    School Events
                  </b-link>
                </b-card>
              </b-card-group>
          </div>

        </div>
      <Footer />
    </div>
</template>

<script>
    import Header from "./OnlineRegHeader.vue";
    import Footer from "./OnlineRegFooter.vue";
    export default {
      name: 'OnlineRegAbout',
      components:{
        Header,
        Footer
      },
        data() {
            return {
              // This data is for accordion(learn more)
              visible: false,
              slide: true,
              sliding: null,
            }
        },
        methods: {
          onSlideStart(slide) {
            this.sliding = true
          },
          onSlideEnd(slide) {
            this.sliding = false
            }
          },
        }
</script>
