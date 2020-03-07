<template>
  <div class="main_container">
    <Header />
      <div class="about_carousel">
        <b-card
          overlay
          img-src="https://picsum.photos/900/250/?image=3"
          img-alt="Card Image"
          text-variant="white"
          title="Image Overlay"
          sub-title="Subtitle"
            >
          </b-card>

              <!-- b-card for icons -->
            <div class="about_cards">
                <b-card-group deck>

                  <b-card class="about_card">
                    <img src="../assets/images/vission_mission.png" img-alt="Image" class="medal" img-top />
                      <b-link to="/VissionMission">
                        Mission And Vission
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
              visible: false
            }
        },
        methods: {

            },
        }
</script>
