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

                            Delegating your votes to FTSO + is an <br> opportunity to earn
                            <b>passive income</b>.
                            Delegating your votes to FTSO + is an <br> opportunity to earn<br>
                            <b>passive income</b>

                        </p>
                        <br>
                    </div>
                </div>
                <div class="box">
                    <div class="d-flex justify-space-around flex-column text-center align-center">
                        <br>
                        <h3>What is FTSO+ ? </h3>
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
                        <h3>What we do ? </h3>
                        <br>
                        <p>
                            We collect and aggregate data from<br> a bunch of exchanges to provide<br> <b>accurate</b> prices.
                            We collect and aggregate data from<br> a bunch of exchanges to provide<br> <b>accurate</b> prices
                        </p>
                        <br>
                    </div>
                </div>
                <div class="box">
                    <div class="d-flex justify-space-around flex-column text-center align-center">
                        <br>
                        <h3>Our goal </h3>
                        <br>
                        <p>
                            We use the <b>cloud infrastructure</b> to achieve<br>  <b>best performance</b> and <b>maximum uptime</b>.
                        <h3>Our goal ? </h3>
                        <br>
                        <p>
                            We use a <b>cloud infrastructure</b> and<br> strive for the <b>best performance</b> and<br> <b>maximum uptime</b>
                        </p>
                        <br>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-center flex-column text-center align-center w-75" style="gap: 10px; justify-content: center; align-items: center ">
                <h3 class="text-center delegateAddress">Our Songbird Address for delegation is <b>0x0FA72D3912d1C530AB1f6a8A9fB61C672947E964</b></h3>
            <div class="d-flex justify-center flex-column text-center align-center w-50" style="gap: 10px; justify-content: center; align-items: center ">
                <h3 class="text-center">Our Songbird Address for delegation is xxxx</h3>
                <button class="delegateButton">
                    <router-link to="/Delegation">Delegate</router-link>
                </button>
            </div>
        </div>
    </layout>
</template>

<script>
    export default {
        name: "DelegateEarn",
        metaInfo:{
            title: "Delegate&Earn"
        },
        name: "DelegateEarn"
    }
</script>

<style scoped>

    @media screen and (max-width: 700px) {
        .delegateAddress{
            font-size: 0.75rem;
        }
    }
    @media screen and (min-width: 700px) {
        .delegateAddress{
            font-size: 1rem;
        }
    }

    h3, h5 {
        font-weight: bolder;
        color: #390050;

    h3 {
        font-weight: bolder;
        color: #390050;
        text-shadow: 3px 5px 6px rgba(0, 0, 0, 0.43);
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
    }

    a {
        color: #390050;
        font-weight: bolder;
        font-family: Roboto;
    }
</style>
