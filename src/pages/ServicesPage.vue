<template>
    <div id="service-page" class="section">
        <div class="row mb-md-3">
            <div id="services-hero-div" class="col-md-6 d-md-flex justify-content-center align-items-center"><img
                    src="../assets/services-hero.png" /></div>
            <div class="col-md-6">
                <div class="sub-section"><span class="sub-heading">Services</span></div>
                <div class="sub-section"><span class="main-heading">What We Do</span></div>
                <p class="body-text">At WebFrames, we aim to provide an affordable and comprehensive UI/UX services for
                    developers who want to bring their
                    software projects to life! We do the design, research, testing
                    for you so that you can focus on coding and building your million dollar application!</p>
                <p class="body-text">Below is a list of services we provide! </p>
            </div>
        </div>
        <div class="accordion" id="accordionExample">
            <ServiceAccordion></ServiceAccordion>
        </div>

    </div>
</template>

<script>
    import ServiceAccordion from "../components/ServiceAccordion.vue"
    export default {
        name: "ServicesPage",
        components: {
            ServiceAccordion
        }
    }
</script>

<style scoped>
    #service-page {
        background-color: #DFFFEA;
    }

    #services-hero-div {
        display: none;
    }

    @media screen and (min-width: 728px) {
        #services-hero-div {
            display: block;
        }

        #service-page {
            min-height: 80vh;
        }
    }
</style>