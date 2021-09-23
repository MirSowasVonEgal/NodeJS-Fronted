import Config from '../util/Config'
import Axios from 'axios';


export default {
  getInvoices() {
    return Axios
      .get(Config.API_URL + '/v1/invoice')
      .then(response => response.data.response);
  },
  getInvoice(credentials) {
    return Axios
      .get(Config.API_URL + '/v1/invoice/' + credentials, {
        responseType: 'arraybuffer',
        headers: { 'Accept': 'application/pdf' } })
      .then(response => response.data);
  },
};