<template>
  <div class="category">
    <Campaign />
    <section class="container-fluid">
      <div class="row">
        <FoodNearMe class="col-sm-8 col-xs-12" />
        <RestaurantsColumn class="col-sm-4 col-xs-12" />
      </div>
    </section>
  </div>
</template>

<script>
  import Campaign from './components/Campaign.vue';
  import FoodNearMe from './components/FoodNearMe';
  import RestaurantsColumn from './components/RestaurantsColumn';

  export default {
    name: 'Category',
    components: {
      Campaign,
      FoodNearMe,
      RestaurantsColumn
    }
  }
</script>

<style>
</style>
