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
              <h3 class="mb-0">Guthaben aufladen</h3>
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
              </div>
              <hr class="my-4">

              <!-- Address -->
              <h6 class="heading-small text-muted mb-4">Guthaben aufladen</h6>

              <div class="pl-lg-4">
                <b-row>
                  <b-col md="6" style="width: 100%">
                      <label class="form-control-label">Zahlungsmethode</label>
                         <select class="form-control" v-model="charge.paymethod" aria-label="Default select example">
                            <option selected value="paypal">PayPal</option>
                        </select>
                  </b-col>
                   <b-col md="6">
                    <base-input
                      type="number"
                      label="Betrag "
                      placeholder="5.00"
                      v-model="charge.amount"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="8">
                    
                  </b-col>
                   <b-col md="4">
                        <vue-element-loading :active="loading" spinner="bar-fade-scale" color="#2dce89"/>
                        <a @click="chargeUser()" style="width: 100%; cursor: pointer; color: white;" class="btn btn-success"><b>Jetzt aufladen!</b></a>
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
import ChargeService from '../../services/ChargeService';
import AuthService from '../../services/AuthService';
import { mapGetters } from 'vuex';

export default {
  components: { DashboardStats },
  computed: {
    ...mapGetters({ user: "auth/getUser" })
  },
  data() {
    return {
      charge: {
        amount: '3.00',
        paymethod: 'paypal'
      },
      loading: false
    };
  },
  beforeCreate() {
    if(this.$route.query.method == 'paypal') {
      const credentials = {
        paymentid: this.$route.query.paymentId,
        payerid: this.$route.query.PayerID,
      };
      ChargeService.chargeUserPayPal(credentials).then(response => {
        AuthService.getProfile().then(user => this.$store.dispatch("auth/user", user));
        this.$awn.success(response.message);
      }).catch(error => {
        this.$awn.alert(error.response.data.response.message);
      });
    }
  },
  methods: {
    chargeUser() {
      this.loading = true;
      if(this.charge.paymethod == 'paypal') {
        ChargeService.generateURLPayPal(this.charge.amount).then(response => {
            window.location.href = response.url;
        }).catch(error => {
            this.loading = false;
            this.$awn.alert(error.response.data.response.message);
        });
      }
    }
  }
};
</script>
<style>
</style>
