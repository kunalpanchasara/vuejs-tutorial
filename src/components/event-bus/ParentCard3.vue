<template>
    <div>
        <div class="card m-2" style="width: 70rem;">
            <div class="card-body">
                <h4 class="card-title" v-text="thecardtitle"></h4>
                <div class="d-flex justify-content-center">
                    <abccomponent></abccomponent>
                    <xyzcomponent></xyzcomponent>
                    
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import Abccomponent from './abccomponent.vue';
import Xyzcomponent from './xyzcomponent.vue';
 
    export default {
        components: {Xyzcomponent, Abccomponent},
 
        data() {
            return {
                thecardtitle: '',
            }
        }
    }
</script>
 
<style scoped>
    div.card {
        color: #721c24;
        border: 4px solid #f5c6cb;
    }
</style>