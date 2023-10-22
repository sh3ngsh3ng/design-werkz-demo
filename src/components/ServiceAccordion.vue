<template>
    <div>
        <div id="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    (Service title here)
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    (Service descr here)
                    - need to list render here
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ServiceAccordion",
        props: ['text']
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