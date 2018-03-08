// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import ImgNav from "@/components/imgNav/index";
import AppHeader from "@/components/header/index";

Vue.prototype.$axios = axios

Vue.component(AppHeader.name, AppHeader);
Vue.component("ImgNav", ImgNav);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
