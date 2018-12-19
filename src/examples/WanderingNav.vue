<template>
    <vue-three-wrap :start="start" :update="update" />
</template>

<script>
import VueThreeWrap from 'vue-three-wrap'

export default {
    components: {
        'vue-three-wrap': VueThreeWrap
    },
    methods: {
        // TODO: 4-5 boxes bumbling from side to side - stop in place and face camera on hover
        start() {},
        update() {}
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

.class {
}
</style>
