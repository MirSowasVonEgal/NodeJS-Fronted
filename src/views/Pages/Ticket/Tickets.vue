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
            <b-col lg="7" >
            <h3 >Tickets</h3>
            </b-col>
            <b-col lg="3">
            <base-input
                      type="text"
                      placeholder="Suchen"
                      @keyup="searchItem()"
                      v-model="search"
                    />
            </b-col>
            <b-col lg="2" style="width: 100%; height: 100%">
              <router-link to="/ticket/create" custom v-slot="{ navigate }" role="menuitem">
                <a @click="navigate" @keypress.enter="navigate" role="link" href="#!" style="padding: 11px; width: 100%; height: 100%" class="btn btn-sm btn-primary">Ticket erstellen</a>
              </router-link>
            </b-col>
                </b-row>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="currentContent">
            <el-table-column label="Titel"
                             min-width="250px"
                             prop="name">
                <template v-slot="{row}">
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.title}}</span>
                        </b-media-body>
                </template>
            </el-table-column>

            <el-table-column label="Status"
                             min-width="120px"
                             prop="status">
                <template v-slot="{row}">
                    <div v-if="!row.closed">
                      <badge v-if="row.status == 'Offen'" class="badge-dot mr-4" type="">
                          <i :class="`bg-success`"></i>
                          <span class="status" :class="`text-success`">{{row.status}}</span>
                      </badge>
                      <badge v-if="row.status == 'Beantwortet'" class="badge-dot mr-4" type="">
                          <i :class="`bg-yellow`"></i>
                          <span class="status" :class="`text-yellow`">{{row.status}}</span>
                      </badge>
                    </div>
                    <div v-else>
                      <badge class="badge-dot mr-4" type="">
                          <i :class="`bg-danger`"></i>
                          <span class="status" :class="`text-danger`">Geschlossen</span>
                      </badge>
                    </div>
                </template>
            </el-table-column>

            <el-table-column label="Datum" min-width="200px">
                <template v-slot="{row}">
                    {{ new Date(Number(row.lastupdate)) | moment('DD.MM.YYYY, HH:mm') }}
                </template>
            </el-table-column>

            <el-table-column label="View" min-width="150px">
                <template v-slot="{row}">
                  <router-link :to="'/ticket/' + row._id" custom v-slot="{ navigate }">
                      <a @click="navigate" @keypress.enter="navigate" role="link" style="cursor: pointer"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
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
import tickets from '../../Tables/default'
import DashboardStats from '../../Layout/DashboardStats.vue';
import TicketService from '../../../services/TicketService'
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'

  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      DashboardStats,
    },
    data() {
      return {
        tickets,
        currentContent: tickets,
        currentPage: 1,
        perpage: 10,
        total: tickets.length,
        search: '',
      };
    },
    created() {
        this.currentPage = 1;
        this.changeTableView(1);
        TicketService.getTickets().then(response => {
            response.tickets.sort((a, b) => b.closed - a.closed);
            this.tickets = response.tickets.reverse();
            this.currentContent = JSON.parse(JSON.stringify(this.tickets));
            this.currentContent = this.currentContent.slice(0, 10)
        })
    },
     methods: {
        changeTableView: function(value) {
            this.currentContent = JSON.parse(JSON.stringify(this.tickets));
            this.currentContent.splice(0, ((value - 1) * this.perpage));
            this.currentContent = this.currentContent.slice(0, 10)
            this.search = ''
        },
        searchItem: function() {
            this.currentContent = JSON.parse(JSON.stringify(this.tickets));
            this.currentContent = this.tickets.filter(i => JSON.stringify(i).toString().toLowerCase().includes(this.search.toString().toLowerCase()));
            this.currentContent = this.currentContent.slice(0, 10)
        }
    }
  }
</script>