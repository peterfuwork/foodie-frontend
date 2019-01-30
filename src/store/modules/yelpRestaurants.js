import api from '../../api/yelp';
import axios from "axios";
import { printResult } from '../../services/PrintRating';

const state = {
    yelpRestaurants: [],
    restaurants:[],
    restaurant: []
};

const getters = {
    allYelpRestaurants: state => state.yelpRestaurants,
    restaurants: state => state.restaurants,
    restaurant: state => state.restaurant
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
    },

    async filterRestaurantById({ rootState, commit }, id) {
        const response = await axios.get(`http://localhost:4000/api/restaurants/${id}`)
        
        const data = response.data.map(restaurant => {
            restaurant.foods.map((food) => {
                let foodRating = 0; 
                if(food.comments.length === 0) {
                    return food;
                } else {
                    food.comments.map((comment) => {
                        comment.comment_htmlRating = printResult(comment.comment_rating);
                        return comment;
                    });
                    food.comments.map(comment => {
                        return foodRating += Number(comment.comment_rating);
                    })
                    food.totalRating = Number(foodRating);
                    return food;
                }
            });
            return restaurant;
        });
        commit('setRestaurant', data[0]);
    },
};

const mutations = {
    setYelpRestaurants: (state, yelpRestaurants) => {
        state.yelpRestaurants = yelpRestaurants;
    },
    setRestaurants: (state, restaurants) => {
        state.restaurants = restaurants;
    },
    setRestaurant: (state, restaurant) => {
        state.restaurant = restaurant;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};