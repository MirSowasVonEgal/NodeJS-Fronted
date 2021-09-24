import Config from '../util/Config'
import Axios from 'axios';


export default {
  getTickets() {
    return Axios
      .get(Config.API_URL + '/v1/ticket')
      .then(response => response.data.response);
  },
  getTicket(credentials) {
    return Axios
      .get(Config.API_URL + '/v1/ticket/' + credentials)
      .then(response => response.data.response);
  },
  createTicket(credentials) {
    return Axios
      .post(Config.API_URL + '/v1/ticket/', credentials)
      .then(response => response.data.response);
  },
  updateTicket(id, credentials) {
    return Axios
      .put(Config.API_URL + '/v1/ticket/' + id, credentials)
      .then(response => response.data.response);
  },
};