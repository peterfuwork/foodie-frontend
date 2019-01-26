import Vuex from 'vuex';
import Vue from 'vue';
import users from './modules/users';
import foods from './modules/foods';
import comments from './modules/comments';
import yelpRestaurants from './modules/yelpRestaurants';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        users,
        foods,
        comments,
        yelpRestaurants
    }
});