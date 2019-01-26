const state = {
    foods: []
}

const getters = {
    allFoods: state => state.foods
};

const actions = {
    fetchFoods () {}
};

const mutations = {
    setFoods: (state, foods) => {
        state.foods = foods;
    }
};