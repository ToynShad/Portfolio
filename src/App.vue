<template>
<div>
  <Header/>
  <RouterView/>
  <Footer/>
</div>
</template>

<script>

import Header from "./components/Header/Header.vue"
import Footer from "./components/Footer/Footer.vue"
import { RouterView } from "vue-router";

export default {
  name: 'App',
  components: {
    Header, Footer, 

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
