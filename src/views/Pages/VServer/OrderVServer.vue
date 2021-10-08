<template>
    <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <dashboard-stats/>
     </base-header>
     <b-container fluid class="mt--7">
        <b-row v-if="selected == null && order == false">
            <div v-for="product in products" :key="product.name">
            <b-col lg="3" class="pt-3">
                    <div class="card" style="width: 22rem;">
                        <center class="pt-4"><h2>{{ product.data.name }}</h2></center>
                            <center><h1 class="card-title pt-3">{{ product.price }}€ <span style="font-size: 15px">/ 30 Tage</span></h1>
                            <span style="font-size: 14px"><i class="ni ni-pin-3" aria-hidden="true"></i> {{ product.data.location }}</span></center>
                        <ul class="list-group list-group-flush">
                            <center>
                                <li class="list-group-item"><i class="fa fa-microchip text-purple" aria-hidden="true"></i> <b>{{ product.data.cores }} {{ product.data.ghz }}</b></li>
                                <li class="list-group-item"><i class="fa fa-memory text-green" aria-hidden="true"></i> <b>{{ product.data.memory }}</b> Arbeitsspeicher</li>
                                <li class="list-group-item"><i class="fa fa-hdd text-warning" aria-hidden="true"></i> <b>{{ product.data.disk }} GB</b> {{ product.data.disktype }}</li>
                                <li class="list-group-item"><i class="fas fa-shield-alt text-danger" aria-hidden="true"></i> <b>{{ product.data.ddos }}</b> DDoS Protection</li>
                                <li class="list-group-item"><i class="fa fa-download text-yellow" aria-hidden="true"></i> <b>{{ product.data.uplink }}</b> Anbindung</li>
                                <li class="list-group-item"><i class="fas fa-wifi text-info" aria-hidden="true"></i> <b>{{ product.data.traffic }}</b> Traffic</li>
                                <li class="list-group-item"><i class="fa fa-cloud text-blue" aria-hidden="true"></i> <b>1</b> IPv4 Adresse</li>
                            </center>
                        </ul>
                        <div class="card-body">
                            <center><a @click="selectServer(product._id)" style="width: 100%; cursor: pointer;" class="btn btn-success text-white"><b>Mehr Details</b></a></center>
                        </div>
                    </div>
            </b-col>
            </div>
        </b-row>
        <b-row v-if="selected != null && order == false">
            <b-col xl="12" class="order-xl-1">
            <card>
            <b-row align-v="center" style="height: 30px" slot="header" >
                <b-col cols="10">
                    <h3 class="mb-0">VServer bestellen</h3>
                </b-col>
                <b-col cols="2" class="text-right">
                    <a @click="selected = null" class="btn btn-sm btn-danger text-white" style="width: 100%; height: 30px; cursor: pointer;">Zurück</a>
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
                            <center class="pt-4"><h2>{{ selected.data.name }}</h2></center>
                                <center><h1 class="card-title pt-3">{{ selected.price }}€ <span style="font-size: 15px">/ 30 Tage</span></h1>
                                <span style="font-size: 14px"><i class="ni ni-pin-3" aria-hidden="true"></i> {{ selected.data.location }}</span></center>
                            <ul class="list-group list-group-flush">
                                <center>
                                    <li class="list-group-item"><i class="fa fa-microchip text-purple" aria-hidden="true"></i> <b>{{ selected.data.cores }} {{ selected.data.ghz }}</b></li>
                                <li class="list-group-item"><i class="fa fa-memory text-green" aria-hidden="true"></i> <b>{{ selected.data.memory }}</b> Arbeitsspeicher</li>
                                <li class="list-group-item"><i class="fa fa-hdd text-warning" aria-hidden="true"></i> <b>{{ selected.data.disk }} GB</b> {{ selected.data.disktype }}</li>
                                <li class="list-group-item"><i class="fas fa-shield-alt text-danger" aria-hidden="true"></i> <b>{{ selected.data.ddos }}</b> DDoS Protection</li>
                                <li class="list-group-item"><i class="fa fa-download text-yellow" aria-hidden="true"></i> <b>{{ selected.data.uplink }}</b> Anbindung</li>
                                <li class="list-group-item"><i class="fas fa-wifi text-info" aria-hidden="true"></i> <b>{{ selected.data.traffic }}</b> Traffic</li>
                                <li class="list-group-item"><i class="fa fa-cloud text-blue" aria-hidden="true"></i> <b>{{ ipv4 }}</b> IPv4 Adresse</li>
                                </center>
                            </ul>
                        </div>
                    </b-col>
                    <b-col lg="4" style="width: 100%;">
                        <label class="form-control-label pt-2">Zahlungsmethode</label>
                            <select class="form-control">
                                <option selected value="credits">Guthaben</option>
                            </select>

                            <label class="form-control-label pt-5">Betriebssystem</label>
                            <select v-model="os" class="form-control">
                                <option value="debian-11-standard_11.0-1_amd64.tar.gz">Debian-11</option>
                                <option selected value="debian-10-standard_10.7-1_amd64.tar.gz">Debian-10</option>
                                <option selected value="Debian-10.tar.gz">Debian-10 (OWN)</option>
                                <option value="ubuntu-21.04-standard_21.04-1_amd64.tar.gz">Ubuntu-21.04</option>
                                <option value="ubuntu-20.10-standard_20.10-1_amd64.tar.gz">Ubuntu-20.10</option>
                            </select>

                            <label class="form-control-label pt-5">IPv4 Addressen</label>
                            <select v-model="ipv4" class="form-control">
                                <option selected value="1">1 IPv4 Adresse</option>
                                <option value="2">2 IPv4 Adressen</option>
                                <option value="3">3 IPv4 Adressen</option>
                            </select>

                            <label class="form-control-label pt-5">Laufzeit</label>
                            <select v-model="duration" class="form-control">
                                <option selected value="30">30 Tage</option>
                                <option value="60">60 Tage</option>
                                <option value="90">90 Tage</option>
                                <option value="180">180 Tage</option>
                                <option value="360">360 Tage</option>
                            </select>

                            <center class="pt-5" ><h1 style="margin-bottom: 0;">{{ livePrice }}€<br style="display: block; margin: 0px 0;"><span style="font-size: 13px; margin-top: 0;">Heute fälliger Gesamtbetrag</span></h1></center>
                            <div><a @click="orderServer()" style="width: 100%; cursor: pointer;" class="btn btn-success mt-4 text-white"><b>Jetzt Kostenpflichtig bestellen!</b></a>
                            <vue-element-loading :active="orderloading" spinner="bar-fade-scale" color="#2dce89"/></div>
                    </b-col>
                    <b-col lg="4">
                         <div class="card" style="width: 100%;">
                            <center class="pt-4"><h2>Features</h2></center>
                            <ul class="list-group list-group-flush">
                                <center>
                                    <li class="list-group-item"><i class="fa fa-microchip text-purple" aria-hidden="true"></i> Dieser Server hat einen Intel Xeon Prozessor verbaut, für gute Performance und günstige Preise.</li>
                                    <li class="list-group-item"><i class="fa fa-memory text-green" aria-hidden="true"></i> Bei diesem Server wurde DDR3 ECC Arbeitsspeicher verbaut.</li>
                                    <li class="list-group-item"><i class="fas fa-shield-alt text-danger" aria-hidden="true"></i> <b>Combahton</b> DDoS Protection. Unser DDOS-Schutz ist für deinen Server aktiviert.</li>
                                    <li class="list-group-item"><i class="fa fa-download text-yellow" aria-hidden="true"></i> <b>{{ selected.data.uplink }}</b> Anbindung. Unser Server ist mit einem 10 GBit/s Uplink angebunden.</li>
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
        <b-row v-if="selected == null && order == true">
            <b-col xl="12" class="order-xl-1">
            <card>
            <b-row align-v="center" style="height: 30px" slot="header" >
                <b-col cols="10">
                    <h3 class="mb-0">VServer wird eingerichtet</h3>
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
                        <h3>In wenigen Sekunden wirst du weitergeleitet...</h3>
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
import ProductService from '../../../services/ProductService';
import VServerService from '../../../services/VServerService';
import { duration } from 'moment';

  export default {
    name: 'light-table',
    components: {
      DashboardStats,
    },
    data() {
      return {
          selected: null,
          order: false,
          orderloading: false,
          products: '',
          os: "debian-10-standard_10.7-1_amd64.tar.gz",
          ipv4: 1,
          duration: 30,
      };
    },
    computed: {
        livePrice: function() {
            return (((Number(this.ipv4) + Number(this.selected.price) - 1) / 30) * this.duration).toFixed(2);
        }
    },
    methods: {
        orderServer: function() {
            this.orderloading = true;
            let notifier = this.$awn;
            notifier.async(
            VServerService.orderServer(this.selected._id, { ipv4: this.ipv4, duration: this.duration, os: this.os }),
            response => { 
                notifier.success(response.message);
                this.selected = null;
                this.order = true;
                this.loop = setTimeout(() => this.$router.push('/products'), 15000)
            }, error => { 
                notifier.alert(error.response.data.response.message) ;
                this.orderloading = false;
            },
                'Bitte warten'
            );
        },
        selectServer: function(id) {
            this.selected = this.products.find(i => i._id == id);
        }
    },
    created() {
        ProductService.getProduct("VServer").then(response => {
            this.products = Array.from(response.products).sort((a, b) => a.data.name.localeCompare(b.data.name));
            this.products.forEach(product => {
                if(product.data.memory > 1023) {
                    product.data.memory = product.data.memory / 1024 + " GB"
                } else {
                    product.data.memory = product.data.memory + " MB"
                }
            });
        });
    }
  }
</script>