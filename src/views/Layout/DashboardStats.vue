<template>
  <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="Rang"
                      type="gradient-green"
                      sub-title="Customer"
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
                      sub-title="0€"
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
              <span class="text-nowrap">Klicke <router-link :to="{ path: 'charge' }">hier</router-link>, um dein Guthaben aufzuladen.</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Letzter Login"
                      type="gradient-red"
                      sub-title="XX.XX.XXXX XX:XX"
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
                      sub-title="XXXX-XXXX"
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
export default {

}
</script>

<style>

</style>