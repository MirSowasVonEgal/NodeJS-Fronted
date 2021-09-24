<template>
  <div>
     <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <dashboard-stats/>
     </base-header>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="12" class="order-xl-1">
          <card>
            <validation-observer v-slot="{handleSubmit}" ref="formValidator">
          <b-row align-v="center" slot="header" >
            <b-col cols="10">
              <h3 class="mb-0">Ticket erstellen</h3>
            </b-col>
            <b-col cols="2" class="text-right">
              <a @click="handleSubmit(createTicket)" style="cursor: pointer; padding: 11px; width: 190px; margin-left: -150px; height: 100%; color: white;" class="btn btn-sm btn-primary">Ticket öffnen</a>
            </b-col>
          </b-row>

          <b-form>

              <div class="pl-lg-4">
                <b-row>
                  <b-col md="12">
                    <base-input
                      type="text"
                      label="Titel"
                      placeholder="Mein Server startet nicht mehr..."
                      v-model="ticket.title"
                      name="Titel"
                      :rules="{required: true}"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <label class="form-control-label">Kategorie</label>
                         <select class="form-control" v-model="ticket.category" aria-label="Default select example">
                            <option selected value="Allgemein">Allgemein</option>
                            <option selected value="Partner">Partner</option>
                        </select>
                  </b-col>
                  <b-col lg="6">
                    <label class="form-control-label">Priorität</label>
                         <select class="form-control" v-model="ticket.priority" aria-label="Default select example">
                            <option selected value="3">Hoch</option>
                            <option selected value="2">Normal</option>
                            <option selected value="1">Niedrig</option>
                        </select>
                  </b-col>
                </b-row>
                <b-row>
                 <b-col lg="12" style="margin-top: 20px">
                     <b-form-group label="Frage" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
                    <b-form-textarea rows="6" id="about-form-textaria" placeholder="Beschreibe am besten so detailliert wie möglich deine Frage."  v-model="ticket.question"></b-form-textarea>
                    </b-form-group>
                 </b-col>
                </b-row>
              </div>
            </b-form>
            </validation-observer>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DashboardStats from '../../Layout/DashboardStats.vue';
import TicketService from '../../../services/TicketService';

export default {
  components: { DashboardStats },
  data() {
    return {
      ticket: {
        title: '',
        priority: '1',
        category: 'Allgemein',
        question: '',
      },
    };
  },
  methods: {
    createTicket() {
      console.log(1)
      let notifier = this.$awn;
      var question_copy = this.ticket.question;
      if(question_copy.replace(/ /g, "").replace(/\n/g, "") == '') return;
      notifier.async(
        TicketService.createTicket(this.ticket),
        response => {
          notifier.success(response.message);
          this.$router.push("/ticket/" + response.ticket._id);
        }, 
        error => notifier.alert(error.response.data.response.message),
        'Bitte warten'
      );
    }
  }
};
</script>
<style>
</style>
