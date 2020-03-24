<template>

  <b-footer class="footer-top">
    <div class="container">
      <div class="row">

          <div class="col-md-3 col-sm 6 col xs-12 segment-one">
            <h3>Developers!</h3>
              <p>Ms. Hasmin Cuevas - Project Manager</p>
              <p>Apid, Cristine Barrios</p>
              <p>Mariano, Renz Austin Delos Reyes</p>
              <p>Marty, John Christopher Lulu</p>
          </div>

          <div class="col-md-3 col-sm 6 col xs-12 segment-one">
            <h3>Contact Us!</h3>
              <p>1200 4th floor Savers Appliance, Rizal Ave</p>
              <p>East Tapinac, Olongapo City, Zambales</P>
              <p>Tel: +63(47)252-3335/www.comteq.edu.ph</p>
          </div>

          <div class="col-md-3 col-sm 6 col xs-12 segment-one">
              <p>
                Copyright &copy
                {{ getFullYear }}
                COMTEQ Computer & Business College.
              </p>
          </div>

          <div>
            <b-link href="https://www.facebook.com/comteqsbfz/?epa=SEARCH_BOX">
              <img src="../assets/images/facebook.png" img-alt="Image" class="facebook_icon" img-top />
            </b-link>
          </div>

        </div>
      </div>
    </b-footer>
</template>


<script>
    export default {
        name: 'Footer',
        data() {
            return {
              getFullYear : new Date().getFullYear()
            }
        },

        methods: {

            },

        }
</script>
