<template>
  <div>
    <button v-on:click="clicked('you just clicked on button  1')">
      Button 1 from ComponentA
    </button>
  </div>
</template>
<script>
import clickedMixin from '../../mixins/clickedMixin';
export default {
    name: "componentA",
    mixins: [clickedMixin],
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