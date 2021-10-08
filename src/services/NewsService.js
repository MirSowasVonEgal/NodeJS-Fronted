import Config from '../util/Config'
import Axios from 'axios';


export default {
  getNews() {
    return Axios
      .get(Config.API_URL + '/v1/news')
      .then(response => response.data.response);
  },
};