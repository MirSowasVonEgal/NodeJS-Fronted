<template>
  <div>
     <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <dashboard-stats/>
     </base-header>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="12" class="order-xl-1">
          <card>
          <b-row v-if="width > 991" align-v="center" slot="header" >
            <b-col cols="10">
              <h3 class="mb-0">Ticket: {{ ticket.title }}</h3>
            </b-col>
            <b-col cols="2" class="text-right" v-if="!ticket.closed">
              <a @click="updateStatusTicket(true)" style="padding: 11px; width: 200px; margin-left: -200px; height: 100%; color: white; cursor: pointer;" class="btn btn-sm btn-danger">Ticket schließen</a>
            </b-col>
            <b-col cols="2" class="text-right" v-else>
              <a @click="updateStatusTicket(false)" style="padding: 11px; width: 200px; margin-left: -200px; height: 100%; color: white; cursor: pointer;" class="btn btn-sm btn-success">Ticket öffnen</a>
            </b-col>
          </b-row>
          <b-row v-if="width <= 991" align-v="center" slot="header" >
            <b-row>
            <b-col cols="12">
              <h3 class="mb-0">Ticket ID: <br/> {{ $route.params.id }}</h3>
            </b-col>
            </b-row>
            <b-row>
            <b-col cols="12" class="text-right" v-if="!ticket.closed">
              <a @click="updateStatusTicket(true)" style="padding: 11px; width: 265%; height: 100%; color: white; cursor: pointer;" class="btn btn-sm btn-danger">Ticket schließen</a>
            </b-col>
            <b-col cols="12" class="text-right" v-else>
              <a @click="updateStatusTicket(false)" style="padding: 11px; width: 265%; height: 100%; color: white; cursor: pointer;" class="btn btn-sm btn-success">Ticket öffnen</a>
            </b-col>
            </b-row>
          </b-row>

          <b-form @submit.prevent="answerTicket" style="margin-top: -20px">

              <div v-for="message in ticket.messages" :key="message.date">
                <b-row v-if="message.userid != user._id">
                  <b-col lg="6">
                     <b-card style="background-color: grey; color: white; margin-top: 15px">
                       <h3 style="margin-top: -15px; margin-bottom: 10px; color: white; margin-left: -16px; text-align: left">{{ message.username }} <span class="badge badge-secondary" :style="'background-color: ' + message.role.color + '; color: white;'">{{ message.role.fullname }}</span></h3>
                        <b-card-text style=" white-space: pre-line;">{{ message.message }}</b-card-text>
                     </b-card></b-col>
                  <b-col lg="6"></b-col>
                </b-row>
                <b-row v-else>
                  <b-col lg="6"></b-col>
                  <b-col lg="6">
                     <b-card style="background-color: #32Cd32; color: white; margin-top: 16px"> 
                       <h3 style="margin-top: -15px; margin-bottom: 10px; color: white; margin-right: -16px; text-align: right">{{ message.username }} <span class="badge badge-secondary" :style="'background-color: ' + message.role.color + '; color: white;'">{{ message.role.fullname }}</span></h3>
                        <b-card-text style="white-space: pre-line;">{{ message.message }}</b-card-text>
                     </b-card>
                  </b-col>
                </b-row>
              </div>
              <div v-if="!ticket.closed">
                <b-row style="margin-bottom: -40px; margin-top: 40px; margin-right: 1px;">
                 <b-col cols="10" class="text-left" style="margin-bottom: 40px;">
                     <b-form-group label="Antwort" label-class="form-control-label" class="mb-0" label-for="about-form-textaria"/>
                 </b-col>
                 <b-col cols="2" class="text-right">
                      <span @click="answerTicket()" style="margin-top: -30px; cursor: pointer; padding: 15px; width: 200px; margin-right: -14px; margin-left: -163px" class="btn btn-sm btn-primary">Senden</span>
                 </b-col>
                </b-row>
                <b-row>
                 <b-col lg="12">
                        <b-form-textarea v-model="answer" rows="6" id="about-form-textaria" placeholder="Schreibe hier deine Antwort..."></b-form-textarea>
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
import TicketService from '../../../services/TicketService'
import { mapGetters } from 'vuex';

export default {
  components: { DashboardStats },
  data() {
    return {
        answer: '',
        ticket: {},
        timeout: null,
        width: window.innerWidth,
    };
  },
  computed: {
    ...mapGetters({ user: "auth/getUser" }),
  },
  beforeCreate() { 
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
    })
    TicketService.getTicket(this.$route.params.id).then(response => {
      this.ticket = response.ticket;
    }).catch(error => {
      this.$router.push("/tickets");
    });
    const vm = this
      function timeout() {
        vm.timeout = setTimeout(() => {
          TicketService.getTicket(vm.$route.params.id).then(response => {
            vm.ticket = response.ticket;
            timeout();
          }).catch(error => {
            vm.$router.push("/tickets");
          });
        }, 2000);
      }
      timeout();
  },
  beforeDestroy () {
    clearTimeout(this.timeout);
  },
  methods: {
    answerTicket() {
      let notifier = this.$awn;
      var answer_copy = this.answer;
      if(answer_copy.replace(/ /g, "").replace(/\n/g, "") == '') return;
      this.ticket.messages.push({ date: new Date().getTime(), message: this.answer, role: this.user.role, userid: this.user._id, username: this.user.username });
      notifier.async(
        TicketService.updateTicket(this.ticket._id, { message: this.answer }),
        response => notifier.success(response.message), 
        error => notifier.alert(error.response.data.response.message),
        'Bitte warten'
      );
      this.answer = '';
    },
    updateStatusTicket(status) {
      let notifier = this.$awn;
      this.ticket.closed = status;
      notifier.async(
        TicketService.updateTicket(this.ticket._id, { closed: status }),
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
