import Axios from 'axios';
import router from '../../routes/router';

var getDefaultState = () => {
    return {
      token: '',
      user: {
        role: {
          fullname: ''
        }
      },
      balance: 0,
    };
};
var state = {
  token: '',
  user: {
    role: {
      fullname: '',
    },
    balance: 0,
  }
}
var getters = {
    isLoggedIn: state => {
      return state.token;
    },
    getUser: state => {
      return state.user;
    }
}
var mutations = {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET: state => {
      Object.assign(state, getDefaultState());
    }
}
var actions = {
    login: ({ commit, dispatch }, { token, user }) => {
      commit('SET_TOKEN', token);
      commit('SET_USER', user);
      state.token = token;
      state.user = user;
      localStorage.setItem('token', token)
      // set auth header
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout: ({ commit }) => {
      commit('RESET', '');
      localStorage.removeItem('token');
      router.push("/login")
    },
    user: ({ commit, dispatch }, user) => {
      commit('SET_USER', user);
    },
}

export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations,
}