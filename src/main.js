import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Category from './Category.vue';
import Food from './Food.vue';
import Restaurant from './Restaurant.vue';
import Restaurants from './Restaurants.vue';
import PostMenuForm from './components/PostMenuForm.vue';
import store from './store';


Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { 
      path: '/',
      name: 'category',
      component: Category, 
      props: (route) => (
        {...route.params}
      )
    },
    { 
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants, 
      props: (route) => (
        {...route.params}
      )
    },
    { 
      path: '/food/:foodId',
      name: 'food', 
      component: Food,
      props: (route) => (
        {...route.params}
      )
    },
    { 
      path: '/postMenuForm',
      name: 'postMenuForm', 
      component: PostMenuForm,
      props: (route) => (
        {...route.params}
      )
    },
    { 
      path: '/restaurant/:restaurantId',
      name: 'restaurant', 
      component: Restaurant,
      props: (route) => (
        {...route.params}
      )
    }
  ]
});

const vueProject = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

export default vueProject;
