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
                             <router-link :to="{name: 'restaurant', params: {restaurantId: food.restaurants[0]._id}}">
                                {{ food.restaurants[0].address }} <br />
                                {{ food.restaurants[0].phone }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xs-12">
                <div class="food-image-wrapper">
                    <div class="totalRating" v-if="food.comments && food.comments.length > 0">
                        <span class="fa fa-star"></span>{{ (Number(food.totalRating) / food.comments.length).toFixed(2) }}
                    </div>
                    <div class="rating" v-else="food.comments.length === 0">
                        No rating yet!
                    </div>
                    <img class="food-image" :src="food.food_image" />
                </div>
            </div>
            <div class="col-xs-12">
                <div class="food-reviews">
                    <div class="comment-boxes">
                        <div class="user" v-for="comment in food.comments" v-if="food.comments.length !== 0">
                            <div class="delete-btn-wrapper">
                                <a @click="onClickDelete($event)" class="delete-btn" href="#"><span :data-foodId="food._id" :data-commentId="comment._id" class="fa fa-times"></span></a>
                            </div>
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
            <div class="col-xs-12 message-form">
                <vue-form class="leave-message-form" :state="formstate" @submit.prevent="onSubmitMessageForm(model)">
                    
                    <validate class="form-group required-field" :class="fieldClassName(formstate.title)">
                        <input placeholder="title" type="text" name="title" class="new-comment form-control" required v-model.lazy="model.title">
                        <field-messages name="title" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="required">Title is a required field</div>
                        </field-messages>
                    </validate>

                    <validate class="form-group required-field" :class="fieldClassName(formstate.message)">
                        <textarea rows="3" cols="25" placeholder="message" name="message" class="new-comment form-control" maxlength="50" v-model.lazy="model.message"></textarea>
                        <small class="form-text text-muted">Enter no more than 50 characters.</small>
                        <field-messages name="message" show="$touched || $submitted" class="form-control-feedback">
                        <div>Success!</div>
                        <div slot="maxlength">Message must be less than 50 characters</div>
                        </field-messages>
                    </validate>

                    <validate class="form-group required-field" :class="fieldClassName(formstate.rating)">
                        <legend class="rating-select-title">Rating:</legend>
                        <select class="rating-select" name="rating" required v-model.lazy="model.rating">
                            <option :value="null">Choose...</option>
                            <option value="5">5</option>
                            <option value="4.5">4.5</option>
                            <option value="4">4</option>
                            <option value="3.5">3.5</option>
                            <option value="3">3</option>
                            <option value="2.5">2.5</option>
                            <option value="2">2</option>
                            <option value="1.5">1.5</option>
                            <option value="1">1</option>
                            <option value="0.5">0.5</option>
                            <option value="0">0</option>
                        </select>
                        <field-messages name="rating" show="$touched || $dirty || $submitted" class="form-control-feedback">
                            <div>Success!</div>
                            <div slot="required">Rating is a required field</div>
                        </field-messages>
                    </validate>
                    <button class="submit">Submit</button>
                </vue-form>
                <!-- <pre>{{formstate}}</pre> -->
            </div>
        </div>
    </section>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        data() {
            return {
                formstate: {},
                model: {
                    title: '',
                    message: '',
                    rating: Number,
                    foodId: this.$route.params.foodId,
                    userId: '5c4f387b9949cd0284a17621'
                }, 
                id: this.$route.params.foodId
            }
        },
        computed: mapGetters(['food','foods']),
        methods:  mapActions(['filterFoodById','onSubmitMessageForm','fieldClassName', 'onClickDelete']),
        name: 'Food',
        async created() {
            await this.filterFoodById(this.id);
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
                                a {
                                    color:#000;
                                    text-decoration:none;
                                    &:hover {
                                        text-decoration:underline;
                                    }  
                                }
                            }
                            
                        }
                    
                }
            }
            .food-reviews {
                .comment-boxes{
                        .user {
                            padding: 1rem;
                            position: relative;
                            display: flex;
                            border-top: 1px solid #000;
                            border-left: 1px solid #000;
                            border-right: 1px solid #000;
                            .delete-btn-wrapper {
                                display:inline-block;
                                padding:.5rem;
                                height: 100%;
                                .delete-btn {
                                    color:#000;
                                }
                                &:hover {
                                    border:1px solid #000;
                                }
                            }
                            .image-name {
                                display: block;
                                text-align: center;
                                .image {
                                    max-width:3rem;
                                    border-radius: 50%;
                                }
                                .firstname {
                                    font-family: 'Montserrat', sans-serif;
                                    font-size: .7rem;
                                    font-style:italic;
                                    display: inline-block;
                                }
                            }
                            .rating {
                                position: absolute;
                                right: .5%;
                                top: 4%;
                            }
                            .comments{
                                padding: .5rem;
                                width: 100%;
                                line-height: 1.7;
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
        .message-form {
            .leave-message-form {
                    text-align: right;
                    border: 1px solid #ccc;
                    max-width: 500px;
                    padding: 1rem;
                    background-color: #efefef;
                    margin: 1rem 0 1rem auto;
                .new-comment {
                    color: #000;
                    text-decoration: none;
                    display: block;
                    padding: .5rem;
                    width: 100%;
                    border:none;
                    border:1px solid #ccc;
                    line-height: 1.3;
                    font-size: .8rem;
                    margin: .8rem 0 .3rem;
                }
                .rating-select-title {
                    font-size: .9rem;
                    text-align: left;
                    margin: .5rem 0;
                    display: block;
                }
                .rating-select {
                    background-color: #fff;
                    width: 100%;
                    border: 0;
                    border-bottom: 1px solid #ccc;
                    color: #666666;
                    -webkit-appearance: none;
                    -webkit-border-radius: 0px;
                    font-size: .8rem;
                    padding: .5rem .2rem;
                    option {
                        padding: .8rem .5rem;
                    }
                }
                .submit {
                    border: 1px solid #000;
                    padding: .5rem .8rem;
                    font-size: .8rem;
                    margin: .8rem 0;
                    text-decoration: none;
                    color: #000;
                &:hover {
                    color:#fff;
                    background-color:#000;
                }
                &:disabled {
                    border: 1px solid #ccc;
                    color:#ccc;
                        &:hover {
                        color:#ccc;
                        background-color:#fff;
                    }
                }
                }
                .form-control-feedback {
                    margin: .3rem 0 .5rem;
                    font-size: .8rem;
                }
            }
        }
    }
</style>