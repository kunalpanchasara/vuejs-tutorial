<template>
  <div>
    <button v-on:click="clicked('you just clicked on button  1')">
      Button 1 from ComponentA
    </button>
  </div>
</template>
<script>

export default {
    name: "componentA",
    
    data: function () {
        return {
            message: 'goodbye',
            bar: 'def'
        }
    },
    created: function () {
        console.log(this.$data)
        // => { message: "goodbye", foo: "kp", bar: "def" }
    },
    methods: {
        clicked(value) {
            alert(value);
        }
    }
}
</script>