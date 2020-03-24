<template>
  <div class="main_container">
    <Header />
    <div class="body_container">
      <div class="page_title">
        <h2 class="Ach_title">Comteq Events</h2>
      </div>
        <hr>
        <div class="accordion_container">
          <div role="tablist">

            <!-- Acquaintance Accordion -->
            <div class="accordion_cards">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                  <b-button v-on:click="isActive = !isActive" v-bind:class="{ active: isActive }"  squared block href="#" v-b-toggle.accordion-1 variant="outline-dark">
                    <h4>ACQUAINTANCE</h4>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">

                  <!--Acquaintance Gallery-->
                      <div class="gallery_cointainer">
                        <b-container fluid class="p-5 bg-dark" style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                          <b-row>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/1ACQ2019.jpg" alt="Image 1"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/2ACQ2019.jpg" alt="Image 2"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/3ACQ2019.jpg" alt="Image 3"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/4ACQ2019.jpg" alt="Image 4"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/5ACQ2019.jpg" alt="Image 5"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/6ACQ2019.jpg" alt="Image 6"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/7ACQ2019.jpg" alt="Image 7"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/8ACQ2019.jpg" alt="Image 8"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/9ACQ2019.jpg" alt="Image 9"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/10ACQ2019.jpg" alt="Image 10"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/11ACQ2019.jpg" alt="Image 11"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Acquaintance/12ACQ2019.jpg" alt="Image 12"></img>
                            </b-col>
                          </b-row>
                        </b-container>
                      </div>

                </b-collapse>
              </b-card>
            </div><!-- Acquaintance Accordion -->


            <!-- Buwan Nang Wika Accordion -->
            <div class="accordion_cards">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                  <b-button v-on:click="isActive = !isActive" v-bind:class="{ active: isActive }"  squared block href="#" v-b-toggle.accordion-2 variant="outline-dark">
                    <h4>BUWAN NANG WIKA</h4>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">

                  <!--Buwan Nang Wika Gallery-->
                      <div class="gallery_cointainer">
                        <b-container fluid class="p-5 bg-dark">
                          <b-row>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/1BNW2019.jpg" alt="Image 1"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/2BNW2019.jpg" alt="Image 2"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/3BNW2019.jpg" alt="Image 3"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/4BNW2019.jpg" alt="Image 4"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/5BNW2019.jpg" alt="Image 5"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/6BNW2019.jpg" alt="Image 6"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/7BNW2019.jpg" alt="Image 7"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/8BNW2019.jpg" alt="Image 8"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/9BNW2019.jpg" alt="Image 9"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/10BNW2019.jpg" alt="Image 10"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/11BNW2019.jpg" alt="Image 11"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/BNW/12BNW2019.jpg" alt="Image 12"></img>
                            </b-col>
                          </b-row>
                        </b-container>
                      </div>

                </b-collapse>
              </b-card>
            </div><!-- Buwan Nang Wika Accordion -->


            <!-- Sportsfest Accordion -->
            <div class="accordion_cards">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                  <b-button v-on:click="isActive = !isActive" v-bind:class="{ active: isActive }"  squared block href="#" v-b-toggle.accordion-3 variant="outline-dark">
                    <h4>SPORTSFEST</h4>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">

                  <!--Sportsfest Gallery-->
                      <div class="gallery_cointainer">
                        <b-container fluid class="p-5 bg-dark" style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                          <b-row>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/1SF2019.jpg" alt="Image 1"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/2SF2019.jpg" alt="Image 2"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/3SF2019.jpg" alt="Image 3"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/4SF2019.jpg" alt="Image 4"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/5SF2019.jpg" alt="Image 5"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/6SF2019.jpg" alt="Image 6"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/7SF2019.jpg" alt="Image 7"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/8SF2019.jpg" alt="Image 8"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/9SF2019.jpg" alt="Image 9"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/10SF2019.jpg" alt="Image 10"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/11SF2019.jpg" alt="Image 11"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/Sportsfest/12SF2019.jpg" alt="Image 12"></img>
                            </b-col>
                          </b-row>
                        </b-container>
                      </div>

                </b-collapse>
              </b-card>
            </div><!-- Sportsfest Accordion -->


            <!-- IT and Business fair Accordion -->
            <div class="accordion_cards">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-0" role="tab">
                  <b-button v-on:click="isActive = !isActive" v-bind:class="{ active: isActive }"  squared block href="#" v-b-toggle.accordion-4 variant="outline-dark">
                    <h4>IT AND BUSINESS FAIR</h4>
                  </b-button>
                </b-card-header>
                <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">

                  <!--IT and Business fair Gallery-->
                      <div class="gallery_cointainer">
                        <b-container fluid class="p-5 bg-dark" style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                          <b-row>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/IT&Business fair/1ITBF2019.jpg" alt="Image 1"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/IT&Business fair/2ITBF2019.jpg" alt="Image 2"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/IT&Business fair/3ITBF2019.jpg" alt="Image 3"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/IT&Business fair/4ITBF2019.jpg" alt="Image 4"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/IT&Business fair/5ITBF2019.jpg" alt="Image 5"></img>
                            </b-col>
                            <b-col>
                              <img class="event_img" thumbnail fluid src="../assets/images/Events/IT&Business fair/6ITBF2019.jpg" alt="Image 6"></img>
                            </b-col>
                          </b-row>
                        </b-container>
                      </div>

                </b-collapse>
              </b-card>
            </div><!-- IT and Business fair Accordion -->

          </div>
        </div> <!-- end of accordion_container -->
      </div> <!--body container end-->




    <Footer />
  </div>
</template>

<script>
import Header from "./OnlineRegHeader.vue";
import Footer from "./OnlineRegFooter.vue";
export default {
  name: "OnlineRegEvents",
  components: {
    Header,
    Footer
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
