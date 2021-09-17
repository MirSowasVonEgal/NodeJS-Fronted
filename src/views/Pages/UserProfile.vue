<template>
  <div>
     <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <dashboard-stats/>
     </base-header>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="12" class="order-xl-1">
          <card>
          <b-row align-v="center" slot="header" >
            <b-col cols="8">
              <h3 class="mb-0">Profil bearbeiten</h3>
            </b-col>
            <b-col cols="4" class="text-right">
              <a href="#!" class="btn btn-sm btn-primary">Speichern</a>
            </b-col>
          </b-row>

          <b-form @submit.prevent="updateProfile">
            <h6 class="heading-small text-muted mb-4">Account Informationen</h6>

              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Nutzername"
                      placeholder="Dein Nutzername"
                      v-model="user.username"
                      disabled
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="E-Mail Adresse"
                      placeholder="Deine E-Mail"
                      v-model="user.email"
                      disabled
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row >
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Vorname"
                      placeholder="Max"
                      v-model="user.firstName"
                      name="firstname"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Nachname"
                      placeholder="Mustermann"
                      v-model="user.lastName"
                      name="lastname"
                    >
                    </base-input>
                  </b-col>
                </b-row>
              </div>
              <hr class="my-4">

              <!-- Address -->
              <h6 class="heading-small text-muted mb-4">Kontakt Informationen</h6>

              <div class="pl-lg-4">
                <b-row>
                  <b-col md="10">
                    <base-input
                      type="text"
                      label="Straße"
                      placeholder="Mustermann Straße"
                      v-model="user.address"
                      name="street"
                    >
                    </base-input>
                  </b-col>
                   <b-col md="2">
                    <base-input
                      type="text"
                      label="Hausnummer"
                      placeholder="5"
                      v-model="user.housenumber"
                      name="housenumber"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="4">
                    <base-input
                      type="text"
                      label="Stadt"
                      placeholder="Mönchengladbach"
                      v-model="user.city"
                      name="city"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
                    <base-input
                      type="text"
                      label="Land"
                      placeholder="Deutschland"
                      v-model="user.country"
                      name="country"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
                    <base-input
                      label="Postleitzahl"
                      placeholder="123456"
                      v-model="user.postalCode"
                      name="zipcode"
                    >
                    </base-input>
                  </b-col>
                </b-row>
              </div>
            </b-form>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DashboardStats from '../Layout/DashboardStats.vue';

export default {
  components: { DashboardStats },
  data() {
    return {
      user: {
        company: '',
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        aboutMe: ``
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
</style>
