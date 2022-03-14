<template>
    <layout>
        <div style="display: flex; height: 100%; width: 100%; margin-top:48px; flex-wrap: wrap; justify-content: center; gap: 10%">
            <g-image src="~/../static/logos/ftso-plus-logo-purple.svg" style="width: 15%;  min-width: 200px; margin-top: 20px"></g-image>
            <form style="display:flex; width: 30%; justify-content: center;flex-direction: column; text-align: center; margin-top: 10%; min-width: 200px">
                <h1><u>Contact us</u></h1>
                <div class="form-group">
                    <input class="form-control" type="text" width="100%" placeholder="email">
                </div>
                <div class="form-group">
                    <input class="form-control" type="text" width="100%" placeholder="name">
                </div>
                <div class="form-group">
                    <textarea class="form-control" type="text" style="width:100%" placeholder="message" rows="6"></textarea>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" style="background-color: #390050; border: none" >Send</button>
                </div>
            </form>
        </div>
    </layout>
</template>

<script>
    export default {
        name: "TalkToUs",
        metaInfo:{
            title: "Talk to us"
        }
    }
</script>

<style scoped>
    input {
        box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.42);
    }

    textarea {
        box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.42);
    }

</style>
