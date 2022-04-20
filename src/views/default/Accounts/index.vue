<template>
    <div>
        <h1 class="pb-2">Счета и карты</h1>
        <div>
            <b class="font-size-amount">0 смн</b>
            <h6>Общий баланс</h6>
        </div>
        <hr>
            <b-col md="4" class="p-gram pt-1">
            <b-card no-body class="mb-1"> 
                <b-card-header class="text-size-gram">
                    <div>
                        <b>0</b> <sup>смн</sup>
                    </div>
                    <span><b>TJ F Maxim Khujand</b></span>
                </b-card-header>
                <b-card-body class="card-body-gram">
                    <div class="pb-3">
                        <p class="margin-gram">Номер счета</p>
                        <h5>99896947</h5>
                    </div>
                    <div class="mb-2">
                        <b-button
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            variant="outline-primary"
                            :to="'accounts/more'"
                        >
                            Подробнее
                        </b-button>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </div>
</template>

<script>
import {
  BCol, BCard, BCardHeader, BCardTitle, BCardBody, BButton, BCardText, BAlert
} from 'bootstrap-vue'
export default {
    components: {
        BCol,
        BCard,
        BCardHeader,
        BCardTitle,
        BCardBody,
        BButton,
        BCardText,
        BAlert
    },
}
</script>

<style>
.font-size-amount{
    font-size: 2.2rem;
}
.p-gram{
    padding: 0;
}
.margin-gram{
    margin: 0;
}
</style>