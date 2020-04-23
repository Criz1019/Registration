<template>

  <footer class="footer-top">
    <div class="container">
      <div class="row">

          <div class="col-md-3 col-sm 6 col xs-12 segment-one">
            <h3>Developers!</h3>
            <hr>
              <p>Ms. Hasmin Cuevas <br> Project Manager</p>
              <p>Apid, Cristine Barrios<br>
              Mariano, Renz Austin Delos Reyes<br>
              Marty, John Christopher Lulu</p>
          </div>

          <div class="col-md-3 col-sm 6 col xs-12 segment-one">
            <h3>About Us!</h3>
            <hr>
            <img src="../assets/images/address_icon.png" img-alt="Image" class="icon" img-top />
              <p class="address">1200 4th floor Savers Appliance, Rizal Ave, East Tapinac, Olongapo City, Zambales</P>
            <img src="../assets/images/contact_icon.jpg" img-alt="Image" class="icon" img-top />
              <p>Tel: +63(47)252-3335</p>
          </div>

          <div>
            <h3>Media Account!</h3>
            <hr>
            <b-link href="https://www.facebook.com/comteqsbfz/?epa=SEARCH_BOX">
              <img src="../assets/images/facebook.png" img-alt="Image" class="icon" img-top />
            </b-link>

            <b-link href="http://comteq.edu.ph/wp/">
              <img src="../assets/images/wordpress.png" img-alt="Image" class="icon" img-top />
            </b-link>
          </div>


          <div>
              <strong>
                Copyright &copy
                {{ getFullYear }}
                COMTEQ Computer & Business College
              </strong>
          </div>

        </div>
      </div>
    </footer>
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
