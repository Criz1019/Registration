<template>
  <div class="main_container">
    <Header />
      <b-card
        overlay
        img-src="https://picsum.photos/900/250/?image=3"
        img-alt="Card Image"
        text-variant="white"
        title="Image Overlay"
        sub-title="Subtitle"
          >
            <b-card-text>
              <h2>Contact Us!</h2>
              <h3>1200 4th floor Savers Appliance, Rizal Ave East Tapinac, Olongapo City, Zambales</h3>
              <h4>Tel: +63(47)252-3335/www.comteq.edu.ph</h4>
            </b-card-text>
          </b-card>

              <!-- b-card for icons -->
              <div>
              <b-card-group deck>
              <b-card>
                <img src="../assets/images/vission_mission.png" img-alt="Image" class="medal" img-top />
                  <b-link to="/VissionMission">
                    Mission And Vission
                  </b-link>
              </b-card>

              <b-card>
                <img src="../assets/images/achievement.png" img-alt="Image" class="medal" img-top />
                <b-card-text>
                  <b-nav-item href="#1">Achievement</b-nav-item>
                </b-card-text>
              </b-card>

              <b-card>
                <img src="../assets/images/event.png" img-alt="Image" class="medal" img-top />
                <b-card-text>
                  <b-nav-item href="#1">Event</b-nav-item>
                </b-card-text>
              </b-card>
            </b-card-group>
          </div>

          <b-footer class="footer">

            <div>
              <h3>Developers!</h3>
                <p>Ms. Hasmin Cuevas - Project Manager</p>
                <p>Apid, Cristine Barrios</p>
                <p>Mariano, Renz Austin Delos Reyes</p>
                <p>Marty, John Christopher Lulu</p>
            </div>

            <div>
              <h3>Contact Us!</h3>
                <b-link href="https://www.facebook.com/comteqsbfz/?epa=SEARCH_BOX">
                  <img src="../assets/images/facebook.png" img-alt="Image" class="facebook_icon" img-top />
                </b-link>
                <p>1200 4th floor Savers Appliance, Rizal Ave</p>
                <p>East Tapinac, Olongapo City, Zambales</P>
                <p>Tel: +63(47)252-3335/www.comteq.edu.ph</p>
            </div>
              <p>
                Copyright &copy
                {{ getFullYear }}
                COMTEQ Computer & Business College.
              </p>
          </b-footer>

      </div>
</template>

<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    export default {
      name: 'About',
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
