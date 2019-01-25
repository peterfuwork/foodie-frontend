<template>
  <div id="app" >
    <Nav />
    <!-- <Campaign /> -->
    <div class="container">
      
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

import Nav from './components/Nav.vue';
// import Campaign from './components/Campaign.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    // Campaign,
    Nav
  }
}
</script>

<style>
@import './styles/vendors/bootstrap.css';
@import './styles/vendors/slick-theme.min.css';
@import './styles/vendors/slick.min.css';
@import './styles/vendors/fontawesome.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
