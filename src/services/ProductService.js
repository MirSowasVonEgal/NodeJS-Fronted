import Config from '../util/Config'
import Axios from 'axios';


export default {
  getProduct(id) {
    return Axios
      .get(Config.API_URL + '/v1/product/' + id)
      .then(response => response.data.response);
  },
};