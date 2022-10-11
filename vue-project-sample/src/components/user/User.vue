<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome">Back to Home</button>
        <button @click="navigateToDetail">user detail</button>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push('/')
            },
            navigateToDetail() {
                this.$router.push({ name: 'userDetail', params: { id: '10' }, query: {search: 'name of the user'} }).catch(()=>{})
            },
        }
    }
</script>