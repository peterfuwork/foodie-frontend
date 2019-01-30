<template>
    <div class="post-menu">
        <h2 class="post-menu-h2">Post a menu</h2>
        <vue-form class="post-menu-form" :state="formstate" @submit.prevent="onSubmitMenuForm({$event, model})">
            <validate class="form-group required-field" :class="fieldClassName(formstate.food_name)">
                <input placeholder="Name of Food" type="text" name="food_name" class="new-comment form-control" required v-model.lazy="model.food_name">
                <field-messages name="food_name" show="$touched || $submitted" class="form-control-feedback">
                <div>Success!</div>
                <div slot="required">Food name is a required field</div>
                </field-messages>
            </validate>

            <validate class="form-group" :class="fieldClassName(formstate.price)">
                <input placeholder="Price" type="number" name="price" class="new-comment form-control" required v-model.lazy="model.price">
            </validate>

            <validate class="form-group required-field" :class="fieldClassName(formstate.food_name)">
                <input placeholder="Image" type="text" name="food_image" class="new-comment form-control" required v-model.lazy="model.food_image">
                <field-messages name="food_image" show="$touched || $submitted" class="form-control-feedback">
                <div>Success!</div>
                <div slot="required">Food picture is a required field</div>
                </field-messages>
            </validate>

            <validate class="form-group required-field" :class="fieldClassName(formstate.category)">
                <input placeholder="Category" type="text" name="category" class="new-comment form-control" required v-model.lazy="model.category">
                <field-messages name="category" show="$touched || $submitted" class="form-control-feedback">
                <div>Success!</div>
                <div slot="required">Category is a required field</div>
                </field-messages>
            </validate>

            <validate class="form-group required-field" :class="fieldClassName(formstate.description)">
                <textarea rows="3" cols="25" placeholder="Description" name="description" class="new-comment form-control" maxlength="200" v-model.lazy="model.description"></textarea>
                <div>
                    <small class="form-text text-muted">Enter no more than 200 characters.</small>
                </div>
                <field-messages name="description" show="$touched || $submitted" class="form-control-feedback">
                <div>Success!</div>
                <div slot="maxlength">Description must be less than 200 characters</div>
                </field-messages>
            </validate>

            <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.is_Spicy)">
                <div><label>Does this food spicy?</label></div>
                <select class="select form-control" name="is_Spicy" required v-model.lazy="model.is_Spicy">
                    <option :value="null">Choose...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                <field-messages name="is_Spicy" show="$touched || $dirty || $submitted" class="form-control-feedback">
                <div>Success!</div>
                <div slot="required">This is a required field</div>
                </field-messages>
            </validate>

            <button class="submit">Submit</button>
        </vue-form>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'PostMenuForm',
        data() {
            return {
                formstate: {},
                model: {
                    food_name: '',
                    price: Number,
                    food_image: '',
                    category: '',
                    description: '',
                    is_Spicy: null
                }
            }
        },
        computed: mapGetters(['restaurants']),
        methods:  mapActions(['fieldClassName', 'fetchRestaurants','onSubmitMenuForm']),
        async created() {
            await this.fetchRestaurants();
        }
    }
</script>

<style lang="scss">
    .post-menu {
        padding-top: 6rem;
        .post-menu-h2 {
            padding:0 1rem;
        }
        .post-menu-form{
            text-align:center;
            .form-group {
                margin:1rem 0;
            }
            .form-control-feedback {
                margin: 1rem 0;
            }
            h4 {
                margin:1.5rem 0;
            }
            .error {
                color:red;
            }
            label {
                margin:1rem 0;
                font-weight: bold;
                display: block;
            }
            input, textarea {
                font-size:1.2rem;
                padding: .7rem;
                margin:1rem 0 0;
                width: 100%;
                max-width: 600px;
                border:1px solid #ccc;
            }

            .select {
                background-color: #fff;
                padding:1rem;
                border: 1px solid #ccc;
                color: #666666;
                -webkit-appearance: none;
                -webkit-border-radius: 0px;
                padding: .5rem .7rem;
                width: 100%;
                max-width: 600px;
                option {
                    padding: .8rem .5rem;
                }
            }
            .radio-button {
                width: auto;
            }
            .submit {
                border:1px solid #000;
                padding:.7rem 1.5rem;
                font-size: 1.2rem;
                margin: 1.5rem 0;
                text-decoration:none;
                color:#000;
                &:hover {
                color:#fff;
                background-color:#000;
                }
            }
        }
    }

</style>