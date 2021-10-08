<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <dashboard-stats/>
     </base-header>

     <b-container fluid class="mt--7" v-if="vserver != null">
        <b-row>
            <b-col xl="12" class="order-xl-1">
            <card>
            <b-form>
                <div v-if="!vserver.blocked" >
                <b-row v-if="vserver.status == 'Online'">
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4">Server Informationen</h6>
                    </b-col>
                    <div style="margin-left: auto;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-success text-white disabled"><b>Starten</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a @click="rebootServer()" style="width: 100%; cursor: pointer;" class="btn btn-warning text-white"><b>Neustarten</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a @click="shutdownServer()" style="width: 100%; cursor: pointer;" class="btn btn-danger text-white"><b>Herunterfahren</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a @click="stopServer()" style="width: 100%; cursor: pointer;" class="btn btn-danger text-white"><b>Stoppen</b></a>
                    </div>
                </b-row>
                <b-row v-if="vserver.status == 'Neustart'">
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4">Server Informationen</h6>
                    </b-col>
                    <div style="margin-left: auto;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-success text-white disabled"><b>Starten</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-warning text-white disabled"><b>Neustarten</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-danger text-white disabled"><b>Herunterfahren</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-danger text-white disabled"><b>Stoppen</b></a>
                    </div>
                </b-row>
                <b-row v-if="vserver.status != 'Neustart' && vserver.status != 'Online'">
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4">Server Informationen</h6>
                    </b-col>
                    <div style="margin-left: auto;  margin-right: 0;">
                        <a @click="startServer()" style="width: 100%; cursor: pointer;" class="btn btn-success text-white"><b>Starten</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-warning text-white disabled"><b>Neustarten</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-danger text-white disabled"><b>Herunterfahren</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-danger text-white disabled"><b>Stoppen</b></a>
                    </div>
                </b-row>
                </div>
                <b-row v-else>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4">Server Informationen</h6>
                    </b-col>
                    <div style="margin-left: auto;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-success text-white disabled"><b>Starten</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-warning text-white disabled"><b>Neustarten</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-danger text-white disabled"><b>Herunterfahren</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-danger text-white disabled"><b>Stoppen</b></a>
                    </div>
                </b-row>
                <div class="">
                    <b-row>
                        <b-col lg="12">
                              <tabs>
                                <tab title="Status">
                                <b-form>
                <b-row>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4">Server Informationen</h6>
                    </b-col>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4">Live Statistiken</h6>
                    </b-col>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4">Konfiguration</h6>
                    </b-col>
                </b-row>
                <div class="">
                    <b-row>
                    <b-col lg="4">
                        <div class="card" style="width: 100%;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: <b>{{ vserver._id }}</b></li>
                                <li class="list-group-item">Server-ID: <b>{{ vserver.serverid }}</b></li>
                                <li class="list-group-item">Status:
                                    <badge v-if="!vserver.blocked" class="badge-dot mr-4" type="">
                                        <badge v-if="vserver.status == 'Online'" class="badge-dot mr-4" type="">
                                            <i :class="`bg-success`"></i>
                                            <span class="status" :class="`text-success`">{{vserver.status}}</span>
                                        </badge>
                                        <badge v-if="vserver.status == 'Installation'" class="badge-dot mr-4" type="">
                                            <i :class="`bg-warning`"></i>
                                            <span class="status" :class="`text-warning`">{{vserver.status}}</span>
                                        </badge>
                                        <badge v-if="vserver.status != 'Online' && vserver.status != 'Installation'" class="badge-dot mr-4" type="">
                                            <i :class="`bg-danger`"></i>
                                            <span class="status" :class="`text-danger`">{{vserver.status}}</span>
                                        </badge>
                                    </badge>
                                    <badge v-else class="badge-dot mr-4" type="">
                                        <i :class="`bg-danger`"></i>
                                        <span class="status" :class="`text-danger`">Gesperrt</span>
                                    </badge>
                                </li>
                                <li class="list-group-item">Betriebssystem: <b>{{ vserver.os.split("-")[0] + "-" +vserver.os.split("-")[1] }}</b></li>
                                <li class="list-group-item">Node: <b>{{ vserver.node }}</b></li>
                                <li class="list-group-item">Haupt-IP-Adresse: <b>{{ networks[0].ip }}</b>&nbsp;
                                <i style="color: #233dd2; cursor: pointer;" @click="copyIP()" class="fa fa-clone" aria-hidden="true"/>
                                <li class="list-group-item">User: <b>root</b></li>
                                <li class="list-group-item">Passwort: {{ password }}&nbsp;
                                <i style="color: #233dd2; cursor: pointer;" v-if="password == '••••••••••••'" @click="showPassword()" class="fa fa-eye" aria-hidden="true"/>
                                <i style="color: green; cursor: pointer;" v-else @click="hidePassword()" class="fa fa-eye" aria-hidden="true"/>&nbsp;
                                <i style="color: #233dd2; cursor: pointer;" @click="copyPassword()" class="fa fa-clone" aria-hidden="true"/> </li>
                                <li class="list-group-item">Preis: <b>{{ vserver.price }}€ / 30 Tage</b></li>
                                <li class="list-group-item">Bestellt am: <b>{{ Number(vserver.created) | moment('DD.MM.YYYY, HH:mm') }}</b></li>
                            </ul>
                        </div>
                    </b-col>
                    <b-col lg="4">
                        <div class="card" style="width: 100%;">
                            <ul class="list-group list-group-flush">
                                <center>
                                    <li class="list-group-item">
                                        <div class="progress-primary">
                                            <div class="progress-label">
                                            <span>Bezahlt bis</span>
                                            </div>
                                            <div class="progress-percentage">
                                            <center><span>{{ vserver.paidup | moment('DD.MM.YYYY, HH:mm') }} ( {{ relativTime }}) </span></center>
                                            </div>
                                        </div>
                                        <base-progress
                                                        type="yellow"
                                                        :value="Number(((((vserver.paidup - new Date().getTime()) / 1000) / 2592000) * 100) | 0)"
                                                        size="lg">
                                                        <slot label>
                                                        </slot>
                                        </base-progress>
                                        </li>
                                        <li class="list-group-item">
                                        <div class="progress-primary">
                                            <div class="progress-label">
                                            <span>Prozessor Auslastung</span>
                                            </div>
                                            <div class="progress-percentage">
                                            <span>( {{ status.cpus  }} Kern/e ) {{ ((status.cpu * 100) | 0) }}%</span>
                                            </div>
                                        </div>
                                        <base-progress
                                                        type="danger"
                                                        :value="Number((status.cpu * 100) | 0)"
                                                        size="lg">
                                                        <slot label>
                                                        </slot>
                                        </base-progress>
                                        </li>
                                        <li class="list-group-item">
                                        <div class="progress-primary">
                                            <div class="progress-label">
                                            <span>Arbeitsspeicher Auslastung</span>
                                            </div>
                                            <div class="progress-percentage">
                                            <span>( {{ (status.mem / 1024 / 1024).toFixed(0) }}MB von  {{ (status.maxmem / 1024 / 1024).toFixed(0) }}MB ) {{ (((status.mem / 1024 / 1024) / (status.maxmem / 1024 / 1024)) * 100).toFixed(0) }}%</span>
                                            </div>
                                        </div>
                                        <base-progress
                                                        type="primary"
                                                        :value="Number((((status.mem / 1024 / 1024) / (status.maxmem / 1024 / 1024)) * 100).toFixed(0))"
                                                        size="lg">
                                                        <slot label>
                                                        </slot>
                                        </base-progress>
                                        </li>
                                        <li class="list-group-item">
                                        <div class="progress-primary">
                                            <div class="progress-label">
                                            <span>Festplatten Speicher</span>
                                            </div>
                                            <div class="progress-percentage">
                                           <span>( {{ (status.disk / 1024 / 1024 / 1024).toFixed(1) }}GB von  {{ vserver.disk }}GB ) {{ (((status.disk / 1024 / 1024) / (status.maxdisk / 1024 / 1024)) * 100).toFixed(0) }}%</span>
                                            </div>
                                        </div>
                                        <base-progress
                                                        type="warning"
                                                        :value="Number((((status.disk / 1024 / 1024) / (status.maxdisk / 1024 / 1024)) * 100).toFixed(0))"
                                                        size="lg">
                                                        <slot label>
                                                        </slot>
                                        </base-progress>
                                        </li>
                                    <li class="list-group-item">
                                        <div class="progress-primary">
                                            <div class="progress-label">
                                            <span>Traffic</span>
                                            </div>
                                            <div class="progress-percentage">
                                            <span>( {{ (vserver.traffic / 1024 / 1024 / 1024).toFixed(3) }}GB von {{ product.traffic.split(" ")[0] + product.traffic.split(" ")[1] }} ) {{ ((vserver.traffic / 1024 / 1024 / 1024) / (product.traffic.split(" ")[0] * 1024)).toFixed(2) }}%</span>
                                            </div>
                                        </div>
                                        <base-progress
                                                        type="success"
                                                        :value="(((vserver.traffic) / 1024 / 1024 / 1024) / (product.traffic.split(' ')[0] * 1024))"
                                                        size="lg">
                                                        <slot label>
                                                        </slot>
                                        </base-progress>
                                        </li>
                                </center>
                            </ul>
                        </div>
                    </b-col>
                    <b-col lg="4">
                        <div class="card" style="width: 100%;">
                            <center class="pt-4"><h2>{{ product.name }}</h2></center>
                                <center><h1 class="card-title pt-3">{{ vserver.price }}€ <span style="font-size: 15px">/ 30 Tage</span></h1>
                                <span style="font-size: 14px"><i class="ni ni-pin-3" aria-hidden="true"></i> {{ product.location }}</span></center>
                            <ul class="list-group list-group-flush">
                                <center>
                                    <li class="list-group-item"><i class="fa fa-microchip text-purple" aria-hidden="true"></i> <b>{{ product.cores }} {{ product.ghz }}</b></li>
                                <li class="list-group-item"><i class="fa fa-memory text-green" aria-hidden="true"></i> <b>{{ product.memory }}</b> Arbeitsspeicher</li>
                                <li class="list-group-item"><i class="fa fa-hdd text-warning" aria-hidden="true"></i> <b>{{ product.disk }} GB</b> {{ product.disktype }}</li>
                                <li class="list-group-item"><i class="fas fa-shield-alt text-danger" aria-hidden="true"></i> <b>{{ product.ddos }}</b> DDoS Protection</li>
                                <li class="list-group-item"><i class="fa fa-download text-yellow" aria-hidden="true"></i> <b>{{ product.uplink }}</b> Anbindung</li>
                                <li class="list-group-item"><i class="fas fa-wifi text-info" aria-hidden="true"></i> <b>{{ product.traffic }}</b> Traffic</li>
                                <li class="list-group-item"><i class="fa fa-cloud text-blue" aria-hidden="true"></i> <b>{{ networks.filter(i => i.type == 'IPv4').length }}</b> IPv4 Adresse</li>
                                </center>
                            </ul>
                        </div>
                    </b-col>
                    </b-row>
                </div>
                </b-form>
                                </tab>
                                <tab title="Netzwerk">
                                    <el-table class="table-responsive table"
                                    header-row-class-name="thead-light"
                                    :data="networks">

                                <el-table-column label="ID" min-width="280px">
                                    <template v-slot="{row}">
                                        {{ row._id }}
                                    </template>
                                </el-table-column>

                                <el-table-column label="Type" min-width="120px">
                                    <template v-slot="{row}">
                                        {{ row.type }}
                                    </template>
                                </el-table-column>

                                <el-table-column label="IP" min-width="200px">
                                    <template v-slot="{row}">
                                        {{ row.ip }}/{{ row.subnet }}
                                    </template>
                                </el-table-column>

                                <el-table-column label="Gateway" min-width="200px">
                                    <template v-slot="{row}">
                                        {{ row.gateway }}
                                    </template>
                                </el-table-column>
                            </el-table>
                                </tab>
                                <tab title="Verlängern">

            <b-form>
                <b-row>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4">Server Informationen</h6>
                    </b-col>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4">Server Verlängern</h6>
                    </b-col>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4">Features</h6>
                    </b-col>
                </b-row>
                <div class="">
                    <b-row>
                    <b-col lg="4">
                        <div class="card" style="width: 100%;">
                            <center class="pt-4"><h2>{{ product.name }}</h2></center>
                                <center><h1 class="card-title pt-3">{{ vserver.price }}€ <span style="font-size: 15px">/ 30 Tage</span></h1>
                                <span style="font-size: 14px"><i class="ni ni-pin-3" aria-hidden="true"></i> {{ product.location }}</span></center>
                            <ul class="list-group list-group-flush">
                                <center>
                                    <li class="list-group-item"><i class="fa fa-microchip text-purple" aria-hidden="true"></i> <b>{{ product.cores }} {{ product.ghz }}</b></li>
                                <li class="list-group-item"><i class="fa fa-memory text-green" aria-hidden="true"></i> <b>{{ product.memory }}</b> Arbeitsspeicher</li>
                                <li class="list-group-item"><i class="fa fa-hdd text-warning" aria-hidden="true"></i> <b>{{ product.disk }} GB</b> {{ product.disktype }}</li>
                                <li class="list-group-item"><i class="fas fa-shield-alt text-danger" aria-hidden="true"></i> <b>{{ product.ddos }}</b> DDoS Protection</li>
                                <li class="list-group-item"><i class="fa fa-download text-yellow" aria-hidden="true"></i> <b>{{ product.uplink }}</b> Anbindung</li>
                                <li class="list-group-item"><i class="fas fa-wifi text-info" aria-hidden="true"></i> <b>{{ product.traffic }}</b> Traffic</li>
                                <li class="list-group-item"><i class="fa fa-cloud text-blue" aria-hidden="true"></i> <b>{{ networks.filter(i => i.type == 'IPv4').length }}</b> IPv4 Adresse</li>
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
                            <select v-model="duration" class="form-control">
                                <option selected value="30">30 Tage</option>
                                <option value="60">60 Tage</option>
                                <option value="90">90 Tage</option>
                                <option value="180">180 Tage</option>
                                <option value="360">360 Tage</option>
                            </select>

                            <center class="pt-5" ><h1 style="margin-bottom: 0;">0.99€<br style="display: block; margin: 0px 0;"><span style="font-size: 13px; margin-top: 0;">Heute fälliger Gesamtbetrag</span></h1></center>
                            <a @click="extendServer()" style="width: 100%; cursor: pointer;" class="btn btn-success mt-4 text-white"><b>Jetzt Kostenpflichtig Verlängern!</b></a>
                    </b-col>
                    <b-col lg="4">
                         <div class="card" style="width: 100%;">
                            <center class="pt-4"><h2>Features</h2></center>
                            <ul class="list-group list-group-flush">
                                <center>
                                    <li class="list-group-item"><i class="fa fa-microchip text-purple" aria-hidden="true"></i> Dieser Server hat einen Intel Xeon Prozessor verbaut, für gute Performance und günstige Preise.</li>
                                    <li class="list-group-item"><i class="fa fa-memory text-green" aria-hidden="true"></i> Bei diesem Server wurde DDR3 ECC Arbeitsspeicher verbaut.</li>
                                    <li class="list-group-item"><i class="fa fa-hdd text-warning" aria-hidden="true"></i> Unsere <b>{{ product.disktype }}</b> können bis zu 2000+ MB/s</li>
                                    <li class="list-group-item"><i class="fas fa-shield-alt text-danger" aria-hidden="true"></i> <b>{{ product.ddos }}</b> DDoS Protection. Unser DDOS-Schutz ist für deinen Server aktiviert.</li>
                                    <li class="list-group-item"><i class="fa fa-download text-yellow" aria-hidden="true"></i> <b>{{ product.uplink }}</b> Anbindung. Unser Server ist mit 10 GBit/s Uplink angebunden.</li>
                                    <li class="list-group-item"><i class="fas fa-wifi text-info" aria-hidden="true"></i> <b>{{ product.traffic }}</b> Traffic. Du kannst so viel Traffic benutzen wie du willst.</li>
                                    <li class="list-group-item"><i class="fa fa-cloud text-blue" aria-hidden="true"></i> <b>1</b> IPv4 Adresse. Du erhälst von uns eine Öffentliche IPv4-Adresse.</li>
                                </center>
                            </ul>
                        </div>
                    </b-col>
                    </b-row>
                </div>
                </b-form>
                                </tab>
                                <tab title="Backups">
                                    <b-row>  
                                        <b-col lg="9"/>
                                        <b-col lg="3">
                                            <a @click="createBackup()" style="width: 100%; cursor: pointer; margin-bottom: 15px;" class="btn btn-primary text-white"><b>Backup erstellen</b></a>
                                            <vue-element-loading :active="backuploading" spinner="bar-fade-scale" color="#2dce89"/>
                                        </b-col>
                                    </b-row>
                                    <el-table class="table-responsive table"
                                        header-row-class-name="thead-light"
                                        :data="backups">

                                    <el-table-column label="Erstellt" min-width="280px">
                                        <template v-slot="{row}">
                                            {{ row.ctime | moment('DD.MM.YYYY, HH:mm') }}
                                        </template>
                                    </el-table-column>

                                    <el-table-column label="Größe" min-width="150px">
                                        <template v-slot="{row}">
                                            {{ (row.size / 1024 / 1024 / 1024).toFixed(2) }} GB
                                        </template>
                                    </el-table-column>

                                    <el-table-column label="Format" min-width="200px">
                                        <template v-slot="{row}">
                                            {{ row.format }}
                                        </template>
                                    </el-table-column>

                                    <el-table-column label="Aktion" min-width="200px">
                                        <template v-slot="{row}">
                                            <a @click="restoreBackup(row.volid)" style="color: green; cursor: pointer; font-size: 1.1rem;"><i class="ni ni-curved-next" aria-hidden="true"></i></a>
                                            <a @click="deleteBackup(row.volid)" style="padding-left: 10px; color: red; cursor: pointer; font-size: 1.4rem;"><i class="fa fa-times" aria-hidden="true"></i></a>
                                        </template>
                                    </el-table-column>
                                    </el-table>
                                </tab>
                                <tab title="Konsole (SOON)">
                                <center><iframe ref="console" src="https://prox.local.shadehost.eu:8006/?console=lxc&novnc=1&vmid=155&node=pve&cmd=" width="100%" height="600"></iframe></center>
                                </tab>
                                <tab @click="resetPassword()" title="Passwort zurücksetzen" ghost/>
                                <tab title="Docker">
                                    
                                </tab>
                            </tabs>
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
import VServerService from '../../../services/VServerService';
import { Tabs, Tab } from '@hiendv/vue-tabs'
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
import Badge from '../../../components/Badge.vue';

