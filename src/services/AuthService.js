import Config from '../util/Config'
import Axios from 'axios';


export default {
  loginUser(credentials) {
    return Axios
      .post(Config.API_URL + '/v1/auth/login', credentials)
      .then(response => response.data.response);
  },
  registerUser(credentials) {
    return Axios
      .post(Config.API_URL + '/v1/auth/register', credentials)
      .then(response => response.data.response);
  },
  confirmUser(credentials) {
    return Axios
      .post(Config.API_URL + '/v1/auth/confirm/' + credentials)
      .then(response => response.data.response);
  },
  resetPassword(credentials) {
    return Axios
      .post(Config.API_URL + '/v1/auth/resetpassword', credentials)
      .then(response => response.data.response);
  },
  getGoogleURL() {
    return Axios
      .get(Config.API_URL + '/v1/auth/google/url')
      .then(response => response.data.response);
  },
  getGoogleCallback(credentials) {
    return Axios
      .get(Config.API_URL + '/v1/auth/google/callback?code=' + credentials)
      .then(response => response.data.response);
  },
  getProfile() {
    return Axios
      .get(Config.API_URL + '/v1/auth/profile')
      .then(response => response.data.response);
  },
  updateProfile(credentials) {
    return Axios
      .post(Config.API_URL + '/v1/auth/profile', credentials)
      .then(response => response.data.response);
  }
};