<template>
    <b-col md="6" class="px-0">
        <h1>Реклама на автомобиле</h1>
        <b-card no-body class="mt-1">
            <b-card-header class="pb-0">
                <b-card-title>Данные о водителе<hr></b-card-title>
            </b-card-header>
            <b-card-body>
                <b-col cols="12" class="px-0">
                    <!-- info -->
                    <b-alert
                    variant="info"
                    show
                    >
                    <div class="alert-body">
                        <span>Выполнять заказы сервисов можно с приоритетом и сниженной комиссией, оклеив автомобиль рекламой.
                        Выберите автомобиль, сервис и тип оклейки.</span>
                    </div>
                    </b-alert>
                </b-col>
                <b-col cols="12" class="px-0">
                        <b-form-group
                            label="Автомобиль"
                            label-for="h-full-name"
                            label-cols-md="4"
                        >
                            <b-form-select
                            v-model="selected"
                            :options="options"
                        />
                        </b-form-group>
                    </b-col>
            </b-card-body>
        </b-card>
        <b-card no-body class="mt-1">
            <b-card-header class="pb-0">
                <b-card-title>Проверка рекламы на машине<hr></b-card-title>
            </b-card-header>
            <b-card-body>
                <b-col cols="12" class="px-0">
                    <!-- info -->
                    <b-alert
                    variant="info"
                    show
                    >
                    <div class="alert-body">
                        <span>Пройдите фотоконтроль, если впервые разместили рекламу на авто или не прошли проверку оклейки вовремя.</span>
                    </div>
                    </b-alert>
                </b-col>
                <b-col cols="12" class="px-0">
                        <b-form-group
                            label="Автомобиль"
                            label-for="h-full-name"
                            label-cols-md="4"
                        >
                            <b-form-select
                            v-model="selected"
                            :options="options"
                        />
                        </b-form-group>
                    </b-col>
            </b-card-body>
        </b-card>
    </b-col>
</template>

<script>
import {
  BCol, BCard, BCardHeader, BCardTitle, BCardBody, BButton, BFormSelect, BAlert, BFormGroup, BFormInput, BFormRadio
} from 'bootstrap-vue'
export default {
    components: {
        BCol,
        BCard,
        BCardHeader,
        BCardTitle,
        BCardBody,
        BButton,
        BFormSelect,
        BAlert,
        BFormGroup, 
        BFormInput,
        BFormRadio
    },
}
</script>