export default {
  components: { Tabs, Tab, DashboardStats,
    Badge,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu, },
    data() {
      return {
          vserver: null,
          status: null,
          networks: null,
          product: null,
          backups: null,
          backuploading: null,
          duration: 30,
          password: '••••••••••••',
          relativTime: 'Loading...',
          loop: null,
          loopi: 0,
      };
    },
    created() {
        this.getServer();
    },
    destroyed () {
        clearInterval(this.loop);
    },
    methods: {
        startLoop() { 
            if(this.$route.name != 'vserverview')
                return;
            this.loopi++;
            if(this.loopi == 3) {
                this.loopi = 1;
                this.getServer();
            }
            this.getRelativeServerTime()            
            this.loop = setTimeout(() => this.startLoop(), 1000)
        },
        getServer() {
            VServerService.getServer(this.$route.params.id).then(response => {
                this.vserver = response.vserver;
                this.product = response.vserver.product.data;
                this.status = response.status;
                this.networks = response.networks;
                this.backups = response.backups;
                this.vserver.traffic = this.vserver.traffic + (this.status.netin + this.status.netout)
                if(this.password != '••••••••••••') {
                    this.password = this.vserver.password;
                }
                 if(this.product.memory > 1023) {
                    this.product.memory = this.product.memory / 1024 + " GB"
                } else {
                    this.product.memory = this.product.memory + " MB"
                }
                if(this.loopi == 0)
                    this.startLoop();
            }).catch((error) => {
                this.$awn.alert(error.response.data.response.message)
                this.$router.push('/');
            });
        },
        createBackup() {
            let notifier = this.$awn;
            notifier.async(
            VServerService.createBackup(this.vserver._id),
            response => notifier.success(response.message), 
            error => notifier.alert(error.response.data.response.message),
            'Bitte warten'
            );
        },
        restoreBackup(volid) {
            let notifier = this.$awn;
            notifier.confirm(
                '<center>Bist du sicher, dass du deinen Server mit diesem Backup überschreiben willst?</center>',
                () => {
                    notifier.async(
                    VServerService.restoreBackup(this.vserver._id, volid),
                    response => notifier.success(response.message), 
                    error => notifier.alert(error.response.data.response.message),
                        'Bitte warten'
                    );
                },
                onCancel => {},
                {
                    labels: {
                        confirm: 'Achtung!'
                    }
                }
            )
        },
        deleteBackup(volid) {
            let notifier = this.$awn;
            notifier.confirm(
                '<center>Bist du sicher, dass du dieses Backup löschen willst?</center>',
                () => {
                    notifier.async(
                    VServerService.deleteBackup(this.vserver._id, volid),
                    response => notifier.success(response.message), 
                    error => notifier.alert(error.response.data.response.message),
                        'Bitte warten'
                    );
                },
                onCancel => {},
                {
                    labels: {
                        confirm: 'Achtung!'
                    }
                }
            )
        },
        extendServer() {
            let notifier = this.$awn;
            notifier.async(
            VServerService.extendServer(this.vserver._id, { duration: this.duration+"" }),
            response => notifier.success(response.message), 
            error => notifier.alert(error.response.data.response.message),
                'Bitte warten'
            );
        },
        startServer() {
            let notifier = this.$awn;
            notifier.async(
            VServerService.startServer(this.vserver._id),
            response => notifier.success(response.message), 
            error => notifier.alert(error.response.data.response.message),
                'Bitte warten'
            );
        },
        rebootServer() {
            let notifier = this.$awn;
            notifier.async(
            VServerService.rebootServer(this.vserver._id),
            response => notifier.success(response.message), 
            error => notifier.alert(error.response.data.response.message),
                'Bitte warten'
            );
        },
        shutdownServer() {
            let notifier = this.$awn;
            notifier.async(
            VServerService.shutdownServer(this.vserver._id),
            response => notifier.success(response.message), 
            error => notifier.alert(error.response.data.response.message),
                'Bitte warten'
            );
        },
        stopServer() {
            let notifier = this.$awn;
            notifier.async(
            VServerService.stopServer(this.vserver._id),
            response => notifier.success(response.message), 
            error => notifier.alert(error.response.data.response.message),
                'Bitte warten'
            );
        },
        resetPassword() {
             let notifier = this.$awn;
            notifier.confirm(
                '<center>Dein neues Passwort findest du unter dem Status Tab bei deinen Server Informationen.</center>',
                () => {
                    notifier.async(
                    VServerService.resetPassword(this.vserver._id),
                    response => notifier.success(response.message), 
                    error => notifier.alert(error.response.data.response.message),
                        'Bitte warten'
                    );
                },
                onCancel => {},
                {
                    labels: {
                        confirm: 'Passwort zurücksetzten'
                    }
                }
            )
        },
        showPassword() {
            this.password = this.vserver.password;
        },
        hidePassword() {
            this.password = '••••••••••••';
        },
        copyPassword() {  
            let textArea = document.createElement("textarea");
            textArea.value = this.vserver.password;
            // make the textarea out of viewport
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((res, rej) => {
                // here the magic happens
                document.execCommand('copy') ? res() : rej();
                textArea.remove();
            });
        },
        copyIP() {  
            let textArea = document.createElement("textarea");
            textArea.value = this.networks[0].ip;
            // make the textarea out of viewport
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            return new Promise((res, rej) => {
                // here the magic happens
                document.execCommand('copy') ? res() : rej();
                textArea.remove();
            });
        },
        getRelativeServerTime() {
            var time = ((this.vserver.paidup - new Date().getTime()) / 1000).toFixed(0);
            var stime = '';

            var years = ((time / (86400 * 365)) | 0);
            stime += years + "Y "
            time = time - ((86400 * 365) * years);
            var hours = ((time / 3600) | 0);
            var days = ((time / 86400) | 0);
            stime += days + "D "
            time = time - (86400 * days);
            var hours = ((time / 3600) | 0);
            stime += hours + "H "
            time = time - (3600 * hours);
            var minutes = ((time / 60) | 0);
            stime += minutes + "M "
            time = time - (60 * minutes);
            var seconds = (time | 0);
            stime += seconds + "S"
            time = time - seconds;

            this.relativTime = stime;
        },
    },/*
    mounted: function() {
        
        document.cookie="PVEAuthCookie=PVE%3Aroot@pam%3A615B4009%3A%3AUnzxbkyyRAcqs0DZ6M661P26GTW4HCnkF6LKTE+AwpiruEuGMlf7McOSM7vFD3bcHwMGjZfHEVq3m2pmqPBSO2DwSlHEwPl7uhgQelfdmieOI/FTm7ff/c0JolCzUOwav8LKCS+p9K3DlcuwVZAdfd41FpXd/Gukv4Q9IEz4h/b58o4XG9uanCtspd/msqgujXIVEXi3xVDa460iW3IZ6QeyHhiLlT/MD17ud9oCfPDiTQ9OQLXdVpTdw/tZJJb19eAwX2IeXGj2rw+YEKdFK1uLpg+7D3xlwknhXJG1F6107/2OkBSyw0niPCSikt0eT1esX9Ot2qjyZzpGu/oW6g%3D%3D==";

        var iframe = this.$refs.console

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://prox.local.shadehost.eu:8006/?console=lxc&novnc=1&vmid=155&node=pve&cmd=');
        xhr.onreadystatechange = handler;
        xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://local.shadehost.eu:8080/');
        xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
        xhr.setRequestHeader('CSRFPreventionToken', '6149F96B:EOM/yb5NLDI8CXTN8pLFv99/B3iz3RD/rTRl1EHEmaw');
        xhr.send();

        function handler() {
            if (this.readyState === this.DONE) {
            if (this.status === 200) {
                iframe.src = URL.createObjectURL(this.response);
            } else {
                console.error('Request failed', this);
            }
            }
        }
    }*/
}
</script>

<style>

</style>