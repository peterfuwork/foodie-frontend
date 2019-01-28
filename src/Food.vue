<template>
    <section v-if="food === undefined" class="food-single container-fluid">
        Error
    </section>
    <section v-else="food !== undefined" class="food-single container-fluid">
        <div class="row food">
            <div class="col-sm-6 col-xs-12">
                <div class="food-info">
                    <div class="info">
                        <div class="text title">
                            {{ food.food_name }}
                        </div>
                        <div class="text price">
                            ${{ food.price }}
                        </div>
                        <div v-if="food.restaurants !== undefined" class="text address">
                            {{ food.restaurants[0].address }} <br />
                            {{ food.restaurants[0].phone }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xs-12">
                <div class="food-image-wrapper">
                    <div class="totalRating" v-if="food.comments && food.comments.length > 0">
                        <span class="fa fa-star"></span>{{ Number(food.totalRating) / food.comments.length }}
                    </div>
                    <div class="rating" v-else="food.comments.length === 0">
                        No rating yet!
                    </div>
                    <img class="food-image" :src="food.food_image" />
                </div>
            </div>
            <div class="col-xs-12">
                <div  class="food-reviews">
                    <div class="comment-boxes">
                        <div class="user" v-for="comment in food.comments" v-if="food.comments.length !== 0">
                            <div class="image-name">
                                <img class="image" :src="comment.user.user_image" />
                                <div class="firstname">{{ comment.user.first_name }}</div>
                            </div>
                            <div class="rating" v-html="comment.comment_htmlRating"></div>
                            <div class="comments">
                                <div class="title">{{ comment.title }}</div>
                                <div class="message">{{ comment.message }}</div>
                            </div>
                        </div>
                        <div class="user" v-else="food.comments.length === 0">
                            No review yet!
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
        data() {
            return {
                id: this.$route.params.foodId
            }
        },
        computed: mapGetters(['food']),
        methods:  mapActions(['filterFoodById']),
        name: 'Food',
        async created() {
            await this.filterFoodById(this.id);
            console.log(this.food);
        }
    }
</script>
<style lang="scss">
$primary-color: #FCCB6F;
    .food-single {
        padding-top: 5rem;
        .food-image-wrapper {
            width: 100%;
            text-align: right;
            padding:1rem 0;
            position:relative;
            display: inline-block;
            @media(max-width:767px) {
                display: block;
                margin: 0 auto;
                max-width: 300px;
            }
            .totalRating {
                color:#000;
                background-color: $primary-color;
                position: absolute;
                top:0;
                right:0;
                margin:1rem 0;
                padding:.5rem;
                font-family: 'Noto Serif SC', serif;
                font-size: 1.8rem;
            }
            .food-image {
                max-width: 300px;
                width: 100%;
            }
        }
        .food-info {
                line-height: 1.7;
                padding:1rem;
                margin: 1rem 0;
                .info {
                    position:relative;
                        .message {
                            font-family: 'Montserrat', sans-serif;
                            font-size: .8rem;
                        }
                        .text {
                            font-family: 'Montserrat', sans-serif;
                            font-style: italic;
                            &.price {
                                font-size: 1.4rem;
                                font-style: normal;
                                font-weight: bold;
                                font-family: 'Montserrat', sans-serif;
                            }
                            &.title {
                                font-size: 2rem;
                            }
                            &.address {
                                font-size:1.2rem;
                            }
                        }
                    
                }
            }
            .food-reviews {
                .comment-boxes{
                        padding: .5rem;
                        .user {
                            padding: 1rem;
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            border-top: 1px solid #000;
                            border-left: 1px solid #000;
                            border-right: 1px solid #000;
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
                                right: .5%;
                                top: 4%;
                            }
                            .comments{
                                width: 100%;
                                .title {
                                    font-family: 'Noto Serif SC', serif;
                                    font-size: .9rem;
                                    font-weight: bold;
                                }
                            }
                            &:last-child {
                                border-bottom: 1px solid #000;
                            }
                        }
                    }
            }
    }
</style>