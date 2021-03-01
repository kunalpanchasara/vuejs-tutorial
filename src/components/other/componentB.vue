<template>
  <div>
    <button v-on:click="clicked('you just clicked on button  2')">
      Button 2 from Component B
    </button>
  </div>
</template>
<script>


export default {
    name: "componentB",
    created: function() {
        console.log('component hook called')
    },
    methods: {
        
    }
}
</script>