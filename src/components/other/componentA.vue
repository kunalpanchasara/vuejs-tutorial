<template>
  <div>
    <input type="text" v-model="name" placeholder="Enter Keyword">
    <br>
    <p>Basic Filter: {{name | capitalize}}</p>
    <br>
    <p>Global Filter: {{name | reverse}}</p>
    <br>
    <p>Filter chain: {{name | capitalize | reverse }}</p>
    <br>
    <p v-if="name">Filter with arguments 1: {{name | wrap('before ', ' after')}}</p>
    <br>
    <p v-if="name">Filter with arguments 2: {{name | readMore(5, '...')}}</p>
  </div>
</template>
<script>

export default {
    name: "componentA",
    
    data: function () {
        return {
            message: 'goodbye',
            bar: 'def',
            name: ''
        }
    },
    created: function () {
        console.log(this.$data)
        // => { message: "goodbye", foo: "kp", bar: "def" }
    },
    methods: {
       
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
}
</script>