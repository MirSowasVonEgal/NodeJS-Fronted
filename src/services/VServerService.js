import Config from '../util/Config'
import Axios from 'axios';


export default {
  orderServer(id, credentials) {
    return Axios
      .post(Config.API_URL + '/v1/vserver/' + id, credentials)
      .then(response => response.data.response);
  },
  getServers() {
    return Axios
      .get(Config.API_URL + '/v1/vserver/')
      .then(response => response.data.response);
  },
  getServer(id) {
    return Axios
      .get(Config.API_URL + '/v1/vserver/' + id)
      .then(response => response.data.response);
  },
  startServer(id) {
    return Axios
      .post(Config.API_URL + '/v1/vserver/' + id + '/start')
      .then(response => response.data.response);
  },
  stopServer(id) {
    return Axios
      .post(Config.API_URL + '/v1/vserver/' + id + '/stop')
      .then(response => response.data.response);
  },
  shutdownServer(id) {
    return Axios
      .post(Config.API_URL + '/v1/vserver/' + id + '/shutdown')
      .then(response => response.data.response);
  },
  rebootServer(id) {
    return Axios
      .post(Config.API_URL + '/v1/vserver/' + id + '/reboot')
      .then(response => response.data.response);
  },
  extendServer(id) {
    return Axios
      .post(Config.API_URL + '/v1/vserver/' + id + '/extend')
      .then(response => response.data.response);
  },
};