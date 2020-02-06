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
