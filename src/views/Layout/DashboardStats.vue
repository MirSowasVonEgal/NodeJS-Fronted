<template>
  <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="Rang"
                      type="gradient-green"
                      :sub-title="user.role.fullname"
                      icon="ni ni-single-02"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">Dein aktueller Rang.</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6" >
          <stats-card title="Guthaben"
                      type="gradient-orange"
                      :sub-title="user.balance.toFixed(2) +'€'"
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">Klicke 
              <router-link to="/charge" custom v-slot="{ navigate }">
                <a href="" @click="navigate" @keypress.enter="navigate" role="link"><span>hier</span></a>
            </router-link>, um dein Guthaben aufzuladen.</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Letzter Login"
                      type="gradient-red"
                      :sub-title="new Date(Number(user.last_login)) | moment('DD.MM.YYYY, HH:mm')"
                      icon="ni ni-chart-pie-35"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">Wann du dich zum letzten mal angemeldet hast.</span>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Support Pin"
                      type="gradient-info"
                      :sub-title="user.supportid"
                      icon="ni ni-support-16"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">Für Support anfragen.</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
</template>

<script>
import AuthService from '../../services/AuthService'
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      timeout: null
    }
  },
  computed: {
    ...mapGetters({ user: "auth/getUser" })
  },
  mounted() {
    const vm = this
      function timeout() {
        vm.timeout = setTimeout(() => {
          AuthService.getProfile().then(user => {
            vm.$store.dispatch("auth/user", user);
            timeout();
          })
        }, 2000);
      }
      timeout();
  },
  beforeDestroy () {
    clearTimeout(this.timeout);
  }
}
</script>

<style>

</style>