import Vue from 'vue';
import App from './App.vue';

// 导入路由对象
// import router from './routes/index';
import router from './routes';

Vue.config.productionTip = false




new Vue({
  router,//过载路由
  render: h => h(App),//立即加载app.vue组件
}).$mount('#app');
