<template>
  <div id="app" >
    <Nav />
      <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
  import Nav from './components/Nav.vue';
  import Category from './Category.vue'
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Nav,
      Category,
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
  .text-center{
    text-align:center;
    margin: 1rem 0;
  }
</style>
