<template>
    <section class="restaurants-column">
        <div class="text-center" v-if="allYelpRestaurants.length === 0">
            <img src="../styles/vendors/ajax-loader.gif" />
        </div>
        <div v-else="allYelpRestaurants.length > 0">
            <h2>Swipe to see more restaurants near you</h2>
            <slick ref="slick" :options="slickOptions" >
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
                                <div class="links" @click="onClickPostMenu($event)">
                                    <router-link to="/postMenuForm" class="btn" :data-yelpId="yelpRestaurant.id" :data-yelpPhone="yelpRestaurant.display_phone"><span class="fa fa-star"></span> Post food</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slick>
        </div>
    </section>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    import Slick from 'vue-slick';

    export default {
        components: { Slick },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    infinite: true,
                    accessibility: true,
                    draggable: true,
                    swipe: true,
                    autoplay: true,
                    arrow: false,
                    autoplaySpeed: 4000,
                    responsive: [
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        }
                    ]
                }
            };
        },
        name: 'RestaurantsColumn',
        computed: mapGetters(['allYelpRestaurants','restaurant']),
        methods: 
        mapActions(['fetchYelpRestaurants','onClickPostMenu']),
        next() {
            this.$refs.slick.next()
        },
        prev() {
            this.$refs.slick.prev()
        },
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$refs.slick.reSlick()
        },
        async created() {
            await this.fetchYelpRestaurants();
        }
    }
</script>
<style lang="scss">
    .restaurants-column {
        .slick-slide {
            display: block;
            flex-direction: column;
            background-color: #fff;
            padding: 0 .7rem;
            text-align: center;
        }
        .slick-list {
            outline: none;
        }
        .restaurant {
            display: flex;
            justify-content: center;
            align-items: center;
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
                    color: #000;
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
                margin-top:1rem;
                outline: none;
            }
            &:last-child {
                border-bottom: 1px solid #000;
                margin-bottom:3rem;
                outline: none;
            }
        }
    }
</style>