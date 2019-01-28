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
                                    <div class="image-name">
                                        <img class="image" :src="food.comments[0].user.user_image" />
                                        <div class="firstname">{{ food.comments[0].user.first_name }}</div>
                                    </div>
                                    <div class="rating" v-html="food.comments[0].comment_htmlRating"></div>
                                    <div class="comments">
                                        <div class="title">{{ food.comments[0].title }}</div>
                                        <div class="message">{{ food.comments[0].message }}</div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="total-info">
                                <div class="total-rating">
                                    <div class="rate">{{ food.totalRating/food.comments.length }}</div>
                                    <div class="number-of-rating">( {{ food.comments.length }} people rated )</div>
                                </div>
                                <div class="links">
                                    <a href="#" class="btn">Reviews</a>
                                </div>
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
        methods:  mapActions(['fetchFoods']),
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
                text-align: center;
                padding:1rem 0;
                .food-image {
                    max-width:100%;
                }
            }
            .food-info {
                line-height: 1.7;
                padding:1rem;
                margin: 1rem 0;
                .info {
                    position:relative;
                    .comment-boxes{
                        border:1px solid #000;
                        padding: .5rem;
                        .user {
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .image-name {
                                display: block;
                                width: 100%;
                                .image {
                                    max-width:3rem;
                                    border-radius: 50%;
                                }
                                .firstname {
                                    font-family: 'Montserrat', sans-serif;
                                    font-size: .7rem;
                                    font-style:italic;
                                    display: inline-block;
                                    position: absolute;
                                    top: 16%;
                                    margin-left: .5rem;
                                }
                            }
                            .rating {
                                position: absolute;
                                right: 0;
                                top: 0;
                            }
                            .comments{
                                width: 100%;
                                .title {
                                    font-family: 'Noto Serif SC', serif;
                                    font-size: .9rem;
                                    font-weight: bold;
                                }
                            }
                            
                        }
                    }
                        .message {
                            font-family: 'Montserrat', sans-serif;
                            font-size: .8rem;
                        }
                        .text {
                            font-family: 'Montserrat', sans-serif;
                            font-style: italic;
                            &.name {
                                width: 80%;
                                margin: 0 0 1rem;
                                font-size: 1rem;
                                font-style: normal;
                                font-weight: bold;
                                font-family: 'Noto Serif SC', serif;
                            }
                            &.price {
                                padding-right: 1rem;
                                position: absolute;
                                top:0;
                                right:0;
                                font-size: .9rem;
                                font-style: normal;
                                font-family: 'Montserrat', sans-serif;
                            }
                        }
                    .total-info {
                        min-height: 13rem;
                        .total-rating {
                            text-align:center;
                            .rate {
                                font-style:italic;
                                font-family: 'Noto Serif SC', serif;
                                font-size: 2rem;
                            }
                            .number-of-rating {
                                font-size:.7rem;
                            }
                        }
                        .links {
                            text-align:center;
                            font-size:.7rem;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            .btn {
                                padding: .2rem .5rem;
                            }
                        }
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