import api from '../../api/yelp';

const state = {
    yelpRestaurants: [],
};

const getters = {
    allYelpRestaurants: state => state.yelpRestaurants
};

const actions = {
    fetchYelpRestaurants(lat, long) {
        api.fetchYelpRestaurants(lat, long);
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