import axios from "axios";
import { printResult } from '../../services/PrintRating';
import main from '../../main';

const state = {
    foods: [],
    food: [],
    restaurantYelpId: '',
    restaurantYelpPhone: '',
    search: '',
    filteredFoods: []
};

const getters = {
    foods: state => state.foods,
    food: state => state.food,
    restaurantYelpId: state => state.restaurantYelpId,
    restaurantYelpPhone: state => state.restaurantYelpPhone,
    search: state => state.search,
    filteredFoods: state => state.filteredFoods
};

const actions = {

    onSearch({ rootState, commit }, event) {
        const filteredFood = rootState.foods.foods.filter((food) => {
            console.log(food)
            return food.food_name.trim().toLowerCase().match(rootState.foods.search) || food.category[0].trim().toLowerCase().match(rootState.foods.search);
        });
        commit('setSearch', event.target.value);
        commit('setFilteredFoods', filteredFood);
    },

    async fetchFoods({rootState, commit }) {
        const response = await axios.get('https://foodie-g102.herokuapp.com/api/foods');
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
        console.log(rootState);
        commit('setFoods', data);
        commit('setFilteredFoods', data);
    },
    async filterFoodById({ rootState, commit }, id) {
        const response = await axios.get(`https://foodie-g102.herokuapp.com/api/foods/${id}`)
        
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
        console.log(rootState)
        commit('setFood', data[0]);
    },

    onClickPostMenu({ commit }, event) {
        commit('setRestaurantYelpId', event.target.dataset.yelpid)
        commit('setRestaurantYelpPhone', event.target.dataset.yelpphone)
    },
    onSubmitMenuForm({rootState, commit}, formProps) {
        const category = [];
        category.push(formProps.model.category);

        let is_Spicy = null;
        if(formProps.model.is_Spicy === "no") {
            is_Spicy = false;
        } else if (formProps.model.is_Spicy === "yes"){
            is_Spicy = true;
        }

        const restaurantsInDB = rootState.yelpRestaurants.restaurants;
        const restaurantsInYelp = rootState.yelpRestaurants.yelpRestaurants;

        const arrayOfYelpRestaurant = rootState.yelpRestaurants.yelpRestaurants;
        const clickRestaurantId = rootState.foods.restaurantYelpId;
        const clickRestaurantPhone = rootState.foods.restaurantYelpPhone;
        const findClickRestaurantObj = arrayOfYelpRestaurant.filter(restaurant => restaurant.id === clickRestaurantId);
            
        // we compare phone number to determine do we alreay have this restaurant in our DB.;
        const result = restaurantsInDB.filter(o1 => o1.phone === clickRestaurantPhone);
        console.log('result', result);


        // if we cannot find it create a restaurant
        if(result.length === 0) {
            // loop through the address
            let full_address = '';
            for(let i = 0; i<findClickRestaurantObj[0].location.display_address.length; i++) {
                full_address = findClickRestaurantObj[0].location.display_address[i] + ' ';
            };
            
            //create restaurant
            axios.post('https://foodie-g102.herokuapp.com/api/restaurants', {
                "restaurant_name": findClickRestaurantObj[0].name,
                "address": full_address,
                "phone": findClickRestaurantObj[0].display_phone,
                "type": findClickRestaurantObj[0].categories[0].title
            })
            .then(response => {
                return response.data      
            })
            .then(restaurant => {
                const formObj = {
                    "food_name": formProps.model.food_name,
                    "price": formProps.model.price,
                    "food_image": formProps.model.food_image,
                    "category": category,
                    "description": formProps.model.description,
                    "is_Spicy": is_Spicy,
                    "userId": '5c4f387b9949cd0284a17621',
                    "restaurantId": restaurant._id
                }
                console.log('formObj', formObj)
                
                axios.post(`https://foodie-g102.herokuapp.com/api/foods/${formObj.userId}/${formObj.restaurantId}`, formObj)
                .then(response => {
                    return response.data;
                })
                .then(data => {
                    console.log('data', data);
                    main._router.push('/');
                    window.location.reload(false);
                });
            })
        } 
        else if(result.length > 0) {
        // if the restaurant alreay existed in our DB
        // push food to current restaurant property.
            const formObj = {
                "food_name": formProps.model.food_name,
                "price": formProps.model.price,
                "food_image": formProps.model.food_image,
                "category": category,
                "description": formProps.model.description,
                "is_Spicy": is_Spicy,
                "userId": '5c4f387b9949cd0284a17621',
                "restaurantId": result[0]._id
            }
            axios.post(`https://foodie-g102.herokuapp.com/api/foods/${formObj.userId}/${formObj.restaurantId}`, formObj)
            .then(response => {
                return response.data;
            })
            .then(data => {
                console.log('data', data);
                main._router.push('/');
                window.location.reload(false);
            });
        }
    }
};

const mutations = {
    setFoods: (state, foods) => {
        state.foods = foods;
    },
    setFood: (state, food) => {
        state.food = food;
    },
    setRestaurantYelpId: (state, restaurantYelpId) => {
        state.restaurantYelpId = restaurantYelpId;
    },
    setRestaurantYelpPhone: (state, restaurantYelpPhone) => {
        state.restaurantYelpPhone = restaurantYelpPhone;
    },
    setSearch: (state, search) => {
        state.search = search;
    },
    setFilteredFoods: (state, filteredFoods) => {
        state.filteredFoods = filteredFoods;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};