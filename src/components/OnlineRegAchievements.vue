<template>
  <div class="main_container">
    <Header />
      <div class="body_container">
        <div class="page_title">
          <h2 class="Ach_title">Comteq Computer and Business College</h2>
        </div>
          <hr>

            <div class="carousel_container">
              <div class="course_title">
                <h3>School Achievements</h3>
              </div>
              <hr>
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
                <b-carousel-slide :img-src="require('../assets/images/Banner1.jpg') ">
                </b-carousel-slide>

              </b-carousel>
            </div>

            <!-- 2nd carousel -->
            <div class="page_title">
              <h3>Academic and Skills Competition</h3>
            </div>
            <hr>
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

                    <b-carousel-slide img-height="480" :img-src="require('../assets/images/Banner3.jpg') ">
                    </b-carousel-slide>

                  </b-carousel>
                </div>


                <!-- 3rd carousel -->
                <div class="page_title">
                  <h3>Sports Competition</h3>
                </div>
                <hr>
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
                        <b-carousel-slide img-height="480" :img-src="require('../assets/images/Banner2.jpg') ">
                          <h1>Basketball Tournament 2018</h1>
                        </b-carousel-slide>

                      </b-carousel>
                    </div>
                </div>
            <Footer />
          </div>
        </template>

<script>
import Header from "./OnlineRegHeader.vue";
import Footer from "./OnlineRegFooter.vue";
export default {
  name: "OnlineRegAchievements",
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
