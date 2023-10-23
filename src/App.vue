<template>
  <div>
    <NavBar></NavBar>
    <!-- <MainPage></MainPage> -->
    <div id="router-div"><router-view></router-view></div>

    <Footer></Footer>
  </div>

</template>

<script>
  import NavBar from "./components/NavBar.vue"
  import Footer from "./components/Footer.vue"


  export default {
    name: 'App',
    components: {
      NavBar,
      Footer
    }
  }
</script>

<style>
  #router-div {
    min-height: 60vh;
  }

  .section {
    padding: 24px;
  }

  .sub-section {
    padding-bottom: 5px;
  }

  .sub-heading {
    font-size: 20px;
    font-weight: 600;
  }

  .main-heading {
    font-size: 32px;
    line-height: 1em;
    font-weight: 700;
  }

  .body-text {
    font-size: 16px;
    line-height: 1;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  @media screen and (min-width: 728px) {
    #router-div {
      min-height: 70vh;
    }

    .section {
      padding: 48px;
    }

  }

  @media screen and (min-width: 1280px) {
    .section {
      padding: 96px;
    }
  }
</style>