<template>
  <div class="main_container">
    <Header />
      Events
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
