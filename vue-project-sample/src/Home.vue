<template>
    <div>
        <ServerStatus />
    </div>
</template>
  
<script>
import ServerStatus from './ServerStatus.vue';
export default {
    data() {
        return {
            status: "Critical"
        };
    },
    components: { ServerStatus }
}
</script>  