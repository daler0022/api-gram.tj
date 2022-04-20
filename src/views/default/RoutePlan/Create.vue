<template>
<div>
  <h1>Добавить запланированный маршрут</h1>
        <b-card>
            <b-form-group>
                <b-row >
                    <b-col cols="6">
                        <h2>Откуда</h2>
                        <hr>
                        <div>
                            <h6>Населённый пункт</h6>
                            <v-select/>
                        </div>
                        <b-row class="mt-1">
                            <b-col cols="9" >
                                <h6>Адрес</h6>
                                <v-select class="mb-1"/>
                            </b-col>
                            <b-col cols="3" >
                                <h6>№</h6>
                                <b-form-input type="number"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="6">
                        <h2>Куда</h2>
                        <hr>
                        <div>
                            <h6>Населённый пункт</h6>
                            <v-select/>
                        </div>
                        <b-row class="mt-1">
                            <b-col cols="9" >
                                <h6>Адрес</h6>
                                <v-select class="mb-1"/>
                            </b-col>
                            <b-col cols="3" >
                                <h6>№</h6>
                                <b-form-input type="number"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="p-2 col-md-6 col-12">
                        <h6>Тип запланированного маршрута</h6>
                        <b-tabs pills card class="col-md-12 col-12 p-0">
                            <b-tab title="Дата" class="p-0" active><h6>Дата поездки</h6><b-form-input  type="date"></b-form-input></b-tab>
                            <b-tab title="Расписание">
                                <h6>Расписание</h6>
                                <b-form-checkbox-group
                                    v-model="selected"
                                    :options="options"
                                    :aria-describedby="ariaDescribedby"
                                    buttons
                                    button-variant="outline-primary"
                                    size="md"
                                    name="schedules"
                                ></b-form-checkbox-group>
                            </b-tab>
                        </b-tabs>
                    </b-col>
                    <b-col class="p-2 col-md-6 col-12">
                        <h6>Автомобиль</h6>
                        <v-select placeholder="Без Автомобиля, А 01607750"/>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="p-2 col-md-6 col-12">
                        <h6>Время начала</h6>
                        <b-form-input  type="time"></b-form-input>
                    </b-col>
                    <b-col class="p-2 col-md-6 col-12">
                        <h6>Время окончания</h6>
                        <b-form-input  type="time"></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <div class="col-md-12">
                        <h2>Когда отправлять уведомления о полученных заказах</h2>
                    <hr/>
                    </div>
                    <b-col class="p-2 col-md-6 col-12">
                        <h6>Время начала</h6>
                        <b-form-input  type="time"></b-form-input>
                    </b-col>
                    <b-col class="p-2 col-md-6 col-12">
                        <h6>Время окончания</h6>
                        <b-form-input  type="time"></b-form-input>
                    </b-col>
                    <div class="col-md-12 col-12">
                        <hr >
                    </div>
                <div class="col-md-12">
                        <b-button
                    type="submit"
                    variant="primary"
                    >
                        Сохранять
                </b-button>
                </div>
                </b-row>
            </b-form-group>
        </b-card>         
</div>
</template>

<script>
import {
  BButton,BCard, BFormGroup, BCol, BRow, BFormInput, BTab, BTabs, BFormCheckboxGroup 
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
    components: {
        BButton, BCard, BFormGroup, vSelect, BCol, BRow, BFormInput, BTab, BTabs, BFormCheckboxGroup
    },
    data(){
        return{
            selected: [], // Должна быть ссылка на массив!
        options: [
          { text: 'Пн', value: 'Mon' },
          { text: 'Вт', value: 'Tue' },
          { text: 'Ср', value: 'Wed' },
          { text: 'Чт', value: 'Thu' },
          { text: 'Пт', value: 'Fri' },
          { text: 'Сб', value: 'Sat' },
          { text: 'Вс', value: 'Sun' }
        ]
        }
    }
}
</script>

<style>

</style>