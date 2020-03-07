<template>
  <div class="main_container">
    <Header />
    <div class="body_container">
      <div class="page_title">
        <h2>About Us! </h2>
      </div>
      <hr>
      <!-- Courses container -->
      <div class="vm_container">
        <div class="course_title">
          <h3>COMTEQ COLLEGE IS BUILT AROUND A SET OF CORE VALUES:</h3>
        </div>
        <div class="vm_body">
          <div class="vm_card">
            <b-card class="">
              <b-card-text>
                <h4>Our Vission</h4>
                <p>
                  COMTEQ will be the leader in the use of real-work environment as an effective training method in developing world class Filipino I.T. professionals nationwide.
                </p>
              </b-card-text>
            </b-card>
          </div>

          <div class="vm_card">
            <b-card>
              <b-card-text>
                <h4>Our Mission</h4>
                <p>
                  We commit ourselves to continuously develop curricula and training methods that will fully satisfy the recent and anticipated training needs of Filipino students in the fast-advancing Information Technology industry.
                </p>
              </b-card-text>
            </b-card>
          </div>

          <div class="vm_card">
            <b-card>
              <b-card-text>
                <h4>Our Products</h4>
                  <p>Our products are graduates of information technology and business courses, electronics and computer technologists, and highly-trained tourism workers which impart high-levels of skills, values-orientation, good communication and presentation abilities, and good command of the English language.</p>
              </b-card-text>
            </b-card>
          </div>

          <div class="vm_card">
            <b-card>
              <b-card-text>
                <h4>Our Training Method</h4>
                  <p>In addition to theoretical learning in lecture rooms, COMTEQ maintains on-the-job training facilities in-house and employs a Dualized mode of training to provide students with actual training in real-work environment.
                    Members of the faculty handling major subjects are 90% industry-based to ensure up-to-date and high-quality education.
                    The students are molded by: a) providing them the necessary hands-on skills training in an actual shop; b) teaching them the values that successful individuals must possess; and c) developing their personalities and English communication skills.</p>
              </b-card-text>
            </b-card>
          </div>

          <div class="vm_card">
            <b-card>
              <b-card-text>
                <h4>Corporate Values</h4>
                  <p>Continual Improvement: We continually improve our facilities, course contents, teaching methods, and equipment, to ensure that our students keep up with the latest technological advances.</p>
                  <p>On-The-Job Training Emphasis: We place a high value in the use of on-the-job training, as the primary medium for imparting technical competence.</p>
                  <p>Modern Modes of Instruction: We believe that learning is a two-way street, thus, we actively promote modern participatory methods of instruction as tools for enhancing confidence levels and subject retention in our students.</p>
                  <p>Total quality education: We impart Filipino values in each of our students, a sense of social responsibility, positive attitude, and English communications skills to allow them to utilize their technical proficiency to the fullest.</p>
                  <p>Excellence: We ensure technical excellence in our graduates by providing them with the best mix of theoretical instruction and intensive on-the-job training at our in-house facilities.</p>
                  <p>Quality Service: We ensure quality service in an atmosphere of harmony through an empowered staff, and by instilling in our staff and students alike, the positive traits of mutual respect and cooperation.</p>
              </b-card-text>
            </b-card>
          </div>

        </div>
      </div>
      <!-- end of Courses container -->

    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./OnlineRegHeader.vue";
import Footer from "./OnlineRegFooter.vue";
export default {
  name: "OnlineRegVissionMission",
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
