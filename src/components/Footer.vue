<template>
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
</template>

<!-- <div class="pull-right">
  <img src="../assets/images/comteq_logo1.png" id="ComteqLogo" alt="ComteqLogo" class="responsive"/>

  <p>copyright@Comteq Computer and Business College</p>

    </div>
        <div>
          <p>Developers!</p>
          <p>Mrs. Hasmin Cuevas</p>
          <p>Project Manager</p>
        </div>

        <div>
          <p>Apid Cristine</p>
          <p>Mariano Renz Austin</p>
          <p>Marty John Christopher</p>
        </div>

        <div>
          <p>1200 4th floor Savers Appliance, Rizal Ave</p>
          <p>East Tapinac, Olongapo City, Zambales</P>
          <p>Tel: +63(47)252-3335/www.comteq.edu.ph</p>
        </div> -->
      </div>

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
