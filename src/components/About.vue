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
