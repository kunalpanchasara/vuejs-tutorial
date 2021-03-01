<template>
   <div id="grandparent">
      <h2>Grand Parent</h2>
      <p>Inject Message: {{message}}</p><br>
      
      <parent-card></parent-card>    
    </div>
</template>

<script>
import ParentCard from './ParentCard' 

export default {
  components: { ParentCard },
    name: 'GrandParent',
    inject: ['message'],
    mounted() {
        console.log(this.message);
    }
   
}
</script>

<style>

</style>