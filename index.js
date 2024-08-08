import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    token: localStorage.getItem('token') || '',
    user: {},
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    authSuccess(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = '';
      state.user = {};
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('http://localhost:5000/api/products');
      commit('setProducts', response.data);
    },
    async addProduct({ state }, product) {
      await axios.post('http://localhost:5000/api/products', product, {
        headers: { 'x-auth-token': state.token },
      });
    },
    async deleteProduct({ state, dispatch }, id) {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { 'x-auth-token': state.token },
      });
      dispatch('fetchProducts');
    },
    async login({ commit }, user) {
      const response = await axios.post('http://localhost:5000/api/auth/login', user);
      const token = response.data.token;
      localStorage.setItem('token', token);
      commit('authSuccess', token);
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      commit('logout');
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
  }
});
