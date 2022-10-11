<template>
    <div>
        <h3>Some User Details: {{ userId }}</h3>
        <p>name: {{ username }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            userId () {
                return this.$route.params.id
            },
            username () {
                return this.$route.query.search
            }
        }
    }
</script>