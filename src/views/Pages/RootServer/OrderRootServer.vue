<template>
    <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <dashboard-stats/>
     </base-header>

     <b-container fluid class="mt--7">
        <b-row v-if="selection == '' && order == false">
            <b-col lg="3" class="pt-3">
                    <div class="card" style="width: 22rem;">
                        <center class="pt-4"><h2>KVM-S01</h2></center>
                            <center><h1 class="card-title pt-3">1.99€ <span style="font-size: 15px">/ 30 Tage</span></h1>
                            <span style="font-size: 14px"><i class="ni ni-pin-3" aria-hidden="true"></i> Niederlande | Skylink</span></center>
                        <ul class="list-group list-group-flush">
                            <center>
                                <li class="list-group-item"><i class="fa fa-microchip text-purple" aria-hidden="true"></i> <b>1</b> Kern @ 3,00+ GHz</li>
                                <li class="list-group-item"><i class="fa fa-memory text-green" aria-hidden="true"></i> <b>1 GB</b> Arbeitsspeicher</li>
                                <li class="list-group-item"><i class="fa fa-hdd text-warning" aria-hidden="true"></i> <b>20 GB</b> NVMe SSD</li>
                                <li class="list-group-item"><i class="fas fa-shield-alt text-danger" aria-hidden="true"></i> <b>Combahton</b> DDoS Protection</li>
                                <li class="list-group-item"><i class="fa fa-download text-yellow" aria-hidden="true"></i> <b>2 GBit/s</b> Shared Anbindung</li>
                                <li class="list-group-item"><i class="fas fa-wifi text-info" aria-hidden="true"></i> <b>Unlimited</b> Traffic</li>
                                <li class="list-group-item"><i class="fa fa-cloud text-blue" aria-hidden="true"></i> <b>1</b> IPv4 Adresse</li>
                            </center>
                        </ul>
                        <div class="card-body">
                            <center><a @click="selection = 'KVM-01'" style="width: 100%; cursor: pointer;" class="btn btn-success text-white"><b>Mehr Details</b></a></center>
                        </div>
                    </div>
            </b-col>
        </b-row>
        <b-row v-if="selection != '' && order == false">
            <b-col xl="12" class="order-xl-1">
            <card>
            <b-row align-v="center" style="height: 30px" slot="header" >
                <b-col cols="10">
                    <h3 class="mb-0">RootServer bestellen</h3>
                </b-col>
                <b-col cols="2" class="text-right">
                    <a @click="selection = ''" class="btn btn-sm btn-danger text-white" style="width: 100%; height: 30px; cursor: pointer;">Zurück</a>
                </b-col>
            </b-row>

            <b-form>
                <b-row>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4 pl-4">Server Informationen</h6>
                    </b-col>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4 pl-3">Server bestellen</h6>
                    </b-col>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4 pl-2">Features</h6>
                    </b-col>
                </b-row>
                <div class="pl-lg-4">
                    <b-row>
                    <b-col lg="4">
                        <div class="card" style="width: 100%;">
                            <center class="pt-4"><h2>KVM-S01</h2></center>
                                <center><h1 class="card-title pt-3">1.99€ <span style="font-size: 15px">/ 30 Tage</span></h1>
                                <span style="font-size: 14px"><i class="ni ni-pin-3" aria-hidden="true"></i> Niederlande | Skylink</span></center>
                            <ul class="list-group list-group-flush">
                                <center>
                                    <li class="list-group-item"><i class="fa fa-microchip text-purple" aria-hidden="true"></i> <b>1</b> Kern @ 3,00+ GHz</li>
                                    <li class="list-group-item"><i class="fa fa-memory text-green" aria-hidden="true"></i> <b>1 GB</b> Arbeitsspeicher</li>
                                    <li class="list-group-item"><i class="fa fa-hdd text-warning" aria-hidden="true"></i> <b>20 GB</b> NVMe SSD</li>
                                    <li class="list-group-item"><i class="fas fa-shield-alt text-danger" aria-hidden="true"></i> <b>Combahton</b> DDoS Protection</li>
                                    <li class="list-group-item"><i class="fa fa-download text-yellow" aria-hidden="true"></i> <b>2 GBit/s</b> Shared Anbindung</li>
                                    <li class="list-group-item"><i class="fas fa-wifi text-info" aria-hidden="true"></i> <b>Unlimited</b> Traffic</li>
                                    <li class="list-group-item"><i class="fa fa-cloud text-blue" aria-hidden="true"></i> <b>1</b> IPv4 Adresse</li>
                                </center>
                            </ul>
                        </div>
                    </b-col>
                    <b-col lg="4" style="width: 100%;">
                        <label class="form-control-label pt-2">Zahlungsmethode</label>
                            <select class="form-control">
                                <option selected value="credits">Guthaben</option>
                            </select>
                            <label class="form-control-label pt-5">Laufzeit</label>
                            <select class="form-control">
                                <option selected value="30">30 Tage</option>
                                <option value="60">60 Tage</option>
                                <option value="90">90 Tage</option>
                                <option value="180">180 Tage</option>
                                <option value="360">360 Tage</option>
                            </select>

                            <center class="pt-5" ><h1 style="margin-bottom: 0;">1.99€<br style="display: block; margin: 0px 0;"><span style="font-size: 13px; margin-top: 0;">Heute fälliger Gesamtbetrag</span></h1></center>
                            <a @click="orderServer()" style="width: 100%; cursor: pointer;" class="btn btn-success mt-4 text-white"><b>Jetzt Kostenpflichtig bestellen!</b></a>
                    </b-col>
                    <b-col lg="4">
                         <div class="card" style="width: 100%;">
                            <center class="pt-4"><h2>Features</h2></center>
                            <ul class="list-group list-group-flush">
                                <center>
                                    <li class="list-group-item"><i class="fa fa-microchip text-purple" aria-hidden="true"></i> Dieser Server hat einen Intel Xeon Prozessor verbaut, für gute Performance und günstige Preise.</li>
                                    <li class="list-group-item"><i class="fa fa-memory text-green" aria-hidden="true"></i> Bei diesem Server wurde DDR3 ECC Arbeitsspeicher verbaut.</li>
                                    <li class="list-group-item"><i class="fa fa-hdd text-warning" aria-hidden="true"></i> Unsere NVMe SSD können bis zu 2000+ MB/s</li>
                                    <li class="list-group-item"><i class="fas fa-shield-alt text-danger" aria-hidden="true"></i> <b>Combahton</b> DDoS Protection. Unser DDOS-Schutz ist für deinen Server aktiviert.</li>
                                    <li class="list-group-item"><i class="fa fa-download text-yellow" aria-hidden="true"></i> <b>2 GBit/s</b> Shared Anbindung. Unser Server ist mit 10 GBit/s Uplink angebunden.</li>
                                    <li class="list-group-item"><i class="fas fa-wifi text-info" aria-hidden="true"></i> <b>Unlimited</b> Traffic. Du kannst so viel Traffic benutzen wie du willst.</li>
                                    <li class="list-group-item"><i class="fa fa-cloud text-blue" aria-hidden="true"></i> <b>1</b> IPv4 Adresse. Du erhälst von uns eine Öffentliche IPv4-Adresse.</li>
                                </center>
                            </ul>
                        </div>
                    </b-col>
                    </b-row>
                </div>
                </b-form>
            </card>
            </b-col>
        </b-row>
        <b-row v-if="selection == '' && order == true">
            <b-col xl="12" class="order-xl-1">
            <card>
            <b-row align-v="center" style="height: 30px" slot="header" >
                <b-col cols="10">
                    <h3 class="mb-0">RootServer wird eingerichtet</h3>
                </b-col>
            </b-row>

            <b-form>
                <b-row>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4 pl-3">INFORMATIONEN</h6>
                    </b-col>
                </b-row>
                <div class="pl-lg-4">
                    <center>
                        <h1>Du hast dir erfolgreich einen Server bestellt!</h1>    
                        <h3>Dein Server wird derzeit eingerichtet, dass kann bis zu 5 Minuten dauern.</h3>
                        <h3>Falls es schwierigkeiten oder Probleme gibt melde dich gerne im Support.</h3>
                        <div class="pt-6"><vue-element-loading :active="true" spinner="bar-fade-scale" color="#2dce89"/></div>
                    </center>
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
    name: 'light-table',
    components: {
      DashboardStats,
    },
    data() {
      return {
          selection: '',
          order: false,
      };
    },
    methods: {
        orderServer: function() {
            this.selection = '';
            this.order = true;
        }
    }
  }
</script>