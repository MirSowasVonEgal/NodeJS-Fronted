<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <dashboard-stats/>
    </base-header>

    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="6" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h5 class="h3 text-black mb-0">Notizen</h5>
                <h6 class="text-light text-uppercase ls-1 mb-1">Schreibe hier alles Wichtige auf...</h6>
              </b-col>
              <b-col>
              </b-col>
            </b-row>
            <form>
              <textarea @change="changeNotes()" v-model="notes" class="form-control" rows="16" placeholder="Schreibe deine neuen Ideen auf..."></textarea>
            </form>
          </card>
        </b-col>

       <b-col xl="6" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h5 class="h3 text-black mb-0">Neuigkeiten</h5>
                <h6 class="text-light text-uppercase ls-1 mb-1">Hier stehen die neusten Infos...</h6>
              </b-col>
              <b-col>
              </b-col>
            </b-row>
            <div style="height: 357px; overflow: scroll; overflow-x: hidden;">
            <vue-timeline-update
              v-for="row in news" :key="row._id"
              :dateString="Number(row.created) | moment('DD.MM.YYYY, HH:mm')"
              :title="row.title"
              :description="row.message"
              :category="row.tag"
              icon="code"
              :color="row.color"
             :date="new Date(1)"
            />
            </div>
          </card>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>
<script>
import DashboardStats from './Layout/DashboardStats.vue';
import AuthService from '../services/AuthService';
import NewsService from '../services/NewsService';

  export default {
  components: { DashboardStats },
    data() {
       return {
          notes: '',
          news: {},
       }
    },
    methods: {
      changeNotes() {
        let notifier = this.$awn;
        notifier.async(
          AuthService.updateProfile({ notes: this.notes }),
          response => notifier.success(response.message), 
          error => notifier.alert(error.response.data.response.message),
          'Bitte warten'
        );
      }
    },
    created() {
      if(this.$store.state.auth.user.notes) {
        this.notes = this.$store.state.auth.user.notes;
      }
      NewsService.getNews().then(response => {
        this.news = response.news.reverse();
      })
    },
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}

</style>
