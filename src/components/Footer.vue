<template>
  <b-footer class="footer">
    <p>
      Copyright &copy
      <!-- Displays the current year (YYYY)  -->
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
