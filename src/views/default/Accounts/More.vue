<template>
<div>
     <b-col md="5" class="p-0">
            <b-card no-body class="p-0"> 
                <b-card-header class="pb-0 text-size-gram mt-1">
                    <div class="">
                        <feather-icon
                            class="icon-gram"
                            icon="CreditCardIcon"
                            size="26"
                        />
                        <b> 99896947</b>
                    </div>
                        <span style="color:green;"> TJ F Maxim Khujand</span>
            </b-card-header>
            <div class="p-1">
                <hr>
            </div>
                <b-card-body class="card-body-gram py-0">
                    <div class="p-0">
                        <p class="p-0">БАЛАНС</p>
                        <h1>0 <sup style="fontSize:14px;">смн</sup></h1>
                    </div>
                </b-card-body>
                <div class="p-1">
                    <hr>
                </div>
            <b-card-body class="pt-0">
                <b-row>
                    <b-col class="col-12 mb-1">
                        <b-link v-b-modal.builing-modal class="card-link">
                            <feather-icon
                                    class="icon-gram"
                                    icon="DollarSignIcon"
                                    size="16"
                                />
                            Пополнить счет
                        </b-link>    
                    </b-col>
               <b-col class="col-12 ">
                    <b-link href="#" class="card-link">
                    <feather-icon
                            class="icon-gram"
                            icon="RefreshCwIcon"
                            size="16"
                        />
                     Движения по счету
                </b-link>
               </b-col>
                </b-row>
            </b-card-body>
            </b-card>
    </b-col>
    <b-col md="5" class="px-0">
        <b-card no-body>
                <b-card-header class="pb-0">
                    <h4 style="textAlign:center;">Привязанные карты</h4>                    
                </b-card-header>
                <div class="p-1">
                    <hr>
                </div>
                <b-card-body class="pt-0">
                    <p>Ничего не найдено.</p>
                </b-card-body>
        </b-card>
    </b-col>
    <!-- select 2 demo -->
        <b-modal
            id="builing-modal"
            title="Пополнение счета"
            ok-title="Отправить"
            @ok="ddd"
            cancel-title="Отмена"
            cancel-variant="outline-secondary"
        >
            <b-form>
                <b-row>
                    <b-col md="6">
                    <b-form-group
                    label="Сумма"
                    label-for="name"
                    >
                        <b-form-input
                            id="h-full-name"
                        />
                    </b-form-group>

                    </b-col>
                    <b-col md="6">
                    <b-form-group
                                label="Привязки"
                                label-for="h-full-name"
                            >
                                <b-form-radio
                                    v-model="Selected"
                                    plain
                                    name="some-radios3"
                                    value="A"
                                >
                                    Другая карта
                                </b-form-radio>
                            </b-form-group>

                    </b-col>
                </b-row>
            </b-form>
             <div>
                 <b-badge variant="danger">
                    Внимание
                </b-badge>
                    <span> Минимальная сумма платежа 10 смн</span><br>
                 <p class="pt-1">Совершая платеж, Вы соглашаетесь с условиями оферты интернет-эквайринга.</p>
             </div>
            </b-modal>
</div>
</template>

<script>
import {
  BCol, BCard, BCardHeader, BCardTitle, BCardBody, BButton, BCardText, BAlert, BCardFooter, BLink, BRow, BFormInput, BFormGroup, BFormRadio, BForm, BBadge
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
        BAlert,
        BCardFooter,
        BLink,
        BBadge,
        BForm,
        BRow,
        BFormInput, 
        BFormGroup, 
        BFormRadio,
    },
    data(){
        return{

        }
    },
    methods: {
      ddd() {
          console.log('dafkalfki32');
      }
  }
}
</script>

<style>
.text-size-gram{
    font-size: 16px;
}
</style>