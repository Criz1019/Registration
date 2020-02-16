<template>
  <div class="main">
  <Header />
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-4 col-12">
         <b-card-group deck>
           <b-card>
             <b-card-text>
               1 CHOOSE
             </b-card-text>
             <b-card-text>
              CHOOSE Your Course/Major
             </b-card-text>
           </b-card>

           <b-card>
             <b-card-text>
               2 FILL UP
             </b-card-text>
             <b-card-text>
               FILL UP the form below
             </b-card-text>
           </b-card>

           <b-card>
             <b-card-text>
               3 SUBMIT
             </b-card-text>
             <b-card-text>
               SUBMIT your form
             </b-card-text>
           </b-card>
         </b-card-group>
       </div>
    </div>


  <!-- 1st form -->
      <div>
      <b-card bg-variant="light">

        <b-card-text>
          PERSONAL INFORMATION
        </b-card-text>

          <b-form-group
            label-cols-sm="3"
            label="Family Name:"
            label-align-sm="right"
            label-for="familyname"
            >
            <b-form-input id="famname"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="First Name:"
            label-align-sm="right"
            label-for="fname"
            >
            <b-form-input id="fname"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Middle Name:"
            label-align-sm="right"
            label-for="mname"
            >
            <b-form-input id="mname"></b-form-input>
          </b-form-group>

            <!-- <b-label>Student Status:</b-label>
            <b-dropdown border variant="outline-default">
              <b-dropdown-item>Old</b-dropdown-item>
              <b-dropdown-item>New</b-dropdown-item>
            </b-dropdown> -->

              <b-form-group
                label-cols-sm="3"
                label="Birthdate:"
                label-align-sm="right"
                label-for="bdate"
                >
                <b-form-input id="bdate"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Birth Place:"
                label-align-sm="right"
                label-for="bplace"
                >
                <b-form-input id="bplace"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Blood Type:"
                label-align-sm="right"
                label-for="btype"
                >
                <b-form-input id="btype"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Contact Number:"
                label-align-sm="right"
                label-for="number"
                >
                <b-form-input id="number"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Civil Status:"
                label-align-sm="right"
                label-for="cstatus"
                >
                <b-form-input id="cstatus"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Email Address:"
                label-align-sm="right"
                label-for="email"
                >
                <b-form-input id="email"></b-form-input>
              </b-form-group>

              <b-dropdown text="Gender" variant="outline-default" class="m-10">
                <b-dropdown-item>Male</b-dropdown-item>
                <b-dropdown-item>Female</b-dropdown-item>
              </b-dropdown>

              <b-form-group label="Level">
                <b-form-radio v-model="selected" name="some-radios" value="A">College</b-form-radio>
                <b-form-radio v-model="selected" name="some-radios" value="B">Senior High</b-form-radio>
              </b-form-group>

          </b-card>
        </div>

<!-- 2nd form -->
        <div>
          <b-card bg-variant="light">

              <b-form-group
                label-cols-sm="3"
                label="Address:"
                label-align-sm="right"
                label-for="address"
                >
                <b-form-input id="address"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Baranngay:"
                label-align-sm="right"
                label-for="brgy"
                >
                <b-form-input id="brgy"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="City/Municipality:"
                label-align-sm="right"
                label-for="city"
                >
                <b-form-input id="city"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Province:"
                label-align-sm="right"
                label-for="province"
                >
                <b-form-input id="province"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="School Last Attended:"
                label-align-sm="right"
                label-for="lastattended"
                >
                <b-form-input id="lastattended"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="School Address:"
                label-align-sm="right"
                label-for="Saddress"
                >
                <b-form-input id="Saddress"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Baranngay:"
                label-align-sm="right"
                label-for="Sbrgy"
                >
                <b-form-input id="Sbrgy"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="City/Municipality:"
                label-align-sm="right"
                label-for="Scity"
                >
                <b-form-input id="Scity"></b-form-input>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Province:"
                label-align-sm="right"
                label-for="Sprovince"
                >
                <b-form-input id="Sprovince"></b-form-input>
              </b-form-group>


<!-- Parents Information -->

            <b-card-text>
              PARENTS INFORMATION
            </b-card-text>

            <b-form-group
              label-cols-sm="3"
              label="Fathers Name:"
              label-align-sm="right"
              label-for="fathersname"
              >
              <b-form-input id="fathersname"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Contact Number:"
              label-align-sm="right"
              label-for="fcontact"
              >
              <b-form-input id="fcontact"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Mothers Name:"
              label-align-sm="right"
              label-for="mothername"
              >
              <b-form-input id="mothername"></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Contact Number:"
              label-align-sm="right"
              label-for="mcontact"
              >
              <b-form-input id="mcontact"></b-form-input>
            </b-form-group>

          </b-card>
        </div>
      </div>
    <Footer />
  </div>
</template>


<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

    export default {
        name: 'Register',
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
