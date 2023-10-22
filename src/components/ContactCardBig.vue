<template>
    <div id="contact-card-big" class="col">
        <div id="img-div" class="sub-div"><img :src="getImgUrl(pic)" v-bind:alt="pic" /></div>
        <div id="name-div" class="sub-div"><span class="name-text">{{name}}</span></div>
        <div id="title-div" class="sub-div"><span class="title-text">{{title}}</span></div>
        <div id="descr-div" class="sub-div"><span class="descr-text">{{descr}}</span></div>
        <div id="tele-div" class="sub-div d-flex">
            <div id="tele-icon"><img src="../assets/telephone.png" /></div>
            <div id="tele-number">+65 91005019</div>
        </div>
        <div id="email-div" class="sub-div d-flex">
            <div id="email-icon"><img src="../assets/email.png" /></div>
            <div id="email-addr">designwerkz@yahoo.com.sg</div>
        </div>
        <div id="linkedin-div" class="sub-div d-flex">
            <div id="linkedin-icon"><img src="../assets/linkedin-2.png" /></div>
            <div id="linked-link">www.google.com.sg</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BigCard",
        props: ['name', 'title', 'job', 'pic', "descr"],
        methods: {
            getImgUrl: function (pic) {
                return require("../assets/" + pic)
            }
        }
    }
</script>

<style scoped>
    #contact-card-big {
        min-height: 300px;
        background-color: white;
        padding: 24px;
        margin: 10px 0px;
    }

    #img-div {
        display: flex;
        justify-content: center;
    }

    .sub-div {
        margin-bottom: 3px;
    }

    .name-text {
        font-size: 20px;
    }

    .title-text {
        font-size: 12px;
    }

    .descr-text {
        font-size: 16px;
    }
</style>