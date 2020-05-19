<template>
  <div class="main_container">
    <Header />

        <ul class="progressbar d-print-none">
            <li class="active">Student Information</li>
            <li id="PersonalInformation">Personal Information</li>
            <li id="ParentsInformation" >Parents Information</li>
         </ul>


      <br/>


      <!-- Student Information -->
      <div class="container">
        <transition name="fade">
          <div id="" class="mx-3 mb-4 p-4 bg-white shadow rounded" v-if="StudentInfoshowForm">
            <b-alert variant="success"
                :show="dismissSuccessCountDown"
                @dismissed="dismissSuccessCountDown=0"
                dismissible fade>
                  {{alertMessage}}
              </b-alert>
              <b-alert variant="danger"
                :show="dismissErrorCountDown"
                @dismissed="dismissErrorCountDown=0"
                dismissible fade>
                  <p>{{alertMessage}}</p>
                  <ul>
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
              </b-alert>
          <div class=" h5 font-weight-bold text-dark text-center">Student Information</div>
          <hr/>
          <div class="">
            <b-form-row>

              <b-col cols="12" md="6" lg="3">
                <b-form-group
                  class="lastname"
                  label="Last Name"
                  label-for="lastName">
                  <b-form-input
                    type="text"
                    v-model="Students.last_name"
                    id="lastName"
                    :state="last_name_state"
                    aria-describedby="last_name-feedback">
                  </b-form-input>
                  <b-form-invalid-feedback id="last_name-feedback">
                    Last name is required!
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="6" lg="3">
                <b-form-group
                  class="firstname"
                  label="First Name"
                  label-for="firstName">
                  <b-form-input
                    type="text"
                    v-model="Students.first_name"
                    id="firstName"
                    :state="first_name_state"
                    aria-describedby="first_name-feedback">
                  </b-form-input>
                  <b-form-invalid-feedback id="first_name-feedback">
                    First name is required!
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="6" lg="3">
                <b-form-group
                  class="middlename"
                  label="Middle Name"
                  label-for="middleName">
                  <b-form-input
                    type="text"
                    v-model="Students.middle_name"
                    id="middleName">
                  </b-form-input>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="6" lg="3">
                <b-form-group
                  class="suffixname"
                  label="Suffix Name"
                  label-for="suffixName">
                  <b-form-input
                    type="text"
                    v-model="Students.suffix_name"
                    id="suffixName">
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>

            <b-form-row>
              <b-col cols="12" md="6" lg="6">
                <b-form-group
                  class="schoollastattended"
                  label="School Last Attended"
                  label-for="schoolLastAttended">
                  <b-form-input
                    type="text"
                    v-model="Students.school_last_attended"
                    id="schoolLastAttended"
                    :state="school_last_attended_state"
                    aria-describedby="school_last_attended-feedback">
                  </b-form-input>
                  <b-form-invalid-feedback id="school_last_attended-feedback">
                    School last attended is required!
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

                <b-col cols="12" md="6" lg="6">
                  <b-form-group
                    class="schooladdress"
                    label="School Address"
                    label-for="schoolAddress">
                    <b-form-input
                      type="text"
                      v-model="Students.school_address"
                      id="schoolAddress"
                      :state="school_address_state"
                      aria-describedby="school_address-feedback">
                    </b-form-input>
                    <b-form-invalid-feedback id="school_address-feedback">
                      School Address is required!
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

              </b-form-row>

              <b-form-row>

                <b-col cols="12" md="6" lg="6">
                  <b-form-group
                    class="universitycollege"
                    label="University / College (for transferee)"
                    label-for="universityCollege">
                    <b-form-input
                      type="text"
                      v-model="Students.college_last_attended"
                      id="universityCollege">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                  <b-col cols="12" md="6" lg="6">
                    <b-form-group
                      class="universicyaddress"
                      label="University Address"
                      label-for="universityAddress">
                      <b-form-input
                        type="text"
                        v-model="Students.college_address"
                        id="universityAddress">
                      </b-form-input>
                    </b-form-group>
                  </b-col>

                </b-form-row>

                <b-form-row>
                  <b-col>
                    <b-button variant="danger" @click="ClearStudentFields">
                      cancel
                    </b-button>
                  </b-col>
                  <b-col class="d-flex justify-content-end">
                    <b-button variant="primary" @click="showPersonalInfoForm">
                      Next
                    </b-button>
                  </b-col>
                </b-form-row>

              </div>
          </div>
        </transition>
      </div>
      <!-- Student Information -->

      <!-- personal Information -->
      <div class="container">
        <transition name="fade">
        <div id="" class="mx-3 mb-4 p-4 bg-white shadow rounded"  v-if="PersonalInfoshowForm">
        <div class=" h5 font-weight-bold text-dark text-center">Personal Information</div>
        <hr/>
        <div class="">
          <b-form-row>
            <b-col cols="12" md="6" lg="5">
              <b-form-group
                class="presentaddress"
                label="Present Address ( House No./Lot No./Bldg No./Street )"
                label-for="presentAddress">
                <b-form-input
                  type="text"
                  v-model="Students.address"
                  id="presentAddress"
                  :state="present_address_state"
                  aria-describedby="present_address-feedback">
                </b-form-input>
                <b-form-invalid-feedback id="present_address-feedback">
                  Present Address is required!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="2">
              <b-form-group
                class="barangay"
                label="Barangay / Subdivision"
                label-for="Barangay">
                <b-form-input
                  type="text"
                  v-model="Students.barangay"
                  id="Barangay"
                  :state="barangay_state"
                  aria-describedby="barangay-feedback">
                </b-form-input>
                <b-form-invalid-feedback id="barangay-feedback">
                  Barangay is required!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="2">
              <b-form-group
                class="citymunicipality"
                label="City / Municipality"
                label-for="cityMunicipality">
                <b-form-input
                  type="text"
                  v-model="Students.city"
                  id="cityMunicipality"
                  :state="cityMunicipality_state"
                  aria-describedby="cityMunicipality-feedback">
                </b-form-input>
                <b-form-invalid-feedback id="cityMunicipality-feedback">
                  City / Municipality is required!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="2">
              <b-form-group
                class="province"
                label="Province"
                label-for="Province">
                <b-form-input
                  type="text"
                  v-model="Students.province"
                  id="Province"
                  :state="province_state"
                  aria-describedby="province-feedback">
                </b-form-input>
                <b-form-invalid-feedback id="province-feedback">
                  Province is required!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="1">
              <b-form-group
                class="postalcode"
                label="Postal Code"
                label-for="postalCode">
                <b-form-input
                  type="text"
                  v-model="Students.postal"
                  id="postalCode"
                  :state="postalCode_state"
                  aria-describedby="postalCode-feedback">
                </b-form-input>
                <b-form-invalid-feedback id="postalCode-feedback">
                  Postal code is required!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
          </b-form-row>

          <b-form-row>
            <b-col cols="12" md="6" lg="3">
              <b-form-group
                class="birthdate"
                label="Birth Date"
                label-for="birthDate">
                <datepicker
                  v-model="Students.birth_date"
                  id="birthDate"
                  :clear-button="true"
                  :calendar-button="true"
                  :calendar-button-icon="calendarIcon"
                  :bootstrap-styling="true"
                  :format="birthDateFormat"
                  :state="birthDate_state"
                  aria-describedby="birthDate-feedback">
                </datepicker>
                <b-form-invalid-feedback id="birthDate-feedback">
                  Birthdate is required!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="2">
              <b-form-group
                class="gender"
                label="Gender"
                label-for="Gender">
                <b-form-select
                  v-model="Students.gender"
                  :options="genderOptions"
                  :state="gender_state"
                  aria-describedby="gender-feedback">
                </b-form-select>
                <b-form-invalid-feedback id="gender-feedback">
                  Gender is required!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="4">
              <b-form-group
                class="emailaddress"
                label="Email Address"
                label-for="emailAddress">
                <b-form-input
                  type="email"
                  v-model="Students.email"
                  id="emailAddress"
                  required>
                </b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="3">
              <b-form-group
                class="cellphoneno"
                label="Cellphone No."
                label-for="cellphoneNo">
                <b-form-input
                  type="number"
                  v-model="Students.cellphone"
                  id="cellphoneNo"
                  :state="cellphone_state"
                  aria-describedby="cellphone-feedback">
                </b-form-input>
                <b-form-invalid-feedback id="cellphone-feedback">
                  Cellphone number is required!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="5">
              <b-form-group
                class="placeofbirth"
                label="Place of Birth"
                label-for="placeofBirth">
                <b-form-input
                  type="text"
                  v-model="Students.birth_place"
                  id="placeofBirth"
                  :state="placeofBirth_state"
                  aria-describedby="placeofBirth-feedback">
                </b-form-input>
                <b-form-invalid-feedback id="placeofBirth-feedback">
                  Place of birth is required!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="2">
              <b-form-group
                class="citizenship"
                label="Citizenship"
                label-for="citizenShip">
                <b-form-input
                  type="text"
                  v-model="Students.citizenship"
                  id="citizenShip"
                  :state="citizenShip_state"
                  aria-describedby="citizenShip-feedback">
                </b-form-input>
                <b-form-invalid-feedback id="citizenShip-feedback">
                  Citizenship is required!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="2">
              <b-form-group
                class="civilstatus"
                label="Civil Status"
                label-for="civilStatus">
                <b-form-input
                  type="text"
                  v-model="Students.civil_status"
                  id="civilStatus"
                  :state="civilStatus_state"
                  aria-describedby="civilStatus-feedback">
                </b-form-input>
                <b-form-invalid-feedback id="civilStatus-feedback">
                  Civil status is required!
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="3">
              <b-form-group
                class="telephoneno"
                label="Telephone No."
                label-for="telephoneNo">
                <b-form-input
                  type="text"
                  v-model="Students.telephone"
                  id="telephoneNo"
                  required>
                </b-form-input>
              </b-form-group>
            </b-col>

            </b-form-row>

            <b-form-row>

              <b-col>
                <b-button variant="danger" @click="backStudentInfoForm">
                  Previous
                </b-button>
              </b-col>
              <b-col class="d-flex justify-content-end">
                <b-button variant="primary" @click="showParentsInfoForm">
                  Next
                </b-button>
              </b-col>

              </b-form-row>
        </div>
      </div>
      </transition>

          </div>
            <!--/personal Information -->


            <!-- Parents Information -->
          <div class="container">
            <transition name="fade">
              <div id="" class="mx-3 mb-4 p-4 bg-white shadow rounded" v-if="ParentsInfoshowForm">
              <div class=" h5 font-weight-bold text-dark text-center">Parents Information</div>
              <hr/>
              <div class="">
                <b-form-row>
                  <b-col cols="12" md="6" lg="6">
                    <b-form-group
                      class="fathersname"
                      label="Father's Name:"
                      label-for="fathersName">
                      <b-form-input
                        type="text"
                        v-model="Students.father_name"
                        id="fathersName"
                        :state="fathersName_state"
                        aria-describedby="father_name-feedback">
                      </b-form-input>
                      <b-form-invalid-feedback id="father_name-feedback">
                        Father's name is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="6">
                    <b-form-group
                      class="mothersname"
                      label="Mother's Name:"
                      label-for="mothersName">
                      <b-form-input
                        type="text"
                        v-model="Students.mother_name"
                        id="mothersName"
                        :state="mothersName_state"
                        aria-describedby="mother_name-feedback">
                      </b-form-input>
                      <b-form-invalid-feedback id="mother_name-feedback">
                        Mother's name is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>
                </b-form-row>

                <hr>
                  <div class=" h5 font-weight-bold text-dark text-center">Guardian Information</div>
                <hr>

                <b-form-row>
                  <b-col cols="12" md="6" lg="4">
                    <b-form-group
                      class="guardianname"
                      label="Guardian's Name:"
                      label-for="guardianName">
                      <b-form-input
                        type="text"
                        v-model="Students.contact_person"
                        id="guardianName"
                        :state="guardianName_state"
                        aria-describedby="guardianName-feedback">
                      </b-form-input>
                      <b-form-invalid-feedback id="guardianName-feedback">
                        Guardian's name is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="4">
                    <b-form-group
                      class="contactaddress"
                      label="Contact Address:"
                      label-for="contactAddress">
                      <b-form-input
                        type="text"
                        v-model="Students.contact_address"
                        id="contactAddress"
                        :state="guardianContactAddress_state"
                        aria-describedby="contact_address-feedback">
                      </b-form-input>
                      <b-form-invalid-feedback id="contact_address-feedback">
                        Contact address is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                <b-col cols="12" md="6" lg="4">
                  <b-form-group
                    class="contactnumber"
                    label="Contact Number"
                    label-for="contactNumber">
                    <b-form-input
                      type="number"
                      v-model="Students.contact_number"
                      id="contactNumber"
                      :state="guardianContactNumber_state"
                      aria-describedby="contact_number-feedback">
                    </b-form-input>
                    <b-form-invalid-feedback id="contact_number-feedback">
                      Contact number is required!
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
            </b-form-row>

                  <b-form-row>
                    <b-col>
                      <b-button variant="danger" @click="backPersonalInfoForm">
                        Previous
                      </b-button>
                    </b-col>
                    <b-col class="d-flex justify-content-end">
                      <b-button variant="primary" @click="ShowAllInfoForm">
                        Finish
                      </b-button>
                    </b-col>
                    </b-form-row>
              </div>
            </div>
          </transition>
        </div>
        <!-- Parents Information -->
      <div class="container" >
        <transition name="fade">
          <div id="" class="mx-3 mb-4 p-4 bg-white shadow rounded" v-if="ShowAllInfoshowForm">
            <!-- <center>
              <img src="../assets/comteq_logo.png" alt="Comteq Logo" class="responsive d-none d-print-block" id="ComteqLogoPrint"/>
            </center> -->
            <b-form-row class="d-none d-print-block">
                <center>
                  <h4>COMTEQ Computer & Business College</h4>
                  <h5>1200 4th floor Savers Appliance Depot, Rizal Ave, East Tapinac Olongapo City Zambales. </h5>
              </center>
            </b-form-row>
            <b-form-row class="d-print-none">
              <b-col class="py-4">
                <!-- Add New Room Button -->
                <b-button variant="primary" onclick="window.print()">
                  Print
                </b-button>
              </b-col>
            </b-form-row>
          <div class=" h5 font-weight-bold text-dark text-center">Student Information</div>
          <hr/>
          <div class="">
            <b-form-row>

              <b-col cols="12" md="6" lg="3">
                <b-form-group
                  class="lastname"
                  label="Last Name"
                  label-for="lastName">
                  <b-form-input
                    type="text"
                    v-model="Students.last_name"
                    id="lastName"
                    :state="last_name_state"
                    aria-describedby="last_name-feedback"
                    :disabled="information_disable">
                  </b-form-input>
                  <b-form-invalid-feedback id="last_name-feedback">
                    Last name is required!
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="6" lg="3">
                <b-form-group
                  class="firstname"
                  label="First Name"
                  label-for="firstName">
                  <b-form-input
                    type="text"
                    v-model="Students.first_name"
                    id="firstName"
                    :state="first_name_state"
                    aria-describedby="first_name-feedback"
                    :disabled="information_disable">
                  </b-form-input>
                  <b-form-invalid-feedback id="first_name-feedback">
                    First name is required!
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="6" lg="3">
                <b-form-group
                  class="middlename"
                  label="Middle Name"
                  label-for="middleName">
                  <b-form-input
                    type="text"
                    v-model="Students.middle_name"
                    id="middleName"
                    :disabled="information_disable">
                  </b-form-input>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="6" lg="3">
                <b-form-group
                  class="suffixname"
                  label="Suffix Name"
                  label-for="suffixName">
                  <b-form-input
                    type="text"
                    v-model="Students.suffix_name"
                    id="suffixName"
                    :disabled="information_disable">
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>

            <b-form-row>
              <b-col cols="12" md="6" lg="6">
                <b-form-group
                  class="schoollastattended"
                  label="School Last Attended"
                  label-for="schoolLastAttended">
                  <b-form-input
                    type="text"
                    v-model="Students.school_last_attended"
                    id="schoolLastAttended"
                    :state="school_last_attended_state"
                    aria-describedby="school_last_attended-feedback"
                    :disabled="information_disable">
                  </b-form-input>
                  <b-form-invalid-feedback id="school_last_attended-feedback">
                    School last attended is required!
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

                <b-col cols="12" md="6" lg="6">
                  <b-form-group
                    class="schooladdress"
                    label="School Address"
                    label-for="schoolAddress">
                    <b-form-input
                      type="text"
                      v-model="Students.school_address"
                      id="schoolAddress"
                      :state="school_address_state"
                      aria-describedby="school_address-feedback"
                      :disabled="information_disable">
                    </b-form-input>
                    <b-form-invalid-feedback id="school_address-feedback">
                      School Address is required!
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

              </b-form-row>

              <b-form-row>

                <b-col cols="12" md="6" lg="6">
                  <b-form-group
                    class="universitycollege"
                    label="University / College (for transferee)"
                    label-for="universityCollege">
                    <b-form-input
                      type="text"
                      v-model="Students.college_last_attended"
                      id="universityCollege"
                      :disabled="information_disable">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                  <b-col cols="12" md="6" lg="6">
                    <b-form-group
                      class="universicyaddress"
                      label="University Address"
                      label-for="universityAddress">
                      <b-form-input
                        type="text"
                        v-model="Students.college_address"
                        id="universityAddress"
                        :disabled="information_disable">
                      </b-form-input>
                    </b-form-group>
                  </b-col>

                </b-form-row>
              </div>

              <div class=" h5 font-weight-bold text-dark text-center">Personal Information</div>
              <hr/>
              <div class="">
                <b-form-row>
                  <b-col cols="12" md="6" lg="5">
                    <b-form-group
                      class="presentaddress"
                      label="Present Address ( House No./Lot No./Bldg No./Street )"
                      label-for="presentAddress">
                      <b-form-input
                        type="text"
                        v-model="Students.address"
                        id="presentAddress"
                        :state="present_address_state"
                        aria-describedby="present_address-feedback"
                        :disabled="information_disable">
                      </b-form-input>
                      <b-form-invalid-feedback id="present_address-feedback">
                        Present Address is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="2">
                    <b-form-group
                      class="barangay"
                      label="Barangay / Subdivision"
                      label-for="Barangay">
                      <b-form-input
                        type="text"
                        v-model="Students.barangay"
                        id="Barangay"
                        :state="barangay_state"
                        aria-describedby="barangay-feedback"
                        :disabled="information_disable">
                      </b-form-input>
                      <b-form-invalid-feedback id="barangay-feedback">
                        Barangay is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="2">
                    <b-form-group
                      class="citymunicipality"
                      label="City / Municipality"
                      label-for="cityMunicipality">
                      <b-form-input
                        type="text"
                        v-model="Students.city"
                        id="cityMunicipality"
                        :state="cityMunicipality_state"
                        aria-describedby="cityMunicipality-feedback"
                        :disabled="information_disable">
                      </b-form-input>
                      <b-form-invalid-feedback id="cityMunicipality-feedback">
                        City / Municipality is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="2">
                    <b-form-group
                      class="province"
                      label="Province"
                      label-for="Province">
                      <b-form-input
                        type="text"
                        v-model="Students.province"
                        id="Province"
                        :state="province_state"
                        aria-describedby="province-feedback"
                        :disabled="information_disable">
                      </b-form-input>
                      <b-form-invalid-feedback id="province-feedback">
                        Province is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="1">
                    <b-form-group
                      class="postalcode"
                      label="Postal Code"
                      label-for="postalCode">
                      <b-form-input
                        type="text"
                        v-model="Students.postal"
                        id="postalCode"
                        :state="postalCode_state"
                        aria-describedby="postalCode-feedback"
                        :disabled="information_disable">
                      </b-form-input>
                      <b-form-invalid-feedback id="postalCode-feedback">
                        Postal code is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>
                </b-form-row>

                <b-form-row>
                  <b-col cols="12" md="6" lg="3">
                    <b-form-group
                      class="birthdate"
                      label="Birth Date"
                      label-for="birthDate">
                      <datepicker
                        v-model="Students.birth_date"
                        id="birthDate"
                        :clear-button="true"
                        :calendar-button="true"
                        :calendar-button-icon="calendarIcon"
                        :bootstrap-styling="true"
                        :format="birthDateFormat"
                        :state="birthDate_state"
                        aria-describedby="birthDate-feedback"
                        :disabled="information_disable">
                      </datepicker>
                      <b-form-invalid-feedback id="birthDate-feedback">
                        Birthdate is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="2">
                    <b-form-group
                      class="gender"
                      label="Gender"
                      label-for="Gender">
                      <b-form-select
                        v-model="Students.gender"
                        :options="genderOptions"
                        :state="gender_state"
                        aria-describedby="gender-feedback"
                        :disabled="information_disable">
                      </b-form-select>
                      <b-form-invalid-feedback id="gender-feedback">
                        Gender is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="4">
                    <b-form-group
                      class="emailaddress"
                      label="Email Address"
                      label-for="emailAddress">
                      <b-form-input
                        type="email"
                        v-model="Students.email"
                        id="emailAddress"
                        :disabled="information_disable">
                      </b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="3">
                    <b-form-group
                      class="cellphoneno"
                      label="Cellphone No."
                      label-for="cellphoneNo">
                      <b-form-input
                        type="number"
                        v-model="Students.cellphone"
                        id="cellphoneNo"
                        :state="cellphone_state"
                        aria-describedby="cellphone-feedback"
                        :disabled="information_disable">
                      </b-form-input>
                      <b-form-invalid-feedback id="cellphone-feedback">
                        Cellphone number is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="5">
                    <b-form-group
                      class="placeofbirth"
                      label="Place of Birth"
                      label-for="placeofBirth">
                      <b-form-input
                        type="text"
                        v-model="Students.birth_place"
                        id="placeofBirth"
                        :state="placeofBirth_state"
                        aria-describedby="placeofBirth-feedback"
                        :disabled="information_disable">
                      </b-form-input>
                      <b-form-invalid-feedback id="placeofBirth-feedback">
                        Place of birth is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="2">
                    <b-form-group
                      class="citizenship"
                      label="Citizenship"
                      label-for="citizenShip">
                      <b-form-input
                        type="text"
                        v-model="Students.citizenship"
                        id="citizenShip"
                        :state="citizenShip_state"
                        aria-describedby="citizenShip-feedback"
                        :disabled="information_disable">
                      </b-form-input>
                      <b-form-invalid-feedback id="citizenShip-feedback">
                        Citizenship is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="2">
                    <b-form-group
                      class="civilstatus"
                      label="Civil Status"
                      label-for="civilStatus">
                      <b-form-input
                        type="text"
                        v-model="Students.civil_status"
                        id="civilStatus"
                        :state="civilStatus_state"
                        aria-describedby="civilStatus-feedback"
                        :disabled="information_disable">
                      </b-form-input>
                      <b-form-invalid-feedback id="civilStatus-feedback">
                        Civil status is required!
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="3">
                    <b-form-group
                      class="telephoneno"
                      label="Telephone No."
                      label-for="telephoneNo">
                      <b-form-input
                        type="text"
                        v-model="Students.telephone"
                        id="telephoneNo"
                        :disabled="information_disable">
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                </b-form-row>
              </div>


          <div class=" h5 font-weight-bold text-dark text-center">Parents Information</div>
          <hr/>
          <div class="">
            <b-form-row>
              <b-col cols="12" md="6" lg="6">
                <b-form-group
                  class="fathersname"
                  label="Father's Name:"
                  label-for="fathersName">
                  <b-form-input
                    type="text"
                    v-model="Students.father_name"
                    id="fathersName"
                    :state="fathersName_state"
                    aria-describedby="father_name-feedback"
                    :disabled="information_disable">
                  </b-form-input>
                  <b-form-invalid-feedback id="father_name-feedback">
                    Father's name is required!
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="6" lg="6">
                <b-form-group
                  class="mothersname"
                  label="Mother's Name:"
                  label-for="mothersName">
                  <b-form-input
                    type="text"
                    v-model="Students.mother_name"
                    id="mothersName"
                    :state="mothersName_state"
                    aria-describedby="mother_name-feedback"
                    :disabled="information_disable">
                  </b-form-input>
                  <b-form-invalid-feedback id="mother_name-feedback">
                    Mother's name is required!
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-form-row>

            <hr>
              <div class=" h5 font-weight-bold text-dark text-center">Guardian Information</div>
            <hr>

            <b-form-row>
              <b-col cols="12" md="6" lg="4">
                <b-form-group
                  class="guardianname"
                  label="Guardian's Name:"
                  label-for="guardianName">
                  <b-form-input
                    type="text"
                    v-model="Students.contact_person"
                    id="guardianName"
                    :state="guardianName_state"
                    aria-describedby="guardianName-feedback"
                    :disabled="information_disable">
                  </b-form-input>
                  <b-form-invalid-feedback id="guardianName-feedback">
                    Guardian's name is required!
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

              <b-col cols="12" md="6" lg="4">
                <b-form-group
                  class="contactaddress"
                  label="Contact Address:"
                  label-for="contactAddress">
                  <b-form-input
                    type="text"
                    v-model="Students.contact_address"
                    id="contactAddress"
                    :state="guardianContactAddress_state"
                    aria-describedby="contact_address-feedback"
                    :disabled="information_disable">
                  </b-form-input>
                  <b-form-invalid-feedback id="contact_address-feedback">
                    Contact address is required!
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>

                <b-col cols="12" md="6" lg="4">
                  <b-form-group
                    class="contactnumber"
                    label="Contact Number"
                    label-for="contactNumber">
                    <b-form-input
                      type="number"
                      v-model="Students.contact_number"
                      id="contactNumber"
                      :state="guardianContactNumber_state"
                      aria-describedby="contact_number-feedback"
                      :disabled="information_disable">
                    </b-form-input>
                    <b-form-invalid-feedback id="contact_number-feedback">
                      Contact number is required!
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col>
                  <b-button variant="danger" @click="backParentInfoForm">
                    Previous
                  </b-button>
                </b-col>
                <b-col class="d-flex justify-content-end">
                  <b-button variant="primary" @click="RegStudents">
                    Register
                  </b-button>
                </b-col>
                </b-form-row>
              </div>
            </div>
        </transition>
      </div>

      <Footer class="d-print-none" />
    </div>
