<template>
    <!-- <div>
        <div id="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'accordion-' + id" aria-expanded="true">
                    {{service}}
                    {{id}}
                </button>
            </h2>
            <div :id="'accordion-' + id" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    (Service descr here)
                    - need to list render here
                </div>
            </div>
        </div>
    </div> -->
    <div v-for="(service, index) in services" :key="index">
        <div id="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#accordion-' + index" aria-expanded="true">
                    {{ service.title }}
                </button>
            </h2>
            <div :id="'accordion-' + index" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul>
                        <li v-for="(item, idx) in service.descr" :key="idx">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceAccordion",
        props: ['service', 'id'],
        data() {
            return {
                services: [
                    { title: "Brand Design", descr: ["Design", "TEst"] },
                    { title: "Wireframes", descr: ["We build native and hybrid mobile apps."] },
                    { title: "Interactive Prototype", descr: ["Design", "TEst"] }
                ]
            }
        }
    }
</script>

<style scoped>
    .accordion-button {
        background-color: white !important;
    }

    .accordion-body {
        background-color: red;
        border-radius: 0px 0px 10px 10px;
    }
</style>