<template>
<b-col md="5">
        <b-card class="p-0 m-0">
    <b-tabs
      fill
      pills
      class="p-0"
    >
      <b-tab
        @click="isCard='fin'"
        title="Финансы"
        active
      >
        <b-card-body class="pb-0">
          <a href="/" class="mb-1">07.04.2022</a><br>
          <div>
            <b class="font-size-amount">0 смн</b><p>доход</p>
          </div>
          <hr>
          <div class="row justify-content-between px-2">
              <b>Стоимость заказов</b>
              <b>0 c</b>
          </div>
          <hr>
          <div class="row justify-content-between px-2">
              <b>Комиссия</b>
              <b>0 c</b>
          </div>
          <div>
            <b class="font-size-amount">0 смн</b><p>альтернативный доход</p>
          </div>
          <hr>
          <div class="row justify-content-between px-2">
              <b>Привлечение водителей</b>
              <b>0 c</b>
          </div>
          <hr>
          <div class="row justify-content-between px-2">
              <b>Привлечение клиентов</b>
              <b>0 c</b>
          </div>
        </b-card-body>
      </b-tab>
      <b-tab title="Заказы" @click="isCard='orders'">
        <b-card-body class="px-0">
         <a href="/" class="mb-1">07.04.2022</a><br>
         <b-row>
           <b-col md="6">
             <div>
            <b class="font-size-amount">0</b><p>выполнено</p>
          </div>
           </b-col>
           <b-col md="6">
             <div>
            <b class="font-size-amount">0</b><p>отменено</p>
          </div>
           </b-col>
         </b-row>
          
        </b-card-body>
      </b-tab>
    </b-tabs>
  </b-card>

      <b-card class="p-0 mt-3" v-if="isCard=='fin'">
        <h2>Как заработать больше</h2>
        <div class="mb-2 mt-2 p-0">
          <b>Берите заказы в режиме AUTO. Это заказы с адресов, которые близко к водителю. Так можно увеличить доход и сэкономить время и топливо.</b>
        </div>
         <b-link href="#" class="card-link">Подробнее про режим AUTO</b-link>
      </b-card>
</b-col>
    
</template>

<script>
import { BTabs, BTab, BCard, BCardBody, BCol, BRow, BLink } from 'bootstrap-vue'
export default {
    components: {
        BCardBody,
        BCard,
        BTabs,
        BTab,
        BCol, 
        BRow,
        BLink
  },
  data() {
    return {
      isCard: 'fin'
    }
  },
}
</script>

<style>
.font-size-amount{
    font-size: 2.2rem;
}
</style>