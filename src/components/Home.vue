<template>
    <div class="main_container">
      <Header />
      <b-body>

<!-- Deck Cards -->
        <div>
           <b-card-group deck>
             <b-card border-variant="warning">
               <img src="../assets/images/medal.png" img-alt="Image" class="medal" img-top />
               <b-card-text>
                 No Tuition Fee! with FREE (2 Sets of Uniform)
               </b-card-text>
               <b-button variant="info">More Info...</b-button>
             </b-card>

             <b-card border-variant="warning">
               <img src="../assets/images/medal.png" img-alt="Image" class="medal" img-top />
               <b-card-text>
                 No Top-Up! 100% FREE Tuition for Senior High
               </b-card-text>
              <b-button variant="info">More Info...</b-button>
             </b-card>

             <b-card border-variant="warning">
               <img src="../assets/images/medal.png" img-alt="Image" class="medal" img-top />
               <b-card-text>
                 Without HONORS? No Worries you have Discount!
               </b-card-text>
                <b-button variant="info">More Info...</b-button>
             </b-card>
           </b-card-group>
         </div>

         <div>
           <b-card no-body class="overflow-hidden">
             <b-row no-gutters>
               <b-col md="6">
                 <img src="../assets/images/pic3.jpg" class="rounded-0" />
               </b-col>
               <b-col md="6">
                 <b-card-body title="Enroll Now!">
                   <b-card-text>
                     We are the New Creator, enhance and perform your hidden skills. Develope and improve your talent.
                   </b-card-text>
                 </b-card-body>
               </b-col>
             </b-row>
           </b-card>
         </div>

         <div>
           <b-card no-body class="overflow-hidden">
             <b-row no-gutters>
               <b-col md="6">
                 <img src="../assets/images/tesda5.jpg" class="rounded-0" />
               </b-col>
               <b-col md="6">
                 <b-card-body title="Basta Computer Comteq!">
                   <b-card-text>
                     Do you want to be one of the profesional Web Developer, Graphic Desiner, Photograper, Programmer, Web Designer or a Film Maker?
                   </b-card-text>
                 </b-card-body>
               </b-col>
             </b-row>
           </b-card>
         </div>

         <div>
           <b-card no-body class="overflow-hidden">
             <b-row no-gutters>
               <b-col md="6">
                 <img src="../assets/images/mv.jpg" class="rounded-0" />
               </b-col>
               <b-col md="6">
                 <b-card-body title="COMTEQ!">
                   <b-card-text>
                     This is a BETTER CHOICE
                   </b-card-text>
                 </b-card-body>
               </b-col>
             </b-row>
           </b-card>
         </div>

      </b-body>
      <Footer />
    </div>
</template>


<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    export default {
      name: 'Home',
      components:{
        Header,
        Footer
      },
        data() {
            return {

            }
        },
        methods: {

            },

        }
</script>
