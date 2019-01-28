import axios from "axios";
import { printResult } from '../../services/PrintRating';

const state = {
    foods: [],
    food: []
};

const getters = {
    allFoods: state => state.foods,
    food: state => state.food
};

const actions = {
    async fetchFoods({ commit }) {
        const response = await axios.get('http://localhost:4000/api/foods');
        const data = response.data.map((food) => {
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
        console.log(data);
        commit('setFoods', data);
    },
    async filterFoodById({ commit }, id) {
        const response = await axios.get(`http://localhost:4000/api/foods/${id}`)
        
        const data = response.data.map((food) => {
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
        commit('setFood', data[0]);
    }
};

const mutations = {
    setFoods: (state, foods) => {
        state.foods = foods;
    },
    setFood: (state, food) => {
        state.food = food;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};