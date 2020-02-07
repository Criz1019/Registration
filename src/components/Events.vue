<template>
  <div class="main_container">
    <Header />

      <!-- Acquaintance -->
      <div class="gallery_cointainer">
        <div class="page_title">
          <h2>Acquaintance</h2>
        </div>
        <b-container fluid class="p-4 bg-dark">
          <b-row>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>


      <!-- Buwan Nang Wika -->
      <div class="gallery_cointainer">
        <div class="page_title">
          <h2>Buwan Nang Wika</h2>
        </div>
        <b-container fluid class="p-4 bg-dark">
          <b-row>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <!-- Sportsfest -->
      <div class="gallery_cointainer">
        <div class="page_title">
          <h2>Sportsfest</h2>
        </div>
        <b-container fluid class="p-4 bg-dark">
          <b-row>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <!-- IT and Business fair-->
      <div class="gallery_cointainer">
        <div class="page_title">
          <h2>IT and Business fair  </h2>
        </div>
        <b-container fluid class="p-4 bg-dark">
          <b-row>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
            <b-col>
              <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>


    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: "Events",
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
