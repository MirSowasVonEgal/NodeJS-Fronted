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
            <h3 >Transaktionen</h3>
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
                             min-width="400px"
                             prop="name">
                <template v-slot="{row}">
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{ row._id }}</span>
                        </b-media-body>
                </template>
            </el-table-column>

            <el-table-column label="Status"
                             min-width="120px"
                             prop="status">
                <template v-slot="{row}">
                    <badge v-if="row.status == 'Bezahlt'" class="badge-dot mr-4" type="">
                        <i :class="`bg-success`"></i>
                        <span class="status" :class="`text-success`">{{row.status}}</span>
                    </badge>
                    <badge v-else class="badge-dot mr-4" type="">
                        <i :class="`bg-danger`"></i>
                        <span class="status" :class="`text-danger`">{{row.status}}</span>
                    </badge>
                </template>
            </el-table-column>

             <el-table-column label="Betrag" min-width="150px">
                  <template v-slot="{row}">
                    {{ row.amount }}€
                  </template>
            </el-table-column>

            <el-table-column label="Produkt" min-width="150px">
                <template v-slot="{row}">
                    {{ row.product }}
                </template>
            </el-table-column>

            <el-table-column label="Datum" min-width="200px">
                <template v-slot="{row}">
                    {{ new Date(Number(row.created)) | moment('DD.MM.YYYY, HH:mm') }}
                </template>
            </el-table-column>

            <el-table-column label="PDF" min-width="100px">
                <template v-slot="{row}">
                <a @click="downloadPDF(row._id)" style="cursor: pointer"><i class="fa fa-file-download"></i></a>
                <vue-element-loading :active="choice == row._id" spinner="bar-fade-scale" color="#2dce89"/>
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
      <a ref="download" style="display:none"></a>
    </div>
</template>
<script>
import invoices from '../Tables/default'
import InvoiceService from '../../services/InvoiceService';
import DashboardStats from '../Layout/DashboardStats.vue';

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
        invoices,
        currentContent: invoices,
        currentPage: 1,
        perpage: 10,
        total: invoices.length,
        search: '',
        choice: ''
      };
    },
    created: function() {
        this.currentPage = 1;
        this.changeTableView(1);
        InvoiceService.getInvoices().then(response => {
            this.invoices = response.invoices.reverse();
            this.currentContent = JSON.parse(JSON.stringify(this.invoices));
            this.currentContent = this.currentContent.slice(0, 10)
        })
    },
     methods: {
        changeTableView: function(value) {
            this.currentContent = JSON.parse(JSON.stringify(this.invoices));
            this.currentContent.splice(0, ((value - 1) * this.perpage));
            this.currentContent = this.currentContent.slice(0, 10)
            this.search = ''
        },
        searchItem: function() {
            this.currentContent = JSON.parse(JSON.stringify(this.invoices));
            this.currentContent = this.invoices.filter(i => JSON.stringify(i).toString().toLowerCase().includes(this.search.toString().toLowerCase()));
            this.currentContent = this.currentContent.slice(0, 10)
        },
        downloadPDF: function(id) {
            if(this.choice != '') return;
            this.choice = id;
            InvoiceService.getInvoice(id).then(response => {
                this.choice = '';
                var anchor = this.$refs.download;
                var windowUrl = window.URL || window.webkitURL;
                var url = windowUrl.createObjectURL(new Blob([response], { type: "application/pdf"}));
                anchor.href = url;
                anchor.download = 'ShadeHost-Rechnung - ' + id + '.pdf';
                anchor.click();
                windowUrl.revokeObjectURL(url);
            })
        }
    }
  }
</script>