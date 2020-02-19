import Vue from 'vue'
import VueRouter from 'vue-router'
import Chart from "@/components/Chart";
import {withSpecificType} from '../views/withSpecificType'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: withSpecificType(Chart, 'temperature')
  },
  {
    path: '/humidity',
    component: withSpecificType(Chart, 'humidity')
  },
  {
    path: '/speed',
    component: withSpecificType(Chart, 'speed')
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router
