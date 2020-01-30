import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue';
import vOutsideEvents from 'vue-outside-events';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/style.css';
import './assets/css/font-awesome.min.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(vOutsideEvents);

new Vue({
  router,
  store,
  render: h => h(App),
  provide: function(){
    return{
      eventBus: new Vue()
    }
  }
}).$mount("#app");
