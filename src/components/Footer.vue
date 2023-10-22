<template>
    <footer id="footer">
        <div id="icon-div" class="d-flex justify-content-between">
            <div class="footer-icons-div"><img id="footer-logo" src="../assets/logo.jpg" /></div>
            <div class="footer-icons-div"><img class="social-media-logo" src="../assets/linkedin.png" /></div>
            <div class="footer-icons-div"><img class="social-media-logo" src="../assets/insta.png" /></div>
            <div class="footer-icons-div"><img class="social-media-logo" src="../assets/fb.png" /></div>
        </div>
        <div class="footer-div"><span>Services</span></div>
        <div class="footer-div"><span>About Us</span></div>
        <div class="footer-div"><span>Company Porfolio</span></div>
        <div class="footer-div"><span>Haw Foong's Portfolio</span></div>
        <div class="footer-div"><span>Yong Sheng's Portfolio</span></div>
        <div class="footer-div"><span>FAQ</span></div>
        <div class="footer-div"><span>Terms of Use</span></div>
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
        height: 10%;
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
</style>