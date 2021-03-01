<template>
    <div>
        <div class="card m-3" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <p class="card-text" v-html="thecardbody"></p>
               <div v-if="othercomponent" class="mt-3 alert alert-secondary" v-html="othercomponent"></div>
            </div>
        </div>
    </div>
</template>
 
<script>
     export default {
        data() {
            return {
                thecardtitle: 'XYZ Component!',
                thecardbody: 'I\'m a XYZ component.',
                othercomponent:'',
            }
        },
        mounted() {
            this.$root.$on('message_from_abc', (arg1) => {
                this.othercomponent = arg1
            })
        }
        
    }
</script>
 
<style>
</style>