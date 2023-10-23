<template>
    <div id="main-page">
        <section id="section-one" class="section row g-0">
            <div class="col-md-6">
                <div id="hero-img-div" class="d-flex justify-content-center"><img src="../assets/hero.png" /></div>
            </div>


            <div class="col-md-6 d-flex align-items-center">
                <div>
                    <div class="sub-section"><span class="sub-heading">UX/UI Services</span></div>
                    <div class="sub-section"><span class="main-heading">Outsource Design</span></div>
                    <p class="body-text">Let us handle the UI/UX for your software projects! Just focus on coding and
                        building
                        it!</p>
                    <button class="custom-btn" @click="goToPage('/services')">Services</button>
                </div>

            </div>
        </section>
        <section id="section-two" class="section">
            <div class="sub-section"><span class="sub-heading">Meet the Team</span></div>
            <div class="sub-section"><span class="main-heading">Founders</span></div>
            <p class="body-text">Meet our 2 co-founders, Haw Foong and Yong Sheng! From army buddies to business
                partners!
            </p>
            <div id="contact-card-div" class="sub-section">
                <div class="d-flex justify-content-around">
                    <ContactCardSmall name="Haw Foong" job="UI/UX Designer" title="Co-founder" pic="haw.png">
                    </ContactCardSmall>
                    <div class="p-1"></div>
                    <ContactCardSmall name="Yong Sheng" job="Software Engineer" title="Co-founder" pic="yong.png">
                    </ContactCardSmall>
                </div>

            </div>
            <button class="custom-btn" @click="goToPage('/about')"><span>Read more about the team here</span></button>
        </section>
    </div>
</template>


<script>
    import ContactCardSmall from "../components/ContactCardSmall.vue"
    export default {
        name: "MainPage",
        components: {
            ContactCardSmall
        }
    }
</script>





<style scoped>
    #hero-img-div {
        padding: 15px 0 15px 0;
    }

    #section-one {
        background-color: #DFE8FF;
    }

    #section-two {
        background-color: #FFF8DF;
        /* padding-top: 20px; */
    }

    .custom-btn {
        background-color: white;
        color: black;
        border: none;
        border-radius: 15px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 12px
    }

    .body-text {
        margin-bottom: 15px;
    }

    #contact-card-div {
        margin-bottom: 15px;
    }
</style>