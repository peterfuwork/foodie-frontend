<template>
    <section v-if="allYelpRestaurants !== undefined" class="restaurants-column">
        <div class="row restaurant"  v-for="yelpRestaurant in allYelpRestaurants">
            <div class="col-xs-12 no-padding">
                <div class="restaurant-info">
                    <div class="restaurant-image-wrapper">
                        <img class="restaurant-image" :src="yelpRestaurant.image_url" />
                    </div>
                    <div class="info">
                        <div class="text rating">
                            <div class="rating-number">{{ yelpRestaurant.rating }}</div>
                            <div class="rating-html" v-html="yelpRestaurant.htmlRating"></div>
                        </div>
                        <div class="name text"> 
                            {{ yelpRestaurant.name }}
                        </div>
                        <div class="location text"> ({{ yelpRestaurant.location.city + ", " + yelpRestaurant.location.state }})</div>
                        <div class="text"> {{ yelpRestaurant.display_phone }}</div>
                        <div class="links">
                            <a href="#" class="btn"><span class="fa fa-star"></span> Post menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="restaurants-column" v-else="allYelpRestaurants === undefined">
        <img src="../styles/vendors/ajax-loader.gif" />
    </section>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'RestaurantsColumn',
        computed: mapGetters(['allYelpRestaurants']),
        methods: mapActions(['fetchYelpRestaurants']),
        async created() {
            await this.fetchYelpRestaurants();
        }
    }
</script>
<style lang="scss">
    .restaurants-column {
        .restaurant {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 1rem;
            border-top: 1px solid #000;
            border-right: 1px solid #000;
            border-left: 1px solid #000;
            .restaurant-image-wrapper {
                padding:1rem 0;
                margin: 0 1rem;
                .restaurant-image {
                    max-width:100%;
                }
            }
            .restaurant-info {
                line-height: 1.7;
                .info {
                    text-align:center;
                    margin: .3rem;
                    .text {
                        font-family: 'Montserrat', sans-serif;
                        font-style: italic;
                        font-size: .7rem;
                        &.rating {
                            margin: 0 .3rem;
                            text-align:center;
                            font-size: 1rem;
                            font-family: 'Noto Serif SC', serif;
                            .rating-number {
                                font-size:1.7rem;
                                line-height: 1.2;
                            }
                            .rating-html {
                                font-size: .8rem;
                                margin-bottom: .8rem;
                            }
                        }
                        &.name {
                            font-size: 1rem;
                            font-style: normal;
                            font-weight: bold;
                            font-family: 'Noto Serif SC', serif;
                        }
                        &.location {
                            font-size: .8rem;
                            font-style: normal;
                            font-family: 'Montserrat', sans-serif;
                        }
                    }
                    .links {
                        text-align:center;
                        margin: 1rem 0;
                        font-size: .8rem;
                        .btn {
                            padding: .5rem .8rem;
                        }
                    }
                }
            }
            &:first-child {
                margin-top:3rem;
            }
            &:last-child {
                border-bottom: 1px solid #000;
                margin-bottom:3rem;
            }
        }
    }
</style>