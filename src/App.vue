<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <h4>Vue Filters</h4>
    
    <component-a></component-a>
    
    <br>

    <component-b></component-b>
  </div>
</template>

<script>
import ComponentA from './components/other/componentA.vue'
import ComponentB from './components/other/componentB.vue'

export default {
  name: 'App',
  components: {
    ComponentA,
    ComponentB
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
  margin-top: 15px;
}
</style>
