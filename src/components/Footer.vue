<template>
    <footer id="footer">
        <div class="row">
            <div id="icon-div" class="col-md-3">
                <div class="row">
                    <div class="footer-icons-div col col-md-12 mb-md-3"><img id="footer-logo"
                            src="../assets/logo.jpg" /></div>
                    <div class="footer-icons-div col"><img class="social-media-logo" src="../assets/linkedin.png" />
                    </div>
                    <div class="footer-icons-div col"><img class="social-media-logo" src="../assets/insta.png" /></div>
                    <div class="footer-icons-div col"><img class="social-media-logo" src="../assets/fb.png" /></div>
                </div>

            </div>
            <div id="company-div" class="col-md-3">
                <div class="footer-header tablet-header mb-md-3">Design Werkz</div>
                <div class="footer-div"><span @click="goToPage('/services')">Services</span></div>
                <div class="footer-div"><span @click="goToPage('/about')">About Us</span></div>
            </div>
            <div id="portfolio-div" class="col-md-3">
                <div class="footer-header tablet-header mb-md-3">Portfolio</div>
                <div class="footer-div"><span @click="goToPage('/portfolio')">Company Porfolio</span></div>
                <div class="footer-div"><span @click="goToPage('/portfolio')">Haw Foong's Portfolio</span></div>
                <div class="footer-div"><span @click="goToPage('/portfolio')">Yong Sheng's Portfolio</span></div>
            </div>
            <div id="general-info-div" class="col-md-3">
                <div class="footer-header tablet-header mb-md-3">General Information</div>
                <div class="footer-div"><span @click="goToPage('/faq')">FAQ</span></div>
                <div class="footer-div"><span @click="goToPage('/terms')">Terms of Use</span></div>
            </div>

        </div>

    </footer>
</template>

<script>
    export default {
        name: "FooterBar"
    }
</script>

<style scoped>
    #footer {
        background-color: #091541;
        padding: 20px;
    }

    #icon-div {
        height: 20%;
        align-items: center;
        margin-bottom: 15px;
    }

    .footer-div {
        /* height: 10%; */
        margin-bottom: 5px;
        color: white;
    }

    .test-icon {
        height: 90%;
        background-color: lightblue;
        width: 20%;
    }

    #footer-logo {
        height: 40px;
        border-radius: 10px;
    }

    .tablet-header {
        display: none
    }

    @media screen and (min-width: 728px) {
        .tablet-header {
            display: block
        }

        .footer-header {
            color: white;
            font-weight: 600;
        }
    }
</style>