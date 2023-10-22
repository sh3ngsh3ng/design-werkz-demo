<template>
    <div id="contact-card-big" class="col">
        <div id="img-div"></div>
        <div id="name-div"><span class="name-text">Name</span></div>
        <div id="title-div"><span class="title-text">{{title}}</span></div>
        <div id="descr-div"><span class="descr-text">Descr</span></div>
        <div id="tele-div"></div>
        <div id="email-div"></div>
        <div id="linkedin-div"></div>
    </div>
</template>

<script>
    export default {
        name: "BigCard",
        props: ['name', 'title', 'job', 'pic']
    }
</script>

<style scoped>
    #contact-card-big {
        height: 300px;
        background-color: white;
        padding: 10px;
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