<template>
    <div>
        <h1>Заявка на оформление разрешения на деятельность такси</h1>
        <b-col md="6" class="px-0">
            <!-- dark -->
        <b-alert
          variant="dark"
          show
        >
          <div class="alert-body">
                <div class="icon-wrapper">
                    <span>
                        <feather-icon
                            class="icon-gram"
                            icon="AlertTriangleIcon"
                            size="16"
                        />
                    Разрешение на работу в такси - первый шаг к получению приоритета. Получи разрешение и зарабатывай больше.</span>
                </div>
          </div>
        </b-alert>
        <b-card no-body class="mb-1"> 
                    <b-card-header>
                        <b-card-title>Данные о водителе<hr></b-card-title>
                    </b-card-header>
                <b-card-body class="card-body-gram">
                    <b-col cols="12">
                        <b-form-group
                            label="Фамилия Имя Отчество"
                            label-for="h-full-name"
                            label-cols-md="4"
                        >
                            <b-form-input
                            id="h-full-name"
                            placeholder=""
                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group
                            label="Водительский стаж"
                            label-for="h-full-name"
                            label-cols-md="4"
                        >
                            <b-form-input
                            id="h-full-name"
                            placeholder=""
                            />
                        </b-form-group>
                    </b-col>
                    <b-card-title class="pt-1">Данные об автомобиле<hr></b-card-title>
                    <b-col cols="12">
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
                    <b-col cols="12">
                        <b-form-group
                            label="Организация"
                            label-for="h-full-name"
                            label-cols-md="4"
                        >
                            <b-form-select
                            v-model="selected"
                            :options="options"
                        />
                        </b-form-group>
                    </b-col>
                    <b-card-title class="pt-1">Данные об организации<hr></b-card-title>
                    <b-col cols="12">
                        <b-form-group
                            label="Есть ли у вас действующие ООО/ИП"
                            label-for="h-full-name"
                            label-cols-md="4"
                        >
                        <div class="row pt-2">
                            <b-form-radio class="px-3"
                                v-model="Selected"
                                plain
                                name="some-radios3"
                                value="A"
                            >
                                Да
                            </b-form-radio>
                            <b-form-radio
                                v-model="Selected"
                                plain
                                name="some-radios3"
                                value="B"
                            >
                                Нет
                            </b-form-radio>
                        </div>
                        </b-form-group>
                    </b-col>
                    <hr>
                    <b-col cols="12" class="row justify-content-end px-0 mx-0 mb-2">
                        <b-button
                            variant="primary"
                        >
                            Оставить заявку
                        </b-button>
                    </b-col>
                </b-card-body>
            </b-card>
        </b-col>
    </div>
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
    data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Simple Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    }
  },
}
</script>

<style>
</style>