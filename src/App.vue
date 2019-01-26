<template>
  <div id="app" >
    <Nav />
    <div class="container">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Nav from './components/Nav.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
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
