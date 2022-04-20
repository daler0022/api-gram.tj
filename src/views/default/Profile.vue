<template>
    <div>
        <h1 class="pb-1">Профиль</h1>
        <b-row>
            <b-col md="5">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title>Автомобили</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <blockquote>
                            <p>Ничего не найдено.</p>
                        </blockquote>
                        <div class="d-flex justify-content-end">
                            <b-button
                                v-b-modal.modal-select2
                                variant="primary"
                                >
                                    Создать автомобиль
                            </b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <!-- select 2 demo -->
            <b-modal
            id="modal-select2"
            title="Новый автомобиль"
            ok-title="Создать"
            @ok="addTransport"
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
                    v-model="transport.category_car_id"
                    :options="categories"
                    value-field="id"
                    text-field="name"
                />
                </b-form-group>
                <b-form-group
                label="Марка"
                label-for="vue-select"
                >
                <v-select
                    v-model="transport.car_model_id"
                    :options="marks"
                    label="name"
                    :reduce="item => item.id"
                >
                    <template #option="{ name }">
                        <span> {{ name }}</span>
                    </template>
                </v-select>
                </b-form-group>
                <b-form-group
                label="Год выпуска"
                label-for="zip-code"
                >
                <b-form-select
                    v-model="transport.year_of_issue"
                    :options="yearOFIssue"
                    value-field="id"
                    text-field="name"
                />
                </b-form-group>
                <b-form-group
                label="Цвет"
                label-for="vue-select"
                >
                <v-select
                    v-model="transport.color_id"
                    :options="color"
                    label="name"
                    :reduce="item => item.id"
                > 
                    <template #option="{ name }">
                        <span> {{ name }}</span>
                    </template>
                </v-select>
                </b-form-group>
                <b-input-group class="mb-1 pt-1">
                    
                    <!-- <b-input-group-prepend input-group-prepend>
                        <b-dropdown
                        variant="outline-primary"
                        >
                        <b-dropdown-item>вфдэ</b-dropdown-item>
                        </b-dropdown>
                    </b-input-group-prepend> -->
                    <b-form-input placeholder="Госномер" v-model="transport.car_number" />
                </b-input-group>
            </b-form>
            </b-modal>
            <b-col md="7">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title>Личные данные</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <b-form @submit.prevent>
                            <b-row>
                                <b-col cols="12">
                                <b-form-group
                                    label="Фамилия Имя Отчество"
                                    label-for="h-full-name"
                                    label-cols-md="4"
                                >
                                    <b-form-input
                                    disabled
                                    id="h-full-name"
                                    placeholder="Фамилия Имя Отчество"
                                    />
                                </b-form-group>
                                </b-col>
                                <b-col cols="12">
                                <b-form-group
                                    label="Ник"
                                    label-for="h-nick"
                                    label-cols-md="4"
                                >
                                    <b-form-input
                                    disabled
                                    id="h-nick"
                                    placeholder="Ник"
                                    />
                                </b-form-group>
                                </b-col>
                                <b-col cols="12">
                                <b-form-group
                                    label="Пол"
                                    label-for="h-gender"
                                    label-cols-md="4"
                                >
                                    <b-form-input
                                    disabled
                                    id="h-gender"
                                    placeholder="Пол"
                                    />
                                </b-form-group>
                                </b-col>
                                <b-col cols="12">
                                <b-form-group
                                    label="Логин"
                                    label-for="h-login"
                                    label-cols-md="4"
                                >
                                    <b-form-input
                                    disabled
                                    id="h-login"
                                    placeholder="Логин"
                                    />
                                </b-form-group>
                                </b-col>
                                <b-col cols="12">
                                <b-form-group
                                    label="Электронная почта"
                                    label-for="h-email"
                                    label-cols-md="4"
                                >
                                    <b-input-group>
                                    <b-form-input placeholder="Электронная почта" />
                                    <b-input-group-append>
                                        <b-button variant="outline-primary" class="btn-gram">
                                        <div class="icon-wrapper">
                                            <feather-icon
                                            class="icon-gram"
                                                icon="Edit2Icon"
                                                size="12"
                                            />
                                        </div>
                                        </b-button>
                                    </b-input-group-append>
                                    </b-input-group>
                                </b-form-group>
                                </b-col>
                                <b-col cols="12">
                                <b-form-group
                                    label="Номер для связи"
                                    label-for="h-phone"
                                    label-cols-md="4"
                                >
                                    <b-input-group>
                                    <b-form-input placeholder="Номер для связи" />
                                    <b-input-group-append>
                                        <b-button variant="outline-primary" class="btn-gram">
                                        <div class="icon-wrapper">
                                            <feather-icon
                                                class="icon-gram"
                                                icon="Edit2Icon"
                                                size="16"
                                            />
                                        </div>
                                        </b-button>
                                    </b-input-group-append>
                                    </b-input-group>
                                </b-form-group>
                                </b-col>
                                <b-col cols="12">
                                <b-form-group
                                    label="Дата рождения"
                                    label-for="h-date-of-birth"
                                    label-cols-md="4"
                                >
                                    <b-form-input
                                    disabled
                                    id="h-date-of-birth"
                                    placeholder="Дата рождения"
                                    />
                                </b-form-group>
                                </b-col>
                            </b-row>

                            </b-form>
                        <div>
                            <b-button
                                type="submit"
                                variant="primary"
                                >
                                    Сменить пароль
                            </b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {
  BRow, BCol, BCard, BCardHeader, BCardTitle, BCardBody, BCardText, BButton, BFormGroup, BFormInput, BFormCheckbox, BForm,
  BInputGroup, BInputGroupAppend, BAlert, BFormSelect, BInputGroupPrepend, BDropdown, BDropdownItem, BDropdownDivider
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import axios from 'axios';
export default {
    components: {
    BRow,
    BCol,
    BCard,
    BButton,
    BCardHeader,
    BInputGroupAppend,
    BInputGroup,
    BCardBody,
    BCardTitle,
    BCardText,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BAlert,
    vSelect,
    BFormSelect, 
    BInputGroupPrepend,
    BDropdown,
    BDropdownItem,
    BDropdownDivider
  },
  data() {
      return {
          transportInfo: [],
          categories: [],
          marks: [],
          yearOFIssue: [],
          color: [],
          transport: {
            category_car_id : null,
            car_model_id : null,
            year_of_issue: null,
            color_id: null,
            car_number: '',
          }
      }
  },
  mounted() {
      this.getData()
  },
  computed: {
      category() {
        this.categories = this.transportInfo.category
      },
      marka() {
          this.marks = this.transportInfo.marka
      },
      year() {
          this.yearOFIssue = this.transportInfo.year_of_issue
      },
      colors() {
          this.color = this.transportInfo.color
      }
  },
  methods: {
      addTransport() {
          this.$http.post('http://10.250.1.101:8000/api/driver/add-transport', this.transport)
          .then(res => {
              console.log(res);
              this.refreshData()
          })
          .catch(err => {
              console.log(err);
          })
          console.log('dafkalfki32');
      },
      getData() {
          this.$http.get('http://10.250.1.101:8000/api/driver/directory/transport-info')
            .then(res => {
                this.transportInfo = res.data
                console.log(this.transportInfo);
            })
      },
      refreshData() {
          this.transport = {
            category_car_id : null,
            car_model_id : null,
            year_of_issue: null,
            color_id: null,
            car_number: '',
          }
      }
  }
}
</script>

<style scoped>
.btn-gram{
    padding: 0.4rem 1rem;
}
.icon-gram{
    height: 16px;
    width: 16px;
}
</style>