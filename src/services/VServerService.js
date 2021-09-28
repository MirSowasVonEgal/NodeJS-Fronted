import Config from '../util/Config'
import Axios from 'axios';


export default {
  orderServer(id, credentials) {
    return Axios
      .post(Config.API_URL + '/v1/vserver/' + id, credentials)
      .then(response => response.data.response);
  },
};