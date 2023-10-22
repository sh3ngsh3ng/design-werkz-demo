<template>
    <div id="about-us-page" class="section">
        <div class="sub-section"><span class="sub-heading">Meet the Team</span></div>
        <div class="sub-section"><span class="main-heading">Our Story</span></div>
        <p class="body-text">
            A common challenge amongst Software Developers is UI/UX Design. It is common for
            developers to
            have many ideas for side projects but lack the ability in creating attractive and user-friendly interfaces.
            This is a
            common obstacle for many developers, discouraging them from pursuing their projects. One can only wonder how
            many wonderful software projects have been
            killed because of this!
        </p>
        <p class="body-text">
            With this pain point in mind, our founders came together to tackle this challenge. They brought their
            expertise and skillsets to WebFrames to provide solutions and support developers with their projects!
        </p>
        <p class="body-text">
            Meet our 2 co-founders of WebFrames!
        </p>
        <div>
            <BigCard title="Co-founder, UX/UI Designer"></BigCard>
        </div>
    </div>
</template>

<script>
    import BigCard from "../components/ContactCardBig.vue"
    export default {
        name: "AboutUsPage",
        components: {
            BigCard
        }
    }
</script>

<style scoped>
    #about-us-page {
        background-color: #FFF8DF;
    }
</style>