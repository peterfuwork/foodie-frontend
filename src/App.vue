<template>
  <div id="app" >
    <Nav />
    <Campaign />
    <section class="container-fluid">
      <div class="row">
        <FoodNearMe class="col-sm-8 col-xs-12" />
        <RestaurantsColumn class="col-sm-4 col-xs-12" />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  import Nav from './components/Nav.vue';
  import Campaign from './components/Campaign.vue';
  import FoodNearMe from './components/FoodNearMe';
  import RestaurantsColumn from './components/RestaurantsColumn';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Nav,
      Campaign,
      FoodNearMe,
      RestaurantsColumn,
      Footer
    }
  }
</script>

<style>
  @import './styles/vendors/bootstrap.css';
  @import './styles/vendors/slick-theme.min.css';
  @import './styles/vendors/slick.min.css';
  @import './styles/vendors/fontawesome.css';
  #app {
    /* font-family: 'Noto Serif SC', serif; */
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
  }
  ul, li {
    margin:0;
    padding:0;
  }
  .btn {
    border: 1px solid #000;
    padding: .5rem 1rem;
    text-decoration: none;
    color: #000;
    display: inline-block;
  }
  .btn:hover {
    color:#fff;
    background-color:#000;
  }
  .no-padding {
    padding:0;
  }
</style>
