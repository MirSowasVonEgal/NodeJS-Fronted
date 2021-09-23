<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <dashboard-stats/>
     </base-header>

     <b-container fluid class="mt--7">
        <b-row>
            <b-col xl="12" class="order-xl-1">
            <card>
            <b-form>
                <b-row>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4 pl-4">Server Informationen</h6>
                    </b-col>
                    <div style="margin-left: auto;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-success text-white"><b>Starten</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-warning text-white"><b>Neustarten</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-danger text-white"><b>Herunterfahren</b></a>
                    </div>
                    <div style="margin-left: 10px;  margin-right: 0;">
                        <a style="width: 100%; cursor: pointer;" class="btn btn-danger text-white"><b>Stoppen</b></a>
                    </div>
                </b-row>
                <div class="pl-lg-4">
                    <b-row>
                        <b-col lg="12">
                              <tabs>
                                <tab title="Status">
                                <b-form>
                <b-row>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4 pl-4">Server Informationen</h6>
                    </b-col>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4 pl-3">Live Statistiken</h6>
                    </b-col>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4 pl-2">Konfiguration</h6>
                    </b-col>
                </b-row>
                <div class="pl-lg-4">
                    <b-row>
                    <b-col lg="4">
                        <div class="card" style="width: 100%;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: <b>40f15997-8c98-4d6f-bf9e-91eb4952b664</b></li>
                                <li class="list-group-item">Server-ID: <b>136</b></li>
                                <li class="list-group-item">Status:
                                    <badge v-if="'Online' == 'Online'" class="badge-dot mr-4" type="">
                                    <i :class="`bg-success`"></i>
                                    <span class="status" :class="`text-success`">Online</span>
                                    </badge>
                                    <badge v-if="'Online' == 'Installation'" class="badge-dot mr-4" type="">
                                        <i :class="`bg-warning`"></i>
                                        <span class="status" :class="`text-warning`">Online</span>
                                    </badge>
                                    <badge v-if="'Online' == 'Offline'" class="badge-dot mr-4" type="">
                                        <i :class="`bg-danger`"></i>
                                        <span class="status" :class="`text-danger`">Online</span>
                                    </badge>
                                </li>
                                <li class="list-group-item">Betriebssystem: <b>Debian-10</b></li>
                                <li class="list-group-item">Node: <b>Node-02</b></li>
                                <li class="list-group-item">Haupt-IP-Adresse: <b>192.168.2.100</b></li>
                                <li class="list-group-item">User: <b>root</b></li>
                                <li class="list-group-item">Passwort: •••••••••••• <i class="fa fa-eye" aria-hidden="true"></i> <i class="fa fa-clone" aria-hidden="true"></i></li>
                                <li class="list-group-item">Preis: <b>0.99€ / 30 Tage</b></li>
                                <li class="list-group-item">Bestellt am: <b>29.05.2021 21:47</b></li>
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
                                            <center><span>29.10.2021 21:47 (10 Tage und 5 Stunden)</span></center>
                                            </div>
                                        </div>
                                        <base-progress
                                                        type="yellow"
                                                        :value=100
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
                                            <span>6%</span>
                                            </div>
                                        </div>
                                        <base-progress
                                                        type="danger"
                                                        :value=6
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
                                            <span>31%</span>
                                            </div>
                                        </div>
                                        <base-progress
                                                        type="primary"
                                                        :value=31
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
                                            <span>64%</span>
                                            </div>
                                        </div>
                                        <base-progress
                                                        type="warning"
                                                        :value=64
                                                        size="lg">
                                                        <slot label>
                                                        </slot>
                                        </base-progress>
                                        </li>
                                    <li class="list-group-item">
                                        <div class="progress-primary">
                                            <div class="progress-label">
                                            <span>Traffic Unlimited</span>
                                            </div>
                                            <div class="progress-percentage">
                                            <span></span>
                                            </div>
                                        </div>
                                        <base-progress
                                                        type="success"
                                                        :value=100
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
                            <center class="pt-4"><h2>LXC-S01</h2></center>
                                <center><h1 class="card-title pt-3">0.99€ <span style="font-size: 15px">/ 30 Tage</span></h1>
                                <span style="font-size: 14px"><i class="ni ni-pin-3" aria-hidden="true"></i> Niederlande | Skylink</span></center>
                            <ul class="list-group list-group-flush">
                                <center>
                                    <li class="list-group-item"><i class="fa fa-microchip text-purple" aria-hidden="true"></i> <b>1</b> Kern @ 3,00+ GHz</li>
                                    <li class="list-group-item"><i class="fa fa-memory text-green" aria-hidden="true"></i> <b>1 GB</b> Arbeitsspeicher</li>
                                    <li class="list-group-item"><i class="fa fa-hdd text-warning" aria-hidden="true"></i> <b>20 GB</b> NVMe SSD</li>
                                    <li class="list-group-item"><i class="fas fa-shield-alt text-danger" aria-hidden="true"></i> <b>Combahton</b> DDoS Protection</li>
                                    <li class="list-group-item"><i class="fa fa-download text-yellow" aria-hidden="true"></i> <b>2 GBit/s</b> Shared Anbindung</li>
                                    <li class="list-group-item"><i class="fas fa-wifi text-info" aria-hidden="true"></i> <b>Unlimited</b> Traffic</li>
                                    <li class="list-group-item"><i class="fa fa-cloud text-blue" aria-hidden="true"></i> <b>1</b> IPv4 Adresse/n</li>
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
                                    :data="[{ ip: '192.168.2.100'}]">
                                <el-table-column label="ID"
                                                min-width="170px"
                                                prop="name"
                                                >
                                    <template>
                                            <b-media-body>
                                                <span class="font-weight-600 name mb-0 text-sm">bd432431-8024-4584-8755-3d6c4f66375f</span>
                                            </b-media-body>
                                    </template>
                                </el-table-column>

                                <el-table-column label="Type" min-width="120px">
                                    IPv4
                                </el-table-column>

                                <el-table-column label="IP" min-width="120px">
                                    192.168.2.100/24
                                </el-table-column>

                                <el-table-column label="Gateway" min-width="120px">
                                    192.168.2.1
                                </el-table-column>
                            </el-table>
                                </tab>
                                <tab title="Verlängern">

            <b-form>
                <b-row>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4 pl-4">Server Informationen</h6>
                    </b-col>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4 pl-3">Server Verlängern</h6>
                    </b-col>
                    <b-col lg="4">
                        <h6 class="heading-small text-muted mb-4 pl-2">Features</h6>
                    </b-col>
                </b-row>
                <div class="pl-lg-4">
                    <b-row>
                    <b-col lg="4">
                        <div class="card" style="width: 100%;">
                            <center class="pt-4"><h2>LXC-S01</h2></center>
                                <center><h1 class="card-title pt-3">0.99€ <span style="font-size: 15px">/ 30 Tage</span></h1>
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
                                </tab>
                                <tab title="Backup (SOON)" ghost>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                                </tab>
                                <tab title="Konsole (SOON)" ghost>
                                <center><iframe ref="console" src="https://prox.local.shadehost.eu:8006/?console=LXC&novnc=1&vmid=144&node=pve&cmd=" width="100%" height="600"></iframe></center>
                                </tab>
                                <tab title="One Click Installer (SOON)" ghost>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                                </tab>
                                <tab title="Passwort zurücksetzen (SOON)" ghost>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                                </tab>
                                <tab title="Up-/Downgrade (SOON)" ghost>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
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
import { Tabs, Tab } from '@hiendv/vue-tabs'
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'

export default {
  components: { Tabs, Tab, DashboardStats,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu, },
    mounted: function() {
        document.cookie="PVEAuthCookie=PVE:7367cd8e-710f-4451-9dc4-90881cf158b2@pve:6149F96B::v8qJKXQ+mWtKktcVwYPdGDKpIR6US/HHIBHF9RpC77uoGRYWaUiNB+8T+SITXCyHL3spmH4C6jHoqGUpf6m26/b8VvVNiBD9clXkLdvNG77WU8hW0dLUmy9Yqfs9JM1MWh+xtyku5oTd6JKdiSFCrl89xqeW97Pp10JRN6jmDKr4ybL9YqXBTiZNGSYPg/AUGqQZEZfXOPGji9Qblr65Af2EQrrGK0uEuDKYxZ+hQS+gCFf5yeknCT7pn4QQ7trYckhlLmQoMOt0V0QcNITitsSrJHJHQD4iwwB6blEjs801eus65bdvKqFheTgbOTR/aiz7od7uLe4I4ii4oI22Yw==;domain=local.shadehost.eu";

        var iframe = this.$refs.console

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://prox.local.shadehost.eu:8006/?console=LXC&novnc=1&vmid=144&node=pve&cmd=');
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
    }
}
</script>

<style>

</style>