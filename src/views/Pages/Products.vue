<template>
    <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <dashboard-stats/>
     </base-header>

     <b-container fluid class="mt--7">
      <b-row>
        <b-col>
    <b-card no-body>
        <b-card-header class="border-0">
                <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                <b-row>
            <b-col lg="8" >
            <h3 >Meine Produkte</h3>
            </b-col>
            <b-col lg="4">
            <base-input
                      type="text"
                      placeholder="Suchen"
                      @keyup="searchItem()"
                      v-model="search"
                    />
            </b-col>
                </b-row>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="currentContent">

            <el-table-column label="ID"
                             min-width="210px"
                             prop="name">
                <template v-slot="{row}">
                            <span v-if="row.vserver != null" class="font-weight-600 name mb-0 text-sm">{{row.vserver._id}}</span>
                </template>
            </el-table-column>

            <el-table-column label="Status"
                             min-width="130px"
                             prop="status">
                <template v-slot="{row}">
                    <badge v-if="row.vserver != null" class="badge-dot mr-4" type="">
                    <badge v-if="row.vserver.status == 'Online'" class="badge-dot mr-4" type="">
                        <i :class="`bg-success`"></i>
                        <span class="status" :class="`text-success`">{{row.vserver.status}}</span>
                    </badge>
                    <badge v-if="row.vserver.status == 'Installation'" class="badge-dot mr-4" type="">
                        <i :class="`bg-warning`"></i>
                        <span class="status" :class="`text-warning`">{{row.vserver.status}}</span>
                    </badge>
                    <badge v-if="row.vserver.status != 'Online' && row.vserver.status != 'Installation'" class="badge-dot mr-4" type="">
                        <i :class="`bg-danger`"></i>
                        <span class="status" :class="`text-danger`">{{row.vserver.status}}</span>
                    </badge>
                    </badge>
                </template>
            </el-table-column>

            <el-table-column label="Produkt" min-width="150px">
                <template v-slot="{row}">
                    <badge v-if="row.vserver != null" class="badge-dot mr-4" style="color: #606266" type="">
                        VServer
                    </badge>
                </template>
            </el-table-column>

             <el-table-column label="Kosten" min-width="170px">
                <template v-slot="{row}">
                    <badge v-if="row.vserver != null" class="badge-dot mr-4" style="color: #606266" type="">
                        {{ row.vserver.price }} € / 30 Tage
                    </badge>
                </template>
            </el-table-column>

            <el-table-column label="Bezahlt bis" min-width="180px">
                <template v-slot="{row}">
                    <badge v-if="row.vserver != null" class="badge-dot mr-4" style="color: #606266" type="">
                        {{ row.vserver.paidup | moment('DD.MM.YYYY, HH:mm') }} 
                    </badge>
                </template>
            </el-table-column>

            <el-table-column label="Öffnen" min-width="120px">
                <template v-slot="{row}">
                    <router-link v-if="row.vserver != null" :to="'/vserver/' + row.vserver._id" custom v-slot="{ navigate }">
                        <a @click="navigate" @keypress.enter="navigate" role="link" style="cursor: pointer"><i class="ni ni-active-40" aria-hidden="true"></i></a>
                    </router-link>
                </template>
            </el-table-column>
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination @change="value => changeTableView(value)" v-model="currentPage" :per-page="perpage" :total="total"></base-pagination>
        </b-card-footer>
    </b-card>
        </b-col>
      </b-row>
      </b-container>
    </div>
</template>
<script>
import products from '../Tables/default';
import VServerService from '../../services/VServerService';
import DashboardStats from '../Layout/DashboardStats.vue';
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
import Badge from '../../components/Badge.vue';

  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      DashboardStats,
        Badge,
    },
    data() {
      return {
        products,
        currentContent: products,
        currentPage: 1,
        perpage: 10,
        total: products.length,
        search: '',
      };
    },
    created: function() {
        this.currentPage = 1;
        this.changeTableView(1);
        VServerService.getServers().then(response => {
            this.products = response.vservers.reverse();
            this.currentContent = JSON.parse(JSON.stringify(this.products));
            this.currentContent = this.currentContent.slice(0, 10)
        })
    },
     methods: {
        changeTableView: function(value) {
            this.currentContent = JSON.parse(JSON.stringify(this.products));
            this.currentContent.splice(0, ((value - 1) * this.perpage));
            this.currentContent = this.currentContent.slice(0, 10)
            this.search = ''
        },
        searchItem: function() {
            this.currentContent = JSON.parse(JSON.stringify(this.products));
            this.currentContent = this.products.filter(i => JSON.stringify(i).toString().toLowerCase().includes(this.search.toString().toLowerCase()));
            this.currentContent = this.currentContent.slice(0, 10)
        }
    }
  }
</script>