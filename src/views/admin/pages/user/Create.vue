<template>
  <div id="staff-create-section" class="create-section mt-5">
    <form @submit.prevent="editMode ? update() : save()">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <!-- id-->
            <div v-if="editMode" class="mb-3 row">
              <label for="first-name" class="col-sm-2 col-form-label">ID:
                {{ form.id_number }}
              </label>
            </div>
            <!-- fast name-->
            <div class="mb-3 row">
              <label for="first-name" class="col-sm-2 col-form-label has-error">First Name <span
                  class="text-danger">*</span></label>
              <div class="col-sm-10">
                <input required :class="{ 'is-invalid': errors['name'] }" v-model="form.name"
                       type="text" class="form-control" id="first-name">
                <div v-if="errors['name']" class="invalid-feedback">
                  {{ errors['name'][0] }}
                </div>
              </div>
            </div>
            <!-- last name-->
            <div class="mb-3 row">
              <label for="last-name" class="col-sm-2 col-form-label">Last Name</label>
              <div class="col-sm-10">
                <input :class="{ 'is-invalid': errors['last_name'] }" v-model="form.last_name"
                       type="text" class="form-control"
                       id="last-name">
                <div v-if="errors['last_name']" class="invalid-feedback">
                  {{ errors['last_name'][0] }}
                </div>
              </div>
            </div>
            <!-- age -->
            <div class="mb-3 row">
              <label class="col-sm-2 col-form-label">Age</label>
              <div class="col-sm-10">
                <div class="row align-items-center">
                  <div class="col">
                    <input :class="{ 'is-invalid': errors['date_of_year'] }"
                           v-model="form.date_of_year" type="number" class="form-control">
                    <div v-if="errors['date_of_year']" class="invalid-feedback">
                      {{ errors['date_of_year'][0] }}
                    </div>
                  </div>
                  <div class="col">
                    <label>Year</label>
                  </div>
                  <div class="col">
                    <select :class="{ 'is-invalid': errors['date_of_month'] }"
                            v-model="form.date_of_month" id="" class="form-control">
                      <option :value="month" v-for="month in months">{{ month }}</option>
                    </select>
                    <div v-if="errors['date_of_month']" class="invalid-feedback">
                      {{ errors['date_of_month'][0] }}
                    </div>
                  </div>
                  <div class="col">
                    <label>Month</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- mobile -->
            <div class="mb-3 row">
              <label for="phone" class="col-sm-2 col-form-label">Mobile <span class="text-danger">*</span></label>
              <div class="col-sm-10">
                <input required :class="{ 'is-invalid': errors['phone'] }" v-model="form.phone"
                       type="number"
                       class="form-control" id="phone">
                <div v-if="errors['phone']" class="invalid-feedback">
                                    <span v-for="errors_phone in errors['phone']">
                                        {{ errors_phone }}
                                    </span>
                </div>
              </div>
            </div>
            <!-- email -->
            <div class="mb-3 row">
              <label for="email" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input :class="{ 'is-invalid': errors['email'] }" v-model="form.email" type="text"
                       class="form-control" id="email">
                <div v-if="errors['email']" class="invalid-feedback">
                  {{ errors['email'][0] }}
                </div>
              </div>
            </div>
            <!-- address -->
            <div class="mb-3 row">
              <label for="address" class="col-sm-2 col-form-label">Address</label>
              <div class="col-sm-10">
                <input :class="{ 'is-invalid': errors['address'] }" v-model="form.address" type="text"
                       class="form-control" id="address">
                <div v-if="errors['address']" class="invalid-feedback">
                  {{ errors['address'][0] }}
                </div>
              </div>
            </div>
            <!-- gender -->
            <div class="mb-3 row">
              <label for="address" class="col-sm-2 col-form-label">Gender</label>
              <div class="col-sm-10">
                <div class="form-check form-check-inline">
                  <input :class="{ 'is-invalid': errors['gender'] }" v-model="form.gender"
                         class="form-check-input" type="radio"
                         name="genderOptions" id="genderMale"
                         value="Male">
                  <label class="form-check-label" for="genderMale">Male</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :class="{ 'is-invalid': errors['gender'] }" v-model="form.gender"
                         class="form-check-input" type="radio"
                         name="genderOptions" id="genderFemale"
                         value="Female">
                  <label class="form-check-label" for="genderFemale">Female</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :class="{ 'is-invalid': errors['gender'] }" v-model="form.gender"
                         class="form-check-input" type="radio"
                         name="genderOptions" id="genderOther"
                         value="Other">
                  <label class="form-check-label" for="genderOther">Other</label>
                </div>
                <div v-if="errors['gender']" class="invalid-feedback">
                  {{ errors['gender'][0] }}
                </div>
              </div>
            </div>
            <!-- blood group -->
            <div class="mb-3 row">
              <label for="blood_group" class="col-sm-2 col-form-label">Blood Group</label>
              <div class="col-sm-10">
                <select :class="{ 'is-invalid': errors['blood_group'] }" v-model="form.blood_group"
                        class="form-control" id="blood_group">
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                <div v-if="errors['blood_group']" class="invalid-feedback">
                  {{ errors['blood_group'][0] }}
                </div>
              </div>
            </div>
            <!-- salary -->
            <div class="mb-3 row">
              <label for="salary" class="col-sm-2 col-form-label">Salary</label>
              <div class="col-sm-10">
                <input :class="{ 'is-invalid': errors['salary'] }" v-model="form.salary" type="number"
                       class="form-control" id="salary">
                <div v-if="errors['salary']" class="invalid-feedback">
                  {{ errors['salary'][0] }}
                </div>
              </div>
            </div>
            <!-- salary -->
            <div v-if="$root.$can('staff', 'staff-commission')" class="mb-3 row">
              <label for="commission" class="col-sm-2 col-form-label">Commission</label>
              <div class="col-sm-6">
                <input :class="{ 'is-invalid': errors['commission'] }" v-model="form.commission"
                       type="number"
                       class="form-control" id="commission">
                <div v-if="errors['commission']" class="invalid-feedback">
                  {{ errors['commission'][0] }}
                </div>
              </div>
              <div class="col-sm-2 mt-2">%</div>
            </div>
            <!-- doctor_opening -->
            <div class="mb-3 row">
              <label for="doctor_opening" class="col-sm-2 col-form-label">Doctor Opening</label>
              <div class="col-sm-10">
                <input :class="{ 'is-invalid': errors['doctor_opening'] }"
                       placeholder="Sat:to Thu:5:30 PM to 9:30 PM"
                       value="Sat:to Thu:5:30 PM to 9:30 PM"
                       v-model="form.doctor_opening" type="text" class="form-control"
                       id="doctor_opening"/>
                <div v-if="errors['doctor_opening']" class="invalid-feedback">
                  {{ errors['doctor_opening'][0] }}
                </div>
              </div>
            </div>
            <!-- doctor_info -->
            <div class="mb-3 row">
              <label for="doctor_info" class="col-sm-2 col-form-label">Doctor info
                <i
                    data-bs-toggle="tooltip" data-bs-placement="top" type="button"
                    class="fa fa-exclamation-circle" title="Max 6 line added">

                </i>
              </label>
              <div class="col-sm-10">
                                <textarea :class="{ 'is-invalid': errors['doctor_info'] }" style="min-height: 160px;"
                                          placeholder="B.D.S(RU0)
