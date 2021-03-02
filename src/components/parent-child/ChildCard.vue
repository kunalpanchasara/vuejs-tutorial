<template>
    <div>
        <div class="card m-3" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <p v-if="message">Inject Message: {{message}}</p><br>
                <p class="card-text" v-html="thecardbody"></p>
                <div v-if="parentmessage" class="card-text alert alert-warning" v-html="parentmessage"></div>
                <button v-if="parentmessage" @click="ok" class="btn btn-success">Ok</button>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        props: ['parentmessage'],
        data() {
            return {
                thecardtitle: 'Child Component!',
                thecardbody: 'I\'m just a child.',
                msg:'I have finished my homewwork.'
            }
        },
        methods: {
            ok() {
                this.$emit('sendMsgToParent',this.msg)
            },
            callMe() {
                console.log('Value changed callback: --->', this.parentmessage);
            } 
        },
        watch: {
            'parentmessage': function(){
                this.callMe()
            }
        },
        inject: ['message'],
        mounted() {
            //console.log(this.message);
        }
    }
</script>
 
<style>
</style>