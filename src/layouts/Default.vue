<template>
    <div>
        <v-app-bar dense
                   fixed
                   elevation="24"
                   outlined style="background-color: #6BC5D2;">
            <g-image src="~/../static/logos/ftso-plus-logo-F-black.svg" width="20px"></g-image>
            <v-spacer></v-spacer>
            <div style="display: flex; justify-content: space-evenly; width: 80%;">
                <div class="d-flex">
                    <button class="nav d-inline-flex">
                        <router-link to="/delegate-earn">Delegate & Earn</router-link>
                    </button>
                </div>
                <div class="d-flex">
                    <button class="nav d-inline-flex">
                        <router-link to="/how-it-works">How it works ?</router-link>
                    </button>
                </div>
                <div class="d-flex">
                    <button class="nav d-inline-flex">
                        <router-link to="/talk-to-us">Talk to us</router-link>
                    </button>
                </div>
            </div>
        </v-app-bar>
        <transition name="fade" appear>
            <main style="height: 100%">
                <slot/>
            </main>
        </transition>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }

    a {
        color: black;
        font-weight: bolder;
        font-family: Roboto;
    }

    a::after {
        position: relative;
        bottom: 0px;
        left: 10%;
        content: '';
        display: block;
        border-radius: 16px;
        width: 0;
        height: 2px;
        background: #390050;
        -webkit-transition: width .2s ease-in-out;
        transition: width .2s ease-in-out;
    }

    a:hover {
        text-decoration: none;
        color: black;
    }

    a:hover:after {
        width: 80%;
    }

    .router-link-exact-active:after {
        width: 80%;
    }

    .fade-enter-active {
        transition: all 1s;
    }

    .fade-enter {
        opacity: 0;
        transform: translateY(400px);
    }

</style>
