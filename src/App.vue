<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <h4>Parent Child communication</h4>
    <parent-card></parent-card>

    <hr>

    <h4>Sibiling components communication using Eventbus</h4>
    <parent-card-2></parent-card-2>

    <hr>

    <h4>Pass data to any components</h4>
    <parent-card-3></parent-card-3>

    <hr>

    <h4>Dependancy Method for cumminication</h4>
    <grand-parent></grand-parent>
  </div>
</template>

<script>
import  ParentCard from './components/ParentCard';
import ParentCard2 from './components/ParentCard2.vue';
import ParentCard3 from './components/ParentCard3.vue';
import GrandParent from './components/GrandParent.vue';

export default {
  name: 'App',
  components: {
    GrandParent,
    ParentCard,
    ParentCard2,
    ParentCard3,
    
  },
   provide: {
        message: 'Hello Vue!'
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
