<template>
  <div id="app" >
    <Nav />
    <Campaign />
    <div class="container">
      <HelloWorld msg="Welcome to Foodie"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Nav from './components/Nav.vue';
import Campaign from './components/Campaign.vue';
import Footer from './components/Footer.vue';

import { mapActions } from 'vuex';

export default {

  name: 'App',
  components: {
    HelloWorld,
    Nav,
    Campaign,
    Footer
  },
  methods: mapActions(['fetchYelpRestaurants']),
  async created() {
    await this.fetchYelpRestaurants();
  }
}
</script>

<style>
@import './styles/vendors/bootstrap.css';
@import './styles/vendors/slick-theme.min.css';
@import './styles/vendors/slick.min.css';
@import './styles/vendors/fontawesome.css';
#app {
  font-family: 'Noto Serif SC', serif;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
}
ul, li {
  margin:0;
  padding:0;
}
</style>
