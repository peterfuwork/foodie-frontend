import axios from "axios";

const state = {
    comments: [],
    comment: []
};

const getters = {
    comments: state => state.comments,
    comment: state => state.comment
};

const actions = {
    fieldClassName(field) {
        if(!field) {
            return '';
        }
        if((field.$touched || field.$submitted) && field.$valid) {
            return 'has-success';
        }
        if((field.$touched || field.$submitted) && field.$invalid) {
            return 'has-danger';
        }
    },
    onSubmitMessageForm({ rootState, commit }, formProps) {
        axios.post(`http://localhost:4000/api/comments/${formProps.userId}/${formProps.foodId}`, 
        {
            "title": formProps.title,
            "message": formProps.message,
            "comment_rating": formProps.rating,
            "foodId": formProps.foodId,
            "userId": formProps.userId
        })
        .then(response => {
            return response.data;
        })
        .then(data => {

            // reload the page.
            window.location.reload(false); 
        });
    },
    onClickDelete({commit}, event) {
        event.preventDefault();
        const foodId = event.target.dataset.foodid;
        const commentId = event.target.dataset.commentid;

        axios.delete(`http://localhost:4000/api/comments/${foodId}/${commentId}`)
        .then(response => {
            return response.data;
        })
        .then(data => {
            // reload the page.
            window.location.reload(false); 
        });
        
    }
    
};

const mutations = {
    setComments: (state, comments) => {
        state.comments = comments
    },
    setComment: (state, comment) => {
        state.comment = comment
    }

};

export default {
    state,
    getters,
    actions,
    mutations
};