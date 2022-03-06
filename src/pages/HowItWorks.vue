<template>

    <layout>
        <div class="text-center" style="margin-top: 68px">
            <h1>How it works ? </h1>
        </div>
        <div class="cardsContainer">
            <div class="card">
                <div class="card__content">
                    <div class="card__front card__front_bird">
                        <h3 class="card__title">Songbird</h3>
                    </div>
                    <div class="card__back">
                        <p class="card__body">This would be some longer text that gives a description of the things from the other side I guess</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__content">
                    <div class="card__front card__front_flr">
                        <h3 class="card__title">Flair</h3>
                    </div>
                    <div class="card__back">
                        <p class="card__body">This would be some longer text that gives a description of the things from the other side I guess</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card__content">
                    <div class="card__front card__front_money">
                        <h3 class="card__title">Rewards</h3>
                    </div>
                    <div class="card__back">
                        <p class="card__body">This would be some longer text that gives a description of the things from the other side I guess</p>
                    </div>
                </div>
            </div>
        </div>

    </layout>
</template>

<script>
    export default {
        name: "HowItWorks"
    }
</script>

<style scoped>
    h1 {
        color: #390050;
        text-shadow: 3px 5px 6px rgba(0, 0, 0, 0.43);
    }

    img {
        width: 70%;
        height: auto;
        filter: drop-shadow(5px 0px 12px rgba(255, 0, 0, 0.38));
    }

    .cardsContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .card {
        width: 30%;
        min-width: 300px;
    }

    .card__content {
        text-align: center;
        position: relative;
        padding: 15em 5em;
        transition: transform 2s;
        transform-style: preserve-3d;
    }

    .card:hover .card__content {
        transform: rotateY(.5turn);
    }

    .card__front,
    .card__back {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 5em 3em;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        display: grid;
        align-content: center;
    }

    .card__front_bird {
        background-color: #390050;
        background-image: url(../../static/logos/sgb-template.svg);
        background-size: contain;
        background-position: center;
        background-blend-mode: normal;
        color: orangered;
    }

    .card__front_flr {
        background-color: #390050;
        background-image: url(../../static/logos/flr-template.svg);
        background-size: contain;
        background-position: center;
        background-blend-mode: normal;
        color: orangered;
    }

    .card__front_money {
        background-color: #390050;
        background-image: url(../../static/logos/dollar-sign-svgrepo-com.svg);
        background-size: contain;
        background-position: center;
        background-blend-mode: normal;
        color: orangered;
    }

    .card__title {
        transform: translateZ(4rem);
        text-transform: uppercase;
        color: white;
        text-shadow: 3px 3px black;
        font-size: xx-large;
    }

    .card__body {
        transform: translateZ(6rem);
        font-weight: 400;
        font-size: 3vh;
        min-font-size: 2vh;
        line-height: 1.6;
    }

    .card__back {
        transform: rotateY(.5turn);
        color: white;
        background: #390050;
    }
</style>