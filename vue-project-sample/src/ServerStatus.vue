<template>
    <div>
        <p>Server Status Component: {{ status }}</p>
        <button @click="changeStatus">change-stat</button>
    </div>
</template>
  
<script>
export default {
    data () {
        return {
            status: 'Critical'
        }
    },
    methods: {
        changeStatus() {
            this.status = 'Normal';
        }
    }
}
</script>  