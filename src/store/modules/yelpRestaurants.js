import api from '../../api/yelp';
import axios from "axios";
import { printResult } from '../../services/PrintRating';

const state = {
    yelpRestaurants: [],
    restaurants:[]
};

const getters = {
    allYelpRestaurants: state => state.yelpRestaurants,
    restaurants: state => state.restaurants
};

const actions = {
    async fetchYelpRestaurants({ commit }) {
        const response = await api.fetchYelpRestaurants();
        const data = response.data.map(restaurant => {
            restaurant.htmlRating = printResult(restaurant.rating);
            return restaurant;
        });
        commit('setYelpRestaurants', data);
    },

    async fetchRestaurants({ commit }) {
        const response = await axios.get('http://localhost:4000/api/restaurants');
        const data = response.data;
        commit('setRestaurants', data);
    }
};

const mutations = {
    setYelpRestaurants: (state, yelpRestaurants) => {
        state.yelpRestaurants = yelpRestaurants;
    },
    setRestaurants: (state, restaurants) => {
        state.restaurants = restaurants;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};