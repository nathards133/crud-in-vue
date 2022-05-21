<template>
  <div id="app">
   <h1>tentando fazer funcionar </h1>
  </div>
</template>

<script>
import Mydashboard from './components/Mydashboard.vue'
import pageRegister from './components/pageRegister.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Mydashboard,
    pageRegister,
    HelloWorld
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
  margin-top: 60px;
}
</style>
