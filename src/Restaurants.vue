<template>
    <section class="restaurants container-fluid">
        <h2>Top restaurants near me</h2>
        <div class="restaurant">
            <div class="row no-padding" >
                <div class="text-center" v-if="allYelpRestaurants.length === 0">
                  <img src="./styles/vendors/ajax-loader.gif" />
                </div>
                <div class="col-sm-4 restaurant-info" v-else="allYelpRestaurants.length > 0" v-for="yelpRestaurant in allYelpRestaurants">
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
                            <router-link to="/postMenuForm" class="btn" :data-yelpId="yelpRestaurant.id" :data-yelpPhone="yelpRestaurant.display_phone"><span class="fa fa-star"></span> Post menu</router-link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import RestaurantsColumn from './components/RestaurantsColumn';

  export default {
    name: 'Restaurants',
    components: {
      RestaurantsColumn
    },
    computed: mapGetters(['allYelpRestaurants','restaurant']),
    methods: mapActions(['fetchYelpRestaurants', 'onClickPostMenu']),
    async created() {
        await this.fetchYelpRestaurants();
    }
  }
</script>

<style lang="scss">
      .restaurants {
            padding-top:5rem;
            .restaurant-image-wrapper {
                padding:1rem 0;
                margin: 0 1rem;
                .restaurant-image {
                    max-width:100%;
                }
            }
            .restaurant-info {
                line-height: 1.7;
                &:nth-child(3n+1) {
                  clear:left;
                }
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
        }
</style>
