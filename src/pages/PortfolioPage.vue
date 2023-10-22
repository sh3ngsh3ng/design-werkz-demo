<template>
    <div id="portfolio-page" class="section">
        <div id="portfolio-descr-div" class="row mb-md-3">
            <div id="portfolio-hero-div" class="col-md-6 d-md-flex justify-content-center align-items-center">
                <img src="../assets/portfolio-hero.png" />
            </div>
            <div id="portfolio-descr" class="col-md-6 d-md-flex justify-content-center align-items-center">
                <div>
                    <div class="sub-section"><span class="sub-heading">Portfolio</span></div>
                    <div class="sub-section"><span class="main-heading">Our Work</span></div>
                    <p class="body-text">Below are some of the work we have done thus far! Take a look and gain
                        confidence
                        in us!
                    </p>
                    <p class="body-text">Please take a look at Haw’s and Yong Sheng’s portfolio too see if our team is a
                        good fit.
                    </p>
                </div>
            </div>
        </div>
        <div id="portfolio-div" class="row">
            <div id="haw-port" class="port-btn col-md"><span>Haw's Portfolio</span></div>
            <div class="col-md-1"></div>
            <div id="yong-port" class="port-btn col-md"><span>Yong's Portfolio</span></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "PortfolioPage",

    }
</script>

<style scoped>
    #portfolio-page {
        background-color: #EDDFFF;
        min-height: 60vh;
    }

    #portfolio-descr-div {
        height: 45%;
    }

    #portfolio-div {
        height: 50%;
    }

    #portfolio-hero-div>img {
        height: 200px;
        max-width: 100%;
        height: auto;
    }

    .port-btn {
        width: 100%;
        height: 100%;
        background-color: white;
        border-radius: 10px;
        margin-bottom: 5px;
        display: flex;
        justify-content: center;
    }

    #portfolio-hero-div {
        display: none;
    }

    @media screen and (min-width: 728px) {
        #portfolio-hero-div {
            display: block;
        }

        #portfolio-descr-div {
            height: 50%;
        }

        #portfolio-div {
            height: 40%;
        }
    }
</style>