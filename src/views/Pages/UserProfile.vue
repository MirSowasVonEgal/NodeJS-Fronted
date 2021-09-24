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
            <b-col cols="10">
              <h3 class="mb-0">Profil</h3>
            </b-col>
            <b-col cols="2" class="text-right">
              <a @click="updateProfile()" style="cursor: pointer; padding: 11px; width: 240px; margin-left: -200px; height: 100%; color: white;" class="btn btn-sm btn-primary">Speichern</a>
            </b-col>
          </b-row>
          <tabs>
            <tab title="Profil bearbeiten">
          <b-form @submit.prevent="updateProfile">
            <h6 class="heading-small text-muted mb-4">Account Informationen</h6>

              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Nutzername"
                      placeholder="Dein Nutzername"
                      v-model="username"
                      disabled
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="E-Mail Adresse"
                      placeholder="Deine E-Mail"
                      v-model="email"
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
                      v-model="address.firstname"
                      name="firstname"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Nachname"
                      placeholder="Mustermann"
                      v-model="address.lastname"
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
                      v-model="address.address"
                      name="street"
                    >
                    </base-input>
                  </b-col>
                   <b-col md="2">
                    <base-input
                      type="text"
                      label="Hausnummer"
                      placeholder="5"
                      v-model="address.housenumber"
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
                      v-model="address.city"
                      name="city"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
                    <base-input
                      type="text"
                      label="Land"
                      placeholder="Deutschland"
                      v-model="address.country"
                      name="country"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
                    <base-input
                      label="Postleitzahl"
                      placeholder="123456"
                      v-model="address.zipcode"
                      name="zipcode"
                    >
                    </base-input>
                  </b-col>
                </b-row>
              </div>
            </b-form>
            </tab>
            <tab title="Passwort ändern">
              <b-form @submit.prevent="updateProfile">
            <h6 class="heading-small text-muted mb-4">Account Informationen</h6>

              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Nutzername"
                      placeholder="Dein Nutzername"
                      v-model="username"
                      disabled
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="E-Mail Adresse"
                      placeholder="Deine E-Mail"
                      v-model="email"
                      disabled
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row >
                  <b-col lg="6">
                    <base-input
                      type="password"
                      label="Neues Passwort"
                      placeholder="••••••••••••"
                      v-model="password"
                      name="password"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <a @click="changePassword()" style="width: 100%; cursor: pointer; margin-top: 32px; padding: 10px; color: white;" class="btn btn-sm btn-primary">Passwort ändern</a>
                  </b-col>
                </b-row>
              </div>
            </b-form>
            </tab>
          </tabs>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DashboardStats from '../Layout/DashboardStats.vue';
import AuthService from '../../services/AuthService';
import { Tabs, Tab } from '@hiendv/vue-tabs'

export default {
  components: { DashboardStats, Tabs, Tab },
  data() {
    return {
      username: this.$store.state.auth.user.username,
      email: this.$store.state.auth.user.email,
      password: '',
      address: {
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        country: '',
        zipcode: '',
      }
    };
  },
  created: function() {
    if(this.$store.state.auth.user.address) {
      this.address = this.$store.state.auth.user.address;
    }
  },
  methods: {
    updateProfile() {
      let notifier = this.$awn;
      notifier.async(
        AuthService.updateProfile({ address: this.address }),
        response => notifier.success(response.message), 
        error => notifier.alert(error.response.data.response.message),
        'Bitte warten'
      );
    },
    changePassword() {
      let notifier = this.$awn;
      notifier.async(
        AuthService.updateProfile({ password: this.password }),
        response => notifier.success(response.message), 
        error => notifier.alert(error.response.data.response.message),
        'Bitte warten'
      );
    }
  }
};
</script>
<style>
</style>
