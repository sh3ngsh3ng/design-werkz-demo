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
            <BigCard name="Haw Foong" title="Co-founder, UX/UI Designer" pic="haw.png" :descr=haw_descr>
            </BigCard>
            <BigCard name="Yong Sheng" title="Co-founder, Software Engineer" pic="yong.png" :descr=yong_descr>
            </BigCard>
        </div>
    </div>
</template>

<script>
    import BigCard from "../components/ContactCardBig.vue"
    export default {
        name: "AboutUsPage",
        components: {
            BigCard
        },
        data: function () {
            return {
                haw_descr: "Haw Foong is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae magna consequat tincidunt. Fusce euismod, nisl quis aliquet luctus, augue nisi sagittis enim, ut ultrices lacus lorem quis lectus. Phasellus id nunc at justo tincidunt ornare. Quisque sit amet semper eros. Morbi vitae neque et leo malesuada ullamcorper. Mauris vel nisl ut magna aliquam fringilla. In hac habitasse platea dictumst.",
                yong_descr: "Yong Sheng is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nisl ut magna aliquam fringilla. In hac habitasse platea dictumst."
            }
        }
    }
</script>

<style scoped>
    #about-us-page {
        background-color: #FFF8DF;
    }
</style>