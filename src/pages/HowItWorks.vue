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
                        <p class="card__body">
                            <b>What is the Songbird network?</b><br>
                            Songbird is a “Canary” network for Flare. The Canary network is similar to a testnet with an important difference: the assets held on the Canary network actually have value.
                            This is due to a predetermined token supply. The Songbird network is used to test new features, before being brought to the Flare network.
                            The native token of the Singbird network is Songbird (SGB).
                        </p>
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
                        <p class="card__body">
                            <b>What is an FTSO?</b><br>
                            FTSO stands for Flare Time Series Oracle. It is an integral part of the Flare network and it provides externally sourced (off-chain) data to the Flare Network in a decentralized manner.
                            This data can be then used with confidence by other decentralized applications build on the top of the Flare network.<br><br>

                            The Flare network is a future blockchain.
                            It is smart contracts enabled Federated Byzantine Agreement (FBA) network, which aims to unlock the value of assets that do not currently have the functionality of
                            smart contracts by allowing them to be brought over to Flare in a risk-free, fully collateralized manner. The native token of the Flare network is Spark (FLR).
                            More details can be found on the Flare network official website: <a href="https://flare.xyz" style="text-decoration: none;">https://flare.xyz</a>
                            <br><br>
                            <b>What is a Signal Provider?</b><br>
                            Signal Providers are off-chain entities that provide data to the Flare Time Series Oracle (FTSO).
                            The Signal Providers develop their own systems and algorithms to collect data from the outside of the Flare network, and then maintain very high uptime and provide reliable data.
                            They are incentivized to provide as accurate data as possible and are rewarded based on this accuracy.
                        </p>
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
                        <p class="card__body">
                            <b>How to earn rewards?</b><br>
                            Signal Providers are rewarded for providing accurate data, which is determined by how close it is to the FTSO output.
                            However, being a Signal Provider requires special skills to manage a reliable infrastructure and calculate accurate price estimates.
                            <br>
                            Important: <b>You can earn rewards also by delegating your vote a Signal Provider.</b>
                            The vote delegation is risk-free because you never lose custody of your Spark (FLR) and you can redistribute your vote at any time without penalty.
                        </p>
                        <p class="card__body">This would be some longer text that gives a description of the things from the other side I guess</p>
                    </div>
                </div>
            </div>
        </div>

    </layout>
</template>

<script>
    export default {
        name: "HowItWorks",
        metaInfo:{
            title:"How it works"
        }
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
        max-font-size: 32px;
        min-font-size: 1rem;
        line-height: 1.6;
        overflow-y: auto;
        height: 100%;
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