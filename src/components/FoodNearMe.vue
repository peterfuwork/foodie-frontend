<template>
    <section class="food-near-me">
        <div class="row food" v-for="food in allFoods">
            <div class="col-sm-4 col-xs-12">
                <div class="food-image-wrapper">
                    <img class="food-image" :src="food.food_image" />
                </div>
            </div>
            <div class="col-sm-8 col-xs-12">
                <div class="food-info">
                    <div class="info row">
                        <div class="col-sm-8">
                            <div class="name text"> 
                                {{ food.food_name }}
                            </div>
                            <div class="price text"> 
                                ${{ food.price }}
                            </div>
                            <div class="comment-boxes">
                                <div class="user">
                                    <img class="image" :src="food.comments[0].user.user_image" />
                                    <div class="firstname">{{ food.comments[0].user.first_name }}</div>
                                    <div class="rating" v-html="food.comments[0].comment_htmlRating"></div>
                                </div>
                                <div class="title">{{ food.comments[0].title }}</div>
                                <div class="message">{{ food.comments[0].message }}</div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="links">
                                <a href="#" class="btn"><span class="fa fa-pencil"></span> Add Review</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'FoodNearMe',
        computed: mapGetters(['allFoods']),
        methods: mapActions(['fetchFoods']),
        async created() {
            await this.fetchFoods();
        }
    }
</script>
<style lang="scss">
    .food-near-me {
        .food {
            margin: 0 1rem;
            border-top: 1px solid #000;
            border-right: 1px solid #000;
            border-left: 1px solid #000;
            .food-image-wrapper {
                padding:1rem 0;
                .food-image {
                    max-width:100%;
                }
            }
            .food-info {
                line-height: 1.7;
                padding:1rem;
                .info {
                    position:relative;
                    .comment-boxes{
                        border:1px solid #000;
                        padding: .5rem;
                        .user {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                            align-items: center;
                            .image {
                                max-width:3rem;
                            }
                            .firstname {
                                font-family: 'Montserrat', sans-serif;
                                font-size: .7rem;
                                font-style:italic;
                            }
                            .title {
                                font-family: 'Noto Serif SC', serif;
                                font-size: .9rem;
                                font-weight: bold;
                            }
                        }
                        
                        .message {
                            font-family: 'Montserrat', sans-serif;
                            font-size: .7rem;
                        }
                        .text {
                            font-family: 'Montserrat', sans-serif;
                            font-style: italic;
                            font-size: 1rem;
                            &.name {
                                width: 80%;
                                font-size: 1.2rem;
                                font-style: normal;
                                font-weight: bold;
                                font-family: 'Noto Serif SC', serif;
                            }
                            &.price {
                                position: absolute;
                                top:0;
                                right:0;
                                font-size: 1.25rem;
                                font-style: normal;
                                font-family: 'Montserrat', sans-serif;
                            }
                        }
                    }
                    .links {
                        text-align:right;
                    }
                }
            }
            &:first-child {
                margin-top:3rem;
            }
            &:last-child {
                border-bottom: 1px solid #000;
            }
        }
    }
</style>