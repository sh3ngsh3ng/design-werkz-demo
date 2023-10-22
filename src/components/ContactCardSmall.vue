<template>
    <div id="contact-card-sm" class="col">
        <div id="img-div" class="d-flex justify-content-center"><img :src="getImgUrl(pic)" v-bind:alt="pic" /></div>
        <div id="name-div" class="d-flex justify-content-center"><span class="card-sm-text">{{name}}</span></div>
        <!-- <div id="job-div">{{job}}</div> -->
        <div id="title-div-sm" class="d-flex justify-content-center"><span class="card-sm-text">{{title}}</span></div>
    </div>
</template>

<script>
    export default {
        name: "SmallCard",
        props: ['name', 'title', 'job', 'pic'],
        methods: {
            getImgUrl: function (pic) {
                return require("../assets/" + pic)
            }
        }
    }
</script>

<style scoped>
    #contact-card-sm {
        height: 160px;
        background-color: white;
        padding: 10px;
    }

    #img-div {
        height: 60%;
        margin-bottom: 10px;
    }

    .card-sm-text {
        font-size: 12px;
    }
</style>