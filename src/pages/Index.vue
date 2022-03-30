<template>
    <div class="background" style="display: flex; justify-content: center; background-color: rgb(107, 197, 210)">
        <div style="width: 100vh; height: 100vh; display:flex; justify-content: center; align-items: center; " class="neki">
            <g-image class="logo" style="display: flex;opacity: 0" src="~/../static/logos/ftso-plus-logo-black.svg"></g-image>
            <g-image class="logo2" style="opacity: 0; display: none; width: 20px;" src="~/../static/logos/ftso-plus-logo-F-black.svg"></g-image>
        </div>
    </div>
</template>

<script>
    import $ from "jquery"

    export default {
        metaInfo: {
            title: '',

        },
        mounted() {
            this.$nextTick(function () {
                $(".logo").animate({opacity: "1"}, 1000, "swing", function () {
                    let d = new Date();
                    $(".background").animate({height: "48px"});
                    $(".logo").removeAttr("src");
                    $(".logo").css("display", "none");
                    $(".logo2").css("display", "flex");
                    $(".logo2").css("opacity", "1");
                    $(".logo2").css("position", "absolute").animate({width: "20px", top: "6px", left: "17px"},function () {
                        window.location.replace("/delegate-earn");
                    });

                });
            });
        }
    }
</script>

<style scoped>
    html, body {
        font-family: Roboto;
        margin: 0;
        padding: 0;
    }

    .fade-enter-active {
        transition: all 1s;
        transition-delay: 1s;
        transition-property: opacity, height;
    }

    .fade-enter {
        opacity: 0;
        height: 800px;
    }
</style>
