import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Category from './Category.vue';
import Food from './Food.vue';
import store from './store';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/',
      name: 'category',
      component: Category, 
      props: (route) => (
        console.log(route),
        {...route.params}
      )
    },
    { 
      path: '/food/:foodId',
      name: 'food', 
      component: Food,
      props: (route) => (
        console.log(route),
        {...route.params}
      )
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
