<template>
  <div class="main_container">
    <Header />
    <div class="body_container">
      <h2>College Admission Info</h2>
      <hr>
      <div class="accordion_container">
        <div role="tablist">

          <!-- requirements Accordion-->
          <div class="accordion_cards">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button v-on:click="isActive = !isActive" v-bind:class="{ active: isActive }"  squared block href="#" v-b-toggle.accordion-1 variant="outline-dark">
                  <h4>Requirments</h4>
                </b-button>
              </b-card-header>
              <b-collapse class="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card>
                    <b-card-text>
                      <h3>For New Students</h3>
                      <em>
                        <ul>
                          <li>Good Moral</li>
                          <li>PSA Birth Certificate(Photocopy)</li>
                          <li>Form 137 / Form 138</li>
                          <li>Two(2)pcs 2x2 Picture</li>
                          <li>One(1) Long Brown Envelope</li>
                          <li>One(1) Long Brown Folder</li>
                        </ul>
                      </em>
                    </b-card-text>
                  </b-card>
                  <br>
                  <b-card>
                    <b-card-text>
                      <h3>For Transferees</h3>
                      <em>
                        <ul>
                          <li>Transcript of Records</li>
                          <li>Certificate of Transfer / Honorable Dismissal</li>
                          <li>Good Moral</li>
                          <li>PSA Birth Certificate(Photocopy)</li>
                          <li>Form 137 / Form 138</li>
                          <li>Two(2)pcs 2x2 Picture</li>
                          <li>One(1) Long Brown Envelope</li>
                          <li>One(1) Long Brown Folder</li>
                      </ul>
                    </em>
                    </b-card-text>
                  </b-card>

                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <!-- requirements -->
          <!-- procedure -->
          <div class="accordion_cards">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button v-on:click="isActive = !isActive" v-bind:class="{ active: isActive }"  squared block href="#" v-b-toggle.accordion-2 variant="outline-dark">
                  <h4>Procedure</h4>
                </b-button>
              </b-card-header>
              <b-collapse class="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card>
                    <b-card-text>
                      <h3>Step By Step Procedure</h3>
                      <em>
                        <ul>
                          <li>Step 1</li>
                            <strong>Fill up form</strong>
                              <p>Fill Up the form provided by the system.</p>
                          <li>Step 2</li>
                            <strong>Registrar's Office</strong>
                              <p>Personaly Go to school for the submission of Admission Requirement needs and assurance of Registration Forms.</p>
                          <li>Step 3</li>
                            <strong>Coordinator/ Department Head</strong>
                              <p>The coordinators will give you advice schedule or subject load that you can or need to enrolled.</p>
                          <li>Step 4</li>
                            <strong>Accounting Office</strong>
                              <p>For Assessment of Fees</p>
                          <li>Step 5</li>
                            <strong>Cashier's Office</strong>
                              <p>For payments and other Fees.</p>
                          <li>Step 6</li>
                            <strong>Registrars Office</strong>
                              <p>Assurance of final Enrolment and schedule, stamped enrolled.</p>
                      </ul>
                    </em>
                    </b-card-text>
                  </b-card>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <!-- procedure -->
        </div>
      </div> <!-- end of accordion_container -->
    </div> <!-- end of body_container -->
    <Footer />
  </div> <!-- end of main_container -->

</template>

<script>
import Header from "./OnlineRegHeader.vue";
import Footer from "./OnlineRegFooter.vue";
    export default {
        name: 'OnlineRegAdmissionCollege',
        components:{
          Header,
          Footer
        },

        data() {
            return {
              isActive: false
            }
        },
        methods: {

        },

        }
</script>