P.G.T (Conservative Dentistry and Endodontics) Dhaka Dental College
P.G.T (Perodontology) Dhaka Dental College
P.G.T (Oral nad Maxillofacial Surgeon) Dhaka Dental College" v-model="form.doctor_info" type="text" class="form-control"
                                          id="doctor_info"/>
                <div v-if="errors['doctor_info']" class="invalid-feedback">
                  {{ errors['doctor_info'][0] }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 offset-1">
            <div class="d-flex flex-column position-relative">
              <ImageUploadWithWebCam/>
              <div v-if="editMode" class="btn btn-primary text-light mt-3" data-bs-toggle="modal"
                   data-bs-target="#passwordCreateModal">Password
              </div>
            </div>

          </div>
          <div class="col-12 text-center mt-4 mb-5">
            <!-- submit btn -->
            <input type="submit" value="Save Staff"
                   class="btn btn-primary mb-3 px-5 text-light w-25">
            <!-- Button trigger modal -->
            <!-- Modal -->

            <!-- <button type="button" class="btn btn-info text-white w-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              New Visit
            </button>-->
          </div>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import ApiService          from "@/services/api.service";
import NotificationService from "@/services/notification.service";

export default {
  name: "Create",
  data: () => ({
    form         : {
      name          : '',
      last_name     : '',
      email         : '',
      phone         : '',
      salary        : '',
      designation   : '',
      role          : '',
      image         : '',
      date_of_year  : '',
      date_of_month : '',
      blood_group   : '',
      gender        : '',
      commission    : '',
      doctor_opening: '',
      doctor_info   : '',
    },
    errors       : [],
    editMode     : false,
    isImageUpload: false,
    months       : ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }),
  mounted() {
    if (this.$route.params.id) {
      this.edit(this.$route.params.id);
    }
  },
  methods: {
    //-------CRUD------
    save() {
      if (!this.isImageUpload) {
        this.form.image = null;
      }
      this.form.designation_id = this.form.designation ? this.form.designation.id : '';
      this.form.role_id        = this.form.role ? this.form.role.id : '';
      ApiService.post('/users', this.form).then((res) => {
        this.errors = []
        this.formReset();
        NotificationService.success(res.data.message);
        this.$router.push({name: 'staffEdit', params: {id: res.data.data.id}});
        this.edit(res.data.data.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
        NotificationService.error(error.response.data.message);
      })
    },
    edit(id) {
      this.editMode = true;
      ApiService.get(`/users/${id}`).then((res) => {
        this.form = res.data.data;
      }).catch(error => {
        NotificationService.error(error.response.data.message);
      })
    },
    update() {
      if (!this.isImageUpload) {
        this.form.image = null;
      }
      this.form.designation_id = this.form.designation ? this.form.designation.id : '';
      this.form.role_id        = this.form.role ? this.form.role.id : '';
      ApiService.update(`/users/${this.form.id}`, this.form).then((res) => {
        this.errors = []
        NotificationService.success(res.data.message);
      }).catch(error => {
        this.errors = error.response.data.errors;
        NotificationService.error(error.response.data.message);
      })
    },
    formReset() {
      this.form = {
        name          : '',
        last_name     : '',
        email         : '',
        phone         : '',
        salary        : '',
        designation   : '',
        role          : '',
        image         : '',
        date_of_year  : '',
        date_of_month : '',
        blood_group   : '',
        gender        : '',
        commission    : '',
        doctor_opening: '',
        doctor_info   : '',
      }
    }
    //-------CRUD--------
  },
  watch  : {
    $route(to, from) {
      this.formReset();
    }
  }

}
</script>
