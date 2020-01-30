import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    systemTitle : "Registration System",
    authenticated: true,
    user: null,
    token: null,
    settings: {
      user_activities: []
    }
  },
  mutations: {
    setAppSettings(state, payload){
      state.settings = payload;
    },
    setAuthenticated(state, payload) {
      state.authenticated = payload;
    },
    setUser(state, payload){
      state.user = payload;
    },
    setToken(state, payload){
      state.token = payload;
    }
  },
  actions: {
    //TODO: Move login / api request code here?
    logout(context){
      localStorage.removeItem("ccbc_token");
      context.commit('setAuthenticated', false);
      context.commit('setUser', null);
      context.commit('setToken', null);
      router.replace("/login");
    },
    setAuthenticated(context, payload){
      context.commit('setAuthenticated', payload);
    },
    setUser(context, payload){
      context.commit('setUser', payload);
    },
    setToken(context, payload){
      context.commit('setToken', payload);
    },
    setAppSettings(context, payload){
      context.commit('setAppSettings', payload);
    }
  },
  getters: {
    getSettings(state){
      return state.settings;
    },
    isAuthenticated(state){
      return state.authenticated;
    },
    getUser(state){
      return state.user;
    },
    getToken(state){
      return state.token;
    }
  }
});
