<template>
      <b-footer>
        <div class="footer-area">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="single-footer">
                  <h3>Developers!</h3>
                    <p>Ms. Hasmin Cuevas</p>
                    <p> Project Manager</p>
                    <p>Apid, Cristine Barrios</p>
                    <p>Mariano, Renz Austin Delos Reyes</p>
                    <p>Marty, John Christopher Lulu</p>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="single-footer">
                  <h3>Contact Us!</h3>
                    <p>1200 4th floor Savers Appliance, Rizal Ave</p>
                    <p>East Tapinac, Olongapo City, Zambales</P>
                    <p>Tel: +63(47)252-3335/www.comteq.edu.ph</p>
                  </div>
              </div>


              <div class="col-md-3 col-sm-6">
                <div class="single-footer">
                    <p>
                    Copyright &copy
                    {{ getFullYear }}
                    COMTEQ Computer & Business College.
                    </p>
                      <P>
                        <b-link href="https://www.facebook.com/comteqsbfz/?epa=SEARCH_BOX">
                          <img src="../assets/images/facebook.png" img-alt="Image" class="facebook_icon" img-top />
                        </b-link>
                      </P>
                      <P>
                      <b-link href="#" to="/Home">
                        <img src="../assets/comteq_logo.png" img-alt="Image" class="comteq_logo" img-top />
                      </b-link>
                    </P>
                  </div>
                </div>
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
