<template>
    <div>
        <div class="card m-3" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <p class="card-text" v-html="thecardbody"></p>
                <button @click="broadcastMessage" class="btn btn-info">Send a Message</button>
               <div v-if="othercomponent" class="mt-3 alert alert-secondary" v-html="othercomponent"></div>
            </div>
        </div>
    </div>
</template>
 
<script>
     export default {
        data() {
            return {
                thecardtitle: 'Abe Component!',
                thecardbody: 'I\'m a Abc component.',
                othercomponent:'',
            }
        },
        methods: {
            broadcastMessage() {
                this.$root.$emit('message_from_abc', 'Hello from abc component');
            }
        }        
    }
</script>
 
<style>
</style>