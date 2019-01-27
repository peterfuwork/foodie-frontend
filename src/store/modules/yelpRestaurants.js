import api from '../../api/yelp';
import { printResult } from '../../services/PrintRating';

const state = {
    yelpRestaurants: [],
};

const getters = {
    allYelpRestaurants: state => state.yelpRestaurants
};

const actions = {
    async fetchYelpRestaurants({ commit }) {
        const response = await api.fetchYelpRestaurants();
        const data = response.data.map(restaurant => {
            restaurant.htmlRating = printResult(restaurant.rating);
            return restaurant;
        });
        commit('setYelpRestaurants', data);
    }
};

const mutations = {
    setYelpRestaurants: (state, yelpRestaurants) => {
        state.yelpRestaurants = yelpRestaurants;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};