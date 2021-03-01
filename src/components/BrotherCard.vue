<template>
    <div>
        <div class="card m-3" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <p class="card-text" v-html="thecardbody"></p>
                <button @click="messageSister" class="btn btn-info">Send Sister A Message</button>
               <div v-if="fromsister" class="mt-3 alert alert-secondary" v-html="fromsister"></div>
            </div>
        </div>
    </div>
</template>
 
<script>
 import {eventBus} from "../main";

    export default {
        props: [],
        data() {
            return {
                thecardtitle: 'Brother Component!',
                thecardbody: 'I\'m a brother.',
                msg:'I have finished my homewwork.',
                fromsister: ''
            }
        },
        methods: {
            messageSister() {
                // this.$emit('brothersaid', 'Mom said do your homework!')
                eventBus.$emit('brothersaid', 'Mom said do your homework!')
            }
        },
        created() {
            eventBus.$on('sistersaid', (message) => {
                this.fromsister = message;
            });
        }
        
    }
</script>
 
<style>
</style>