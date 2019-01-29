import Vuex from 'vuex';
import Vue from 'vue';
import VueForm from 'vue-form';
import users from './modules/users';
import foods from './modules/foods';
import comments from './modules/comments';
import yelpRestaurants from './modules/yelpRestaurants';

Vue.use(Vuex);
Vue.use(VueForm);
Vue.use(VueForm, {
	inputClasses: {
  	valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
});


export default new Vuex.Store({
    modules: {
        users,
        foods,
        comments,
        yelpRestaurants
    }
});