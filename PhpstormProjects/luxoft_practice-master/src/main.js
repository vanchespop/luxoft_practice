import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueApexCharts from "vue-apexcharts";
import router from './router'


Vue.config.productionTip = false;
Vue.component("apexchart", VueApexCharts);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
