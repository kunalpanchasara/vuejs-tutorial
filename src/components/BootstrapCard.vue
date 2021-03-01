<template>
    <div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>
                <p class="card-text" v-html="thecardbody"></p>
                <button @click="setTitle" class="btn btn-primary">Set Title</button>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'bootStrapComponent',
    data() {
        return {
            thecardtitle: 'The Card Title',
            thecardbody: 'Here we have some text. It is great text, that I can tell you.'
        }
    },
    methods: {
        setTitle() {
            this.thecardtitle = 'NEW card title!'
        }
    }
}
</script>
 
<style>
 
</style>