</template>


<script>
import Axios from "axios";
import moment from 'moment';
import Datepicker from 'vuejs-datepicker';
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue';
import Header from "./OnlineRegHeader.vue";
import Footer from "./OnlineRegFooter.vue";

  export default {
    name: 'OnlineRegRegister',
    components:{
      Header,
      Footer,
      Datepicker,
      VueTimepicker,
    },

data() {
  return {
    Students: {
      id: null,
      student_number: null,
      first_name: null,
      middle_name: null,
      last_name: null,
      suffix_name: null,
      gender: null,
      civil_status: null,
      citizenship:null,
      address: null,
      barangay: null,
      city: null,
      postal: null,
      province: null,
      telephone: null,
      cellphone: 0,
      email: null,
      birth_date: null,
      birth_place: null,
      father_name: null,
      mother_name: null,
      contact_person: null,
      contact_address: null,
      contact_number: 0,
      blood_type: null,
      photo_url: null,
      user_id: null,
      school_last_attended: null,
      school_address: null,
      college_last_attended: null,
      college_address: null,
      active: 1,

    },

    alertMessage: "",
    errors: [],
    dismissSecs: 7,
    dismissSuccessCountDown: 0,
    dismissErrorCountDown: 0,
    updateSuccessCountDown: 0,
    updateErrorCountDown: 0,

    genderOptions: [
        {value: 'Male', text: 'Male'},
        {value: 'Female', text: 'Female'}
      ],

      StudentStatusOptions: [
        {value: 'Old', text: 'Old'},
        {value: 'New', text: 'New'},
        {value: 'Transferee', text: 'Transferee'}
      ],

      AcademicStatusOptions: [
        {value: 'Regular', text: 'Regular'},
        {value: 'Irregular', text: 'Irregular'}
      ],

      calendarIcon: "fa fa-calendar",
      birthDateFormat: "MMM dd, yyyy",

      StudentInfoshowForm: true,
      PersonalInfoshowForm: false,
      ParentsInfoshowForm: false,
      ShowAllInfoshowForm: false,
      information_disable: true,

      last_name_state: null,
      first_name_state: null,
      school_last_attended_state: null,
      school_address_state: null,
      present_address_state: null,
      barangay_state: null,
      cityMunicipality_state: null,
      province_state: null,
      postalCode_state: null,
      birthDate_state: null,
      gender_state: null,
      cellphone_state: null,
      placeofBirth_state: null,
      citizenShip_state: null,
      civilStatus_state: null,
      fathersName_state: null,
      mothersName_state: null,
      guardianName_state: null,
      guardianContactAddress_state: null,
      guardianContactNumber_state: null,

  }
},

methods: {


  backPersonalInfoForm: function(){
    this.PersonalInfoshowForm = true;
    this.ParentsInfoshowForm = false;
  },

  backStudentInfoForm: function(){
    this.StudentInfoshowForm = true;
    this.PersonalInfoshowForm = false;
  },

  backParentInfoForm: function(){
    this.ShowAllInfoshowForm = false;
    this.showParentsInfoForm = true;
  },

  showPersonalInfoForm: function(){
        var checker;

        // last name
        if (this.Students.last_name == null || this.Students.last_name == "" ) {
            this.last_name_state = false;
            checker = true;
        } else {
          this.last_name_state = null;
        }

        // first Name
        if (this.Students.first_name == null || this.Students.first_name == "") {
            this.first_name_state = false,
            checker = true;
        } else {
          this.first_name_state = null;
        }

        // school last Attended
        if (this.Students.school_last_attended == null || this.Students.school_last_attended == "") {
            this.school_last_attended_state = false;
            checker = true;
        } else {
          this.school_last_attended_state = null
        }

        // school Address
        if (this.Students.school_address == null || this.Students.school_address =="") {
            this.school_address_state = false;
            checker = true;
        } else {
          this.school_address_state = null;
        }

        if (checker) {

        } else {
          this.StudentInfoshowForm = false;
          this.PersonalInfoshowForm = true;
          var element = document.getElementById("PersonalInformation");
          element.classList.add("active");
        }

      },

      showParentsInfoForm: function(){
        var checker;

        // Present Address
        if (this.Students.address == null || this.Students.address == "") {
            this.present_address_state = false;
            checker = true;
        } else {
          this.present_address_state = null;
        }

        // Barangay
        if (this.Students.barangay == null || this.Students.barangay == "") {
            this.barangay_state = false,
            checker = true;
        } else {
          this.barangay_state = null;
        }

        // City / Municipality
        if (this.Students.city == null || this.Students.city == "") {
            this.cityMunicipality_state = false;
            checker = true;
        } else {
          this.cityMunicipality_state = null
        }

        // Province
        if (this.Students.province == null || this.Students.province == "") {
            this.province_state = false;
            checker = true;
        } else {
          this.province_state = null;
        }

        // Postal
        if (this.Students.postal == null || this.Students.postal == "") {
            this.postalCode_state = false;
            checker = true;
        } else {
          this.postalCode_state = null;
        }

        // Birthdate
        if (this.Students.birth_date == null || this.Students.birth_date == "") {
            this.birthDate_state = false;
            checker = true;
        } else {
          this.birthDate_state = null;
        }

        // Gender
        if (this.Students.gender == null || this.Students.gender == "") {
            this.gender_state = false;
            checker = true;
        } else {
          this.gender_state = null;
        }

        // Cellphone Number
        if (this.Students.cellphone == null || this.Students.cellphone == "") {
            this.cellphone_state = false;
            checker = true;
        } else {
          this.cellphone_state = null;
        }

        // Place of Birth
        if (this.Students.birth_place == null || this.Students.birth_place == "") {
            this.placeofBirth_state = false;
            checker = true;
        } else {
          this.placeofBirth_state = null;
        }

        // Citizenship
        if (this.Students.citizenship == null || this.Students.citizenship == "") {
            this.citizenShip_state = false;
            checker = true;
        } else {
          this.citizenShip_state = null;
        }

        // Civilstatus
        if (this.Students.civil_status == null || this.Students.civil_status == "") {
            this.civilStatus_state = false;
            checker = true;
        } else {
          this.civilStatus_state = null;
        }

        if (checker) {

        } else {
          this.ParentsInfoshowForm = true;
          this.PersonalInfoshowForm = false;
          var element = document.getElementById("ParentsInformation");
          element.classList.add("active");
        }

      },



  RegStudents: function(){
        var checker;
        // father's name
        if (this.Students.father_name == null || this.Students.father_name == "") {
            this.fathersName_state = false;
            checker = true;
        } else {
          this.fathersName_state = null;
        }

        // mother's Name
        if (this.Students.mother_name == null || this.Students.mother_name == "") {
          this.mothersName_state = false;
          checker = true;
        } else {
          this.mothersName_state = null;
        }

        // Guardian Name
        if (this.Students.contact_person == null || this.Students.contact_person == "") {
            this.guardianName_state = false;
            checker = true
        } else {
          this.guardianName_state = null;
        }

        // Guardian address
        if (this.Students.contact_address == null || this.Students.contact_address == "") {
            this.guardianContactAddress_state = false;
            checker = true;
        } else {
          this.guardianContactAddress_state = null;
        }

        // Guardian Name
        if (this.Students.contact_number == 0 || this.Students.contact_number == "") {
            this.guardianContactNumber_state = false;
            checker = true;
        } else {
          this.guardianContactNumber_state = null;
        }

        if (checker) {

        } else {
          Axios
            .post('http://localhost/api/v1/students', this.Students, {
              headers: {'Authorization': 'Bearer ' + this.$store.getters.getToken}
            })
            .then(response => {
              console.log(response.data);
              this.alertMessage = "New student record successfully created.";
              this.ParentsInfoshowForm = false;
              this.ClearStudentFields();
              this.StudentInfoshowForm = true;
              this.dismissSuccessCountDown = this.dismissSecs;
            })
            .catch(error => {
              this.alertMessage = error.response.data.message;
              const values = Object.values(error.response.data.errors);
              for(const val of values){
                for(const err of val){
                  this.errors.push(err);
                }
              }
              this.dismissErrorCountDown = this.dismissSecs;
            })
        }

      },

      ClearStudentFields: function(){
        this.Students = {
          student_number: null,
          first_name: null,
          middle_name: null,
          last_name: null,
          suffix_name: null,
          gender: null,
          civil_status: null,
          citizenship:null,
          address: null,
          barangay: null,
          city: null,
          postal: null,
          province: null,
          telephone: null,
          cellphone: null,
          email: null,
          birth_date: null,
          birth_place: null,
          father_name: null,
          mother_name: null,
          contact_person: null,
          contact_address: null,
          contact_number: 0,
          blood_type: null,
          photo_url: null,
          user_id: null,
          school_last_attended: null,
          school_address: null,
          college_last_attended: null,
          college_address: null,
          active: 1,
        };

        this.last_name_state = null;
        this.first_name_state = null;
        this.school_last_attended_state= null;
        this.school_address_state = null;
        this.present_address_state = null;
        this.barangay_state = null;
        this.cityMunicipality_state = null
        this.province_state = null;
        this.postalCode_state = null;
        this.birthDate_state = null;
        this.gender_state = null;
        this.placeofBirth_state = null;
        this.cellphone_state = null;
        this.citizenShip_state = null;
        this.civilStatus_state = null;
        this.fathersName_state = null;
        this.mothersName_state = null;
        this.guardianName_state = null;
        this.guardianContactAddress_state = null;
        this.guardianContactNumber_state = null;
      },

      ShowAllInfoForm: function(){
        this.ShowAllInfoshowForm = true;
        this.ParentsInfoshowForm = false;
      }

    }
  }
</script>
<style media="Print">
  @page{
    size: landscape;
  }
</style>
