import Config from '../util/Config'
import Axios from 'axios';


export default {
  generateURLPayPal(credentials) {
    return Axios
      .get(Config.API_URL + '/v1/charge/paypal?amount=' + credentials)
      .then(response => response.data.response);
  },
  chargeUserPayPal(credentials) {
    return Axios
      .post(Config.API_URL + '/v1/charge/paypal', credentials)
      .then(response => response.data.response);
  },
};