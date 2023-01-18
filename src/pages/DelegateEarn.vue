<template>
    <layout>
        <div class="d-flex align-center  flex-wrap" style="height: calc(100vh - 48px); margin-top: 48px ; justify-content: center;">
            <div class="grid2x2">
                <div class="box">
                    <div class="d-flex justify-space-around flex-column text-center align-center">
                        <br>
                        <h3>Opportunity</h3>
                        <br>
                        <p>
                            Delegating your votes to FTSO +  <br> is an opportunity to earn
                            <b>passive income</b>.
                        </p>
                        <br>
                    </div>
                </div>
                <div class="box">
                    <div class="d-flex justify-space-around flex-column text-center align-center">
                        <br>
                        <h3>What is FTSO +? </h3>
                        <br>
                        <p>
                            FTSO + is a Signal Provider with<br> an emphasis on <b>accuracy</b> and <br>multi exchange sourcing.
                        </p>
                        <br>
                    </div>
                </div>
                <div class="box">
                    <div class="d-flex justify-space-around flex-column text-center align-center">
                        <br>
                        <h3>What we do? </h3>
                        <br>
                        <p>
                            We collect and aggregate data from<br> a bunch of exchanges to provide<br> <b>accurate</b> prices.
                        </p>
                        <br>
                    </div>
                </div>
                <div class="box">
                    <div class="d-flex justify-space-around flex-column text-center align-center">
                        <br>
                        <h3>Our goal</h3>
                        <br>
                        <p>
                            We use the <b>cloud infrastructure</b> to achieve<br> <b>best performance</b> and <b>maximum uptime</b>.
                        </p>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-center flex-column text-center align-center w-75" style="gap: 10px; justify-content: center; align-items: center ">
                <div class="d-flex justify-center flex-column text-center align-center w-50" style="gap: 10px; justify-content: center; align-items: center ">
                  <h3 class="text-center delegateAddress">Delegate your votes and earn rewards:</h3>
                  <h3 class="text-center delegateAddress">
                    Flare (FLR): <strong>0x3d2c08ed9b2333cbce2b8a219e02f4aa31ebccd3</strong>
                  </h3>
                  <h3 class="text-center delegateAddress">
                    Songbird (SGB): <strong>0x0FA72D3912d1C530AB1f6a8A9fB61C672947E964</strong>
                  </h3>
                    <!--
                    <button class="delegateButton" >
                        <router-link to="/Delegation">Delegate</router-link>
                    </button>
                    -->
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    export default {
        metaInfo: {
            title: "Delegate&Earn"
        },
        name: "DelegateEarn"
    }
</script>

<style scoped>
    body,html{
        background-color: white;
    }
    @media screen and (max-width: 700px) {
        .delegateAddress {
            font-size: 0.75rem;
        }
    }

    @media screen and (min-width: 700px) {
        .delegateAddress {
            font-size: 1rem;
        }
    }

    h3, h5 {
        font-weight: bolder;
        color: #390050;
    }

    h3 {
        font-weight: bolder;
        color: #390050;
    }

    b {
        color: #390050;
    }

    p {
        font-size: 0.75rem;
        text-align: center;
    }

    .grid2x2 {
        min-height: 80%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }

    .grid2x2 > div {
        display: flex;
        flex-basis: calc(50% - 40px);
        justify-content: center;
        flex-direction: column;
    }

    .box {
        margin: 20px;
        background-color: transparent;
        color: black;
        border: 1px solid #44B6C6;
        border-radius: 16px;
        box-shadow: 0px 3px 6px;
        padding: 10px;
        min-width: 200px;
    }

    .delegateButton {
        display: inline-flex;
        width: 20%;
        justify-content: center;
        min-width: 100px;
        background-color: #6BC5D2;
        color: #390050;
        border-radius: 5px;
        font-weight: bolder;
        box-shadow: 0 3px 6px black;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        color: #390050;
        font-weight: bolder;
        font-family: Roboto;
    }
</style>