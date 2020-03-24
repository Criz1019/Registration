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

              <!-- Slides with custom text -->
              <b-carousel-slide :img-src="require('../assets/images/Banner1.jpg')">
              </b-carousel-slide>

              <b-carousel-slide :img-src="require('../assets/images/Banner2.jpg') ">
                <h1>Basketball Tournament 2018</h1>
              </b-carousel-slide>

              <b-carousel-slide :img-src="require('../assets/images/Banner3.jpg') ">
              </b-carousel-slide>


            </b-carousel>
          </div>
          <!-- end of carousel -->

          <!-- start of cards -->
          <div class="vertical_cards_container">
            <b-card-group deck>
              <b-card class="homecard p-3" style="border-radius: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" title="Basta Computer Comteq!" img-alt="Image" img-top :img-src="require('../assets/images/HomeCard1.jpg') ">
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
              </b-card>

              <b-card class="homecard p-3"  style="border-radius: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" title="Enroll Now!" img-alt="Image" img-top :img-src="require('../assets/images/HomeCard2.jpg') ">
                <b-card-text>
                  <p>We are the New Creator. </br>
                    Develop and improve your talent. </br>
                    Enhance and perform your hidden skills.</p>
                </b-card-text>
              </b-card>

              <b-card class="homecard p-3"  style="border-radius: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" title="CPA's ba ang nais?" img-alt="Image" img-top :img-src="require('../assets/images/HomeCard3.jpg') ">
                <b-card-text>
                  <strong>This is your better Choice!</strong><br>
                    <p>CPAs with CORPORATE ACCOUNTING work experince and familiar with COMPUTER-BASED financial systems will be teaching Accounting Subjects.</p>
                </b-card-text>
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
                          Add instruction on how to avail the Atletics scholarship of the school. The steps and procedure hon how to became a  varcity player.
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


<script>
    import Header from "./OnlineRegHeader.vue";
    import Footer from "./OnlineRegFooter.vue";
    export default {
      name: 'OnlineRegHome',
      components:{
        Header,
        Footer
      },
        data() {
            return {
              // This data is for accordion(learn more)
              visible: false,
              slide: true,
              sliding: null,
            }
        },
        methods: {
            onSlideStart(slide) {
              this.sliding = true
            },
            onSlideEnd(slide) {
              this.sliding = false
            }
          },
        }
</script>
