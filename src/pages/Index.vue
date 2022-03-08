<template>
    <div style="width: 100%;height: 100%">
        <layout></layout>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Hello, world!'
        },
        mounted(){
            this.$router.push("/delegate-earn")
        },
    }
</script>

<style>
html,body{
    font-family: Roboto;
}

</style>
