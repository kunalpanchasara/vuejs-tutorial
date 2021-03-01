<template>
    <div>
        <div class="card m-3" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <p class="card-text" v-html="thecardbody"></p>
                <button @click="messageBrother" class="btn btn-info">Send Brother A Message</button>
                <div v-if="frombrother" class="mt-3 alert alert-secondary" v-html="frombrother"></div>
            </div>
        </div>
    </div>
</template>
 
<script>
import {eventBus} from "../../main";
    export default {
        props: [],
        data() {
            return {
                thecardtitle: 'Sister Component!',
                thecardbody: 'I\'m a Sister.',
                frombrother: ''
            }
        },
        created() {
            eventBus.$on('brothersaid', (message) => {
                this.frombrother = message;
            });
        },

        methods: {
            messageBrother() {
                eventBus.$emit('sistersaid', 'Mom said do your homework!')
            }
        }
        
    }
</script>
 
<style>
</style>