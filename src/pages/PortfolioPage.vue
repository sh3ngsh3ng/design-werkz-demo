<template>
    <div id="main-page" class="section">
        <div class="sub-section"><span class="sub-heading">Portfolio</span></div>
        <div class="sub-section"><span class="main-heading">Our Work</span></div>
        <p class="body-text">Below are some of the work we have done thus far! Take a look and gain confidence in us!
        </p>
        <p class="body-text">Please take a look at Haw’s and Yong Sheng’s portfolio too see if our team is a good fit.
        </p>
        <div id="haw-port" class="port-btn"><span>Haw's Portfolio</span></div>
        <div id="yong-port" class="port-btn"><span>Yong's Portfolio</span></div>

    </div>
</template>

<script>

    export default {
        name: "PortfolioPage",

    }
</script>

<style scoped>
    #main-page {
        background-color: #EDDFFF;
    }

    .port-btn {
        width: 100%;
        background-color: white;
        border-radius: 10px;
        margin-bottom: 5px;
        display: flex;
        justify-content: center;
    }
</style>