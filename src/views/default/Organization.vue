<template>
    <div>
        <h1 class="pb-1">Сервисы</h1>
        <b-col md="3" class="p-gram">
            <b-form-group>
                <v-select
                    v-model="selected"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    :options="option"
                />
            </b-form-group>
        </b-col>
        <div class="pb-1">
            <b-button
                type="submit"
                variant="primary"
                >
                    Подключить все сервисы
            </b-button>
        </div>
        <b-col md="4" class="p-gram">
            <b-card no-body class="mb-1"> 
                <b-card-header>
                    <b-card-title>TJ Maxim Khujand (0 смн)</b-card-title>
                </b-card-header>
                <b-card-body class="card-body-gram">
                    <div>
                        <h3>99896947</h3>
                        <b>Номер лицевого счета</b>
                    </div>
                    <div class="pb-2">
                        <h3></h3>
                        <b>Автомобили</b>
                    </div>
                    <div>
                        <p>Разнорабочий (Подключен)</p>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
        <div class="pb-1">
            <b-button
                v-b-modal.modal-select2
                variant="primary"
                >
                    Добавить автомобиль
            </b-button>
        </div>
        <!-- select 2 demo -->
            <b-modal
            id="modal-select2"
            title="Новый автомобиль"
            ok-title="Создать"
            @ok="ddd"
            cancel-title="Отмена"
            cancel-variant="outline-secondary"
            >
            <b-form>
                <!-- info -->
                <b-alert
                    variant="info"
                    show
                    >
                    <div class="alert-body">
                        <span>Будьте внимательны при заполнении. Для подтверждения данных будет назначен фотоконтроль.</span>
                    </div>
                </b-alert>
                <b-form-group
                label="Категория"
                label-for="name"
                >
                <b-form-select
                    v-model="selected"
                    :options="options"
                />
                </b-form-group>
                <b-form-group
                label="Марка"
                label-for="vue-select"
                >
                <v-select
                    id="vue-select"
                    v-model="selected"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="option"
                />
                </b-form-group>
                <b-form-group
                label="Год выпуска"
                label-for="zip-code"
                >
                <b-form-select
                    v-model="selected"
                    :options="options"
                />
                </b-form-group>
                <b-form-group
                label="Марка"
                label-for="vue-select"
                >
                <v-select
                    id="vue-select"
                    v-model="selected"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="option"
                />
                </b-form-group>
                <b-input-group>
                    <b-input-group-prepend input-group-prepend>
                        <b-dropdown
                        text="Action"
                        variant="outline-primary"
                        >
                        <b-dropdown-item>Action </b-dropdown-item>
                        <b-dropdown-item>Another Action</b-dropdown-item>
                        <b-dropdown-item>Something else here</b-dropdown-item>
                        <b-dropdown-divider />
                        <b-dropdown-item>Separated link</b-dropdown-item>
                        </b-dropdown>
                    </b-input-group-prepend>
                    <b-form-input placeholder="Dropdown on left" />
                </b-input-group>
            </b-form>
            </b-modal>
    </div>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BCardText, BCard, BCardHeader, BCardTitle, BCardBody, BButton, BInputGroup, BInputGroupAppend, BAlert, BFormSelect, 
  BInputGroupPrepend, BFormInput, BDropdown, BDropdownItem, BDropdownDivider, BForm
} from 'bootstrap-vue'
import vSelect from 'vue-select'
export default {
    components: {
        BRow,
        BCol,
        BCard,
        BForm,
        BCardHeader,
        BCardTitle,
        BCardBody,
        BButton,
        BFormGroup,
        BCardText,
        vSelect,
        BFormInput,
        BInputGroup, 
        BInputGroupAppend, 
        BAlert, 
        BFormSelect, 
        BInputGroupPrepend, 
        BDropdown, 
        BDropdownItem, 
        BDropdownDivider
    },
    data() {
        return {
            selected: { title: 'Square' },
            selected1: {
                title: 'Aperture',
                icon: 'ApertureIcon',
            },
            option: [{ title: 'Square' }, { title: 'Rectangle' }, { title: 'Rombo' }, { title: 'Romboid' }],
            books: [
                {
                title: 'Aperture',
                icon: 'ApertureIcon',
                },
                {
                title: 'Codepen',
                icon: 'CodepenIcon',
                },
                {
                title: 'Globe ',
                icon: 'GlobeIcon',
                },
                {
                title: 'Instagram ',
                icon: 'InstagramIcon',
                },
            ],
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
    .p-gram{
        padding: 0;
    }
    .card-body-gram{
        padding-bottom: 0;
    }
</style>