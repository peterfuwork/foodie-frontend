import axios from "axios";
import { printResult } from '../../services/PrintRating';

const state = {
    foods: []
};

const getters = {
    allFoods: state => state.foods
};

const actions = {
    async fetchFoods({ commit }) {
        const response = await axios.get('http://localhost:4000/api/foods');
        const data = response.data.map(food => {
            food.comments.map(comment => {
                comment.comment_htmlRating = printResult(comment.comment_rating);
                return comment;
            });
            return food;
        });
        commit('setFoods', data);
    }
};

const mutations = {
    setFoods: (state, foods) => {
        state.foods = foods;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};