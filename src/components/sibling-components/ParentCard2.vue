<template>
    <div>
        <div class="card m-2" style="width: 70rem;">
            <div class="card-body">
                <h4 class="card-title" v-text="thecardtitle"></h4>
                <div class="d-flex justify-content-center">
                    <brother-card></brother-card>
                    <sister-card></sister-card>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
    import BrotherCard from './BrotherCard.vue';
    import SisterCard from './SisterCard.vue';
 
    export default {
        components: {BrotherCard, SisterCard},
 
        data() {
            return {
                thecardtitle: 'Parent Component!',
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