import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入适配
import 'lib-flexible/flexible';


// 全局组件注册
import './utils/component-global-register.js';
// 全局组件建议文件命名格式 xxx-xxx


// 引入 swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
Vue.use(VueAwesomeSwiper);


// 引入vant
import {Button, Picker, Popup, Toast, Tabbar, TabbarItem } from 'vant';
Vue.use(Button);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(TabbarItem);

import Loading from './components/loading';
Vue.use(Loading);

import PickerOther from './components/picker-other';
Vue.use(PickerOther);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
