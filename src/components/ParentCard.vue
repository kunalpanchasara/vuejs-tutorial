<template>
   <div>
        <div class="card m-2" style="width: 40rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <p>Inject Message: {{message}}</p><br>
                <button @click="sendMessage" class="btn btn-info">Send Child A Message</button>
                <div v-if="childmessage" class="card-text alert alert-warning" v-html="childmessage"></div>
                <button v-if="childmessage" @click="clear" class="btn btn-success">Ok</button>
                
                <!-- Child component -->
                <child-card :parentmessage="parentmessage" @sendMsgToParent="finished"></child-card>

            </div>
        </div>
    </div>
</template>

<script>
import ChildCard from './ChildCard'

    export default {
        components: {ChildCard},
 
        data() {
            return {
                thecardtitle: 'Parent Component!',
                parentmessage: '',
                childmessage: ''
            }
        },
        methods: {
            sendMessage() {
                this.childmessage = ''
                this.parentmessage = '<b>Message From Parent:</b> Do Your Homework'
            },
            finished(arg1) {
                this.parentmessage = ''
                this.childmessage = arg1
            },
            clear(){
                this.childmessage=''
            }

        },
        inject: ['message'],
        mounted() {
            console.log(this.message);
        }
    }
</script>

<style>

</style>