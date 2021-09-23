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
              <h3 class="mb-0">Ticket ID: bd432431-8024-4584-8755-3d6c4f66375f</h3>
            </b-col>
            <b-col cols="2" class="text-right">
              <a href="#!" style="padding: 11px; width: 100%; height: 100%" class="btn btn-sm btn-danger">Ticket schließen</a>
            </b-col>
          </b-row>

          <b-form @submit.prevent="updateProfile">

              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                     <b-card style="background-color: grey; color: white;">
                       <h3 style="color: white;">MirSowasVonEgal <span class="badge badge-secondary" style="background-color: #cc0000; color: white;">Chief Executive Officer</span></h3>
                        <b-card-text >
                        Some quick example text to build on the card title and make up the bulk of the card's content.<br>dd<br>d
                      </b-card-text>
                     </b-card></b-col>
                  <b-col lg="6"></b-col>
                </b-row>
                <b-row>
                  <b-col lg="6"></b-col>
                  <b-col lg="6" >
                     <b-card style="background-color: #32Cd32; color: white;"> 
                       <h3 style="color: white;">MSVE <span class="badge badge-secondary" style="background-color: #00ccff; color: white;">Customer</span></h3>
                        <b-card-text >
                        Some quick example text to build on the card title and make up the bulk of the card's content.<br>dd<br>d
                      </b-card-text>
                     </b-card>
                  </b-col>
                </b-row>
                <b-row>
                 <b-col lg="12" style="margin-top: 20px">
                     <b-form-group label="Antworten" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
                        <b-form-textarea rows="6" id="about-form-textaria" placeholder="Schreibe hier deine Antwort..."></b-form-textarea>
                    </b-form-group>
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
import DashboardStats from '../../Layout/DashboardStats.vue';

export default {
  components: { DashboardStats },
  data() {
    return {
        title: '',
        priority: '1',
        categorie: 'Allgemein',
        question: '',
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
