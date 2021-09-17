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
              <textarea class="form-control" rows="16" placeholder="Schreibe deine neuen Ideen auf..."></textarea>
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
              dateString="13.09.2021 21:40"
              title="Google login"
              description="Jetzt kann man sich auch mit Google anmelden."
              category="Neues"
              icon="code"
              color="red"
             :date="new Date(1)"
            />
            <vue-timeline-update
            dateString="12.09.2021 20:30"
            title="Webinterface Release"
            description="Das Webinterface wurde erfolgreich veröffentlicht."
            category="Ankündigung"
            icon="code"
            color="blue"
            :date="new Date(1)"
            />
            <vue-timeline-update
            dateString="12.09.2021 20:30"
            title="Webinterface Release"
            description="Das Webinterface wurde erfolgreich veröffentlicht."
            category="Ankündigung"
            icon="code"
            color="blue"
            :date="new Date(1)"
            />
            <vue-timeline-update
            dateString="12.09.2021 20:30"
            title="Webinterface Release"
            description="Das Webinterface wurde erfolgreich veröffentlicht."
            category="Ankündigung"
            icon="code"
            color="blue"
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

  export default {
  components: { DashboardStats },
    data() {
       return {

       }
    },
    methods: {
     
    },
    mounted() {
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}

</style>
