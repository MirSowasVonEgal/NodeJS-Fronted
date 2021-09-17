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
                         <select class="form-control" v-model="paymethod" aria-label="Default select example">
                            <option selected value="paypal">PayPal</option>
                        </select>
                  </b-col>
                   <b-col md="6">
                    <base-input
                      type="number"
                      label="Betrag "
                      placeholder="5.00"
                      v-model="amount"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="8">
                    
                  </b-col>
                   <b-col md="4">
                        <a href="#!" style="width: 100%;" class="btn btn-success"><b>Jetzt aufladen!</b></a>
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
        username: '',
        email: '',
      },
      amount: '3.00',
      paymethod: 'paypal'
    };
  },
  methods: {
  }
};
</script>
<style>
</style>
