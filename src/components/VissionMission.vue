<template>
  <div class="main_container">
    <div class="body_container">
      <div class="page_title">
        <h2>College Courses Offered</h2>
      </div>

      <hr>

      <!-- Courses container -->
      <div class="course_container">
        <div class="course_title">
          <h3>Computer Courses</h3>
        </div>
        <div class="course_body">
          <div class="course_card">
            <b-card class="">
              <b-card-text>
                <h4>Bachelor of Science in Information Technology (BSIT)</h4>
                <p>
                  A Bachelor of Science in Information Technology, (abbreviated BSIT or B.Sc IT), is a Bachelor's degree awarded for an undergraduate course or program in the Information technology field. The degree is normally required in order to work in the Information technology industry.

                  A Bachelor of Science in Information Technology degree program typically takes three to four years depending on the country. This degree is primarily focused on subjects such as software, databases, and networking. In general, computer science degrees tend to focus on the mathematical and theoretical foundations of computing rather than emphasizing specific technologies. The degree is a Bachelor of Science degree with institutions conferring degrees in the fields of information technology and related fields. This degree is awarded for completing a program of study in the field of software development, software testing, software engineering, web design, databases, programming, computer networking and computer systems.
                </p>
              </b-card-text>
            </b-card>
          </div>

          <div class="course_card">
            <b-card>
              <b-card-text>
                <h4>Bachelor of Science in Computer Science (BSCS)</h4>
                <p>
                  The Bachelor of Computer Science or Bachelor of Science in Computer Science (abbreviated BCompSc or BCS or BS CS or B.Sc. CS) is a type of bachelor's degree, usually awarded after three or four years of collegiate study in computer science, but possibly awarded in fewer years depending on factors such as an institution's course requirements and academic calendar. In some cases it can be awarded in five years. In general, computer science degree programs emphasize the mathematical and theoretical foundations of computing.
                </p>
              </b-card-text>
            </b-card>
          </div>

          <div class="course_card">
            <b-card>
              <b-card-text>
                <h4>Associate in Computer Technology (ACT)</h4>
                <p>
                  The Associate in Computer Technology (ACT) provides students with the basic skills and knowledge required in the field of computer science, information systems, and information technology. It serves as a foundation for baccalaureate programs in computer science and information technology.
                </p>
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>

      <div class="course_container">
        <div class="course_title">
          <h3>Business Courses</h3>
        </div>
        <div class="course_body">
          <div class="course_card">
            <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-right>
              <b-card-text>
                <h4>Bachelor of Science in Business Management (BSBA-OPM)</h4>
                <h5><i>Major in Operations Management</i></h5>
                <p>
                  The Bachelor of Science in Business Administration major in Operations Management is a four-year degree program designed to equip students with relevant knowledge and necessary skills in product development and distribution. The program focuses heavily on the internal processes that consist of manufacturing and service operations. Students will then learn the organizational strategy as a whole, from planning, scheduling, layout, purchasing, inventory, and quality control. BSBA in Operations Management majors will learn to efficiently allocate budget in production operations.
                </p>
              </b-card-text>
            </b-card>
          </div>
          <div class="course_card">
            <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-right>
              <b-card-text>
                <h4>Bachelor of Science in Business Management (BSBA-HRDM)</h4>
                <h5><i>Major in Human Resource Development Management</i></h5>
                <p>
                  The BSBA course, with Human Resource Development Management as its major, aims to prepare the graduates for a career in the specialized field of Human Resource Management which are essentially found in the manufacturing and marketing areas and related services basically established in industries such as pharmaceutical, semi-conductor, food and beverage, banking industries and other types of organizations.
                </p>
              </b-card-text>
            </b-card>
          </div>
          <div class="course_card">
            <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-right>
              <b-card-text>
                <h4>Bachelor of Science in Accountancy (BSA)</h4>
                <p>
                  The Bachelor of Science in Accountancy (BSA) program is a five-year program focused on subjects in financial, public, and managerial accounting, auditing, administration, business laws, and taxation. The program also teaches students to integrate information technology concepts into business systems, to create a more systematic and organized way of storing business-related data. Aside from business topics, BSA also equips students with a basic understanding of computer programming and auditing systems.
                </p>
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
import Footer from "./Footer.vue";
export default {
  name: "VissionMission",
  components: {
    Footer
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
