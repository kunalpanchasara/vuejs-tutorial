<script>
export default {
       
        data: function () {
            return {
                message: 'hello',
                foo: 'kp'
            }
        },
        created: function () {
            console.log('mixin hook called')
        },
        methods: {
            clicked(value) {
                alert('Mixin called:  ' + value);
            }
        }
}
</script>