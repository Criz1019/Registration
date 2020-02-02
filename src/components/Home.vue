<template>
    <div class="main_container">
      <Header />
      <div class="body_container">
          <!-- start of carousel -->
          <div class="carousel_container">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- Text slides with image -->
              <b-carousel-slide
                caption="First slide"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                img-src="https://picsum.photos/1024/480/?image=52"
              ></b-carousel-slide>

              <!-- Slides with custom text -->
              <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                <h1>Hello world!</h1>
              </b-carousel-slide>

              <!-- Slides with image only -->
              <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

              <!-- Slides with img slot -->
              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://picsum.photos/1024/480/?image=55"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>

              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                  a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                </p>
              </b-carousel-slide>
            </b-carousel>
          </div>
          <!-- end of carousel -->

          <!-- start of cards -->
          <div class="vertical_cards_container">
            <b-card-group deck>
              <b-card title="Basta Computer Comteq!" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                <b-card-text>
                  <strong>Be one of the:</strong>
                  <ul>
                    <li>Web Developer</li>
                    <li>Graphic Desiner</li>
                    <li>Photographer</li>
                    <li>Programmer</li>
                    <li>Web Designer</li>
                    <li>Film Maker</li>
                  </ul>
                </b-card-text>
                <template v-slot:footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>

              <b-card title="ENROLL NOW!" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                <b-card-text>
                  <strong>We are the New Creator</strong><br>
                  <strong>Develope and improve your talent.</strong><br>
                  <strong>Enhance and perform your hidden skills.</strong>
                </b-card-text>
              </b-card>

              <b-card title="CPA's ba ang nais?" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
                <b-card-text>
                  <strong>This is your better Choice!</strong><br>
                  <p>CPAs with CORPORATE ACCOUNTING work experince and familiar with COMPUTER-BASED financial systems will be teaching Accounting Subjects.</p>
                </b-card-text>
                <template v-slot:footer>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </template>
              </b-card>
            </b-card-group>
          </div> <!-- end of cards -->


          <!-- start of Horizontal Cards -->
          <div class="mt-4 horizontal_cards_container">
            <h2>SCHOLARSHIPS:</h2>
            <hr>
            <div class="accordion_container">
              <div role="tablist">

                <div class="accordion_cards">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button class="text-left" squared block href="#" v-b-toggle.accordion-1 variant="outline-dark">
                        <h4>Academic Scholars</h4>
                      </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text>
                          <h4>(100% FREE tuition)</h4>
                          <ol>
                            <strong>
                             <li>With Highest Honor: 98-100</li>
                             <li>With High Honors: 95-97</li>
                             <li>With Honors: 90-94</li>
                           </strong>
                          </ol>
                            <p>For Tertiary Education Subsidies, you will be evaluated first by Comteq College but final approval is with CHED.</p>
                            <p>For Financial Scholarships and subsidies, these will be sponsored by individuals and local or US companies affiliated with Comteq College.</p>
                            <p> These may be full or partial scholarships but will be based on a General Weighted Average of 87 or higher.</p>
                            <p> Also, the annual family gross income must be P200,000 or less.</p>
                            <p><i>Based on DepEd Order No. 36, s. 2016:</i></p>
                        </b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>

                <div class="accordion_cards">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button class="text-left" squared block href="#" v-b-toggle.accordion-2 variant="outline-dark">
                        <h4>Athletic Scholars</h4>
                      </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text>
                          Please input the condition of how to avail the Atletics scholarship of the school. The steps and procedure hon how to became a  varcity player.
                        </b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>

                <div class="accordion_cards">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-0" role="tab">
                      <b-button class="text-left" squared block href="#" v-b-toggle.accordion-3 variant="outline-dark">
                        <h4>Other Discounts</h4>
                      </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <b-card-text>
                          <ul>
                            <strong>
                             Other discounts offered.
                           </strong>
                         </ul>
                        </b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>
              </div>
            </div>
        </div>  <!-- end of Horizontal Cards -->
      </div> <!-- end of body_container -->
      <Footer />
    </div>
</template>
            <!-- <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
              <div class="btn_accordion">
                <b-card-text>
                  <h3>Academic Scholars</h3>
                  <h4>(100% FREE tuition)</h4>
                </b-card-text>

                  <b-button
                    :class="visible ? null : 'collapsed'"
                    :aria-expanded="visible ? 'true' : 'false'"
                    aria-controls="collapse-4"
                    @click="visible = !visible"
                  >
                    More details...
                  </b-button>
                  <b-collapse id="collapse-4" v-model="visible" class="mt-2">
                    <b-card>
                      <ol>
                        <strong>
                         <li>With Highest Honor: 98-100</li>
                         <li>With High Honors: 95-97</li>
                         <li>With Honors: 90-94</li>
                       </strong>
                      </ol>
                        <p>For Tertiary Education Subsidies, you will be evaluated first by Comteq College but final approval is with CHED.</p>
                        <p>For Financial Scholarships and subsidies, these will be sponsored by individuals and local or US companies affiliated with Comteq College.</p>
                        <p> These may be full or partial scholarships but will be based on a General Weighted Average of 87 or higher.</p>
                        <p> Also, the annual family gross income must be P200,000 or less.</p>
                        <h4>Based on DepEd Order No. 36, s. 2016:</h4>
                    </b-card>
                  </b-collapse>
                </div>
            </b-card>

            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
              <b-card-text>
                <h2>Atletics Scholars</h2>
              </b-card-text>

                <b-button
                  :class="visible ? null : 'collapsed'"
                  :aria-expanded="visible ? 'true' : 'false'"
                  aria-controls="collapse-4"
                  @click="visible = !visible"
                >
                  More details...
                </b-button>
                <b-collapse id="collapse-4" v-model="visible" class="mt-2">
                  <b-card>
                    sample data
                  </b-card>
                </b-collapse>
            </b-card>
          </div> -->





<!-- <b-body>


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

</b-body> -->


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
              // This data is for accordion(learn more)
              visible: false
            }
        },
        methods: {

            },

        }
</script>
