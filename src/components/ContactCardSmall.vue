<template>
    <div id="contact-card-sm" class="col d-md-flex">
        <div class="d-flex justify-content-center col-md-6 col-lg-4 align-items-center">
            <div>
                <img :src="getImgUrl(pic)" v-bind:alt="pic" />
            </div>
        </div>
        <div id="info-div" class="col-md-6 col-lg-auto d-md-flex justify-content-center align-items-center">
            <div class="row">
                <div id="name-div" class="col-12 d-flex justify-content-center"><span
                        class="card-sm-text">{{name}}</span>
                </div>
                <div id="title-div-sm" class="col-12 d-flex justify-content-center"><span
                        class="card-sm-text">{{title}}</span>
                </div>
            </div>

        </div>
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
        padding: 8px;
    }

    #img-div {
        height: 60%;
        margin-bottom: 10px;
    }

    .card-sm-text {
        font-size: 12px;
    }
</style>