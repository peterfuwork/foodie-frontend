<template>
    <section v-if="restaurant === undefined" class="restaurant-single container-fluid">
        Error
    </section>
    <section v-else class="restaurant-single container-fluid">
        <div class="row restaurant">
            <div class="col-sm-6 col-xs-12">
                <div class="restaurant-info">
                    <div class="info">
                        <div class="text title">
                            {{ restaurant.restaurant_name }}
                        </div>
                        <div v-if="restaurant !== undefined" class="text address">
                            {{ restaurant.address }} <br />
                            {{ restaurant.phone }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xs-12">
                <div class="restaurant-image-wrapper">
                    <img class="food-image" src="http://via.placeholder.com/600x600" />
                </div>
            </div>
            <div class="col-xs-12">
                <div class="food-reviews">
                    <div class="food-boxes" v-if="restaurant.foods.length !== 0">
                        <div class="food" v-for="food in restaurant.foods" :key="food._id">
                            <div class="image-name">
                                <router-link :to="{name: 'food', params: {foodId: food._id}}">
                                    <img class="image" :src="food.food_image" />
                                </router-link>
                                <div class="image-info">
                                    <div class="food-name">{{ food.food_name }}</div>
                                    <div class="price">${{ food.price }}</div>
                                    <div class="desc">{{ food.description }}</div>
                                </div>
                            </div>
                            <div class="rating"><span class="fa fa-star"></span> {{ food.totalRating === undefined ? "No rating yet" : (Number(food.totalRating) / food.comments.length).toFixed(2) }}</div>
                        </div>
                    </div>
                    <div v-else>
                        No food post yet!
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
                id: this.$route.params.restaurantId
            }
        },
        computed: mapGetters(['restaurant','restaurants']),
        methods:  mapActions(['filterRestaurantById']),
        name: 'Food',
        async created() {
            await this.filterRestaurantById(this.id);
        }
    }
</script>
<style lang="scss">
$primary-color: #FCCB6F;
    .restaurant-single {
        padding-top: 5rem;
        .restaurant-image-wrapper {
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
        .restaurant-info {
                line-height: 1.7;
                padding:1rem;
                margin: 1rem 0;
                .info {
                    position:relative;
                        .desc {
                            font-family: 'Montserrat', sans-serif;
                            font-size: .8rem;
                        }
                        .text {
                            font-family: 'Montserrat', sans-serif;
                            font-style: italic;
                            &.title {
                                font-size: 2rem;
                            }
                            &.price {
                                font-size: 1.4rem;
                                font-style: normal;
                                font-weight: bold;
                                font-family: 'Montserrat', sans-serif;
                            }
                            &.address {
                                font-size:1.2rem;
                            }
                        }
                    
                }
            }
            .food-reviews {
                .food-boxes{
                        margin-bottom:3rem;
                        .food {
                            padding: 1rem;
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            border-top: 1px solid #000;
                            border-left: 1px solid #000;
                            border-right: 1px solid #000;
                            .delete-btn-wrapper {
                                width:100%;
                                .delete-btn {

                                }
                            }
                            .image-name {
                                    display: flex;
                                    width: 100%;
                                    flex-direction: row;
                                .image { 
                                    max-width: 300px;
                                    width: 100%;
                                    height: 100%;
                                }
                                .image-info {
                                        display: inline-block;
                                        vertical-align: top;
                                        line-height: 1.6;
                                        margin: 0 1rem;
                                    .food-name {
                                        font-family: 'Montserrat', sans-serif;
                                        font-size: 1.3rem;
                                        font-style:italic;
                                        display: inline-block;
                                    }
                                }
                                
                            }
                            .rating {
                                font-size: 1.8rem;
                                position: absolute;
                                right: 1%;
                                top: 2%;
                            }
                            &:last-child {
                                border-bottom: 1px solid #000;
                            }
                        }
                    }
            }
    }
</style>