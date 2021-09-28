import Config from '../util/Config'
import Axios from 'axios';


export default {
  getOSs() {
    return Axios
      .get(Config.API_URL + '/v1/os')
      .then(response => response.data.response);
  },
};