<template>
    <div class="toolbar">
    <ul style="list-style-type: none" class="flex mr-4">
      <li class="element__toolbar" @click="openToolbars('open')">
        <i class="ri-chat-3-fill icon__toolbar"></i>
      </li>
      <li class="element__toolbar" @click="openToolbars('openMapMenu')">
        <i class="ri-stack-fill icon__toolbar"></i>
      </li>
      <li class="element__toolbar" @click="$emit('zoomPlus')">
        <i class="ri-add-fill icon__toolbar"></i>
      </li>
      <li class="element__toolbar" @click="$emit('zoomMinus')">
        <i class="ri-subtract-fill icon__toolbar"></i>
      </li>
    </ul>

    <ul style="list-style-type: none" class="flex mr-4">
      <li class="element__toolbar" @click="openToolbars('openPolygonMenu')">
        <i class="ri-shape-fill icon__toolbar"></i>
      </li>
      <li class="element__toolbar" @click="openToolbars('openEditRayon')">
        <i class="ri-grid-fill icon__toolbar"></i>
      </li>
      <li class="element__toolbar" @click="openToolbars('openDistrict')">
        <i class="ri-home-gear-fill icon__toolbar"></i>
      </li>
      <li class="element__toolbar" @click="openToolbars('openFastAddress')">
        <i class="ri-flag-fill icon__toolbar"></i>
      </li>
      <li class="element__toolbar" @click="openToolbars('openRoute')">
        <i class="ri-guide-fill icon__toolbar"></i>
      </li>
      <li class="element__toolbar" @click="openToolbars('openLinear')">
        <i class="ri-ruler-fill icon__toolbar"></i>
      </li>
      <li class="element__toolbar">
        <i class="ri-route-fill icon__toolbar"></i>
      </li>
    </ul>

    <ul style="list-style-type: none" class="flex mr-4">
      <li class="element__toolbar">
        <i class="ri-eye-fill icon__toolbar"></i>
      </li>
    </ul>

    <ul style="list-style-type: none" class="flex mr-10">
      <li class="element__toolbar">
        <i class="ri-pencil-fill icon__toolbar"></i>
      </li>
      <li class="element__toolbar">
        <i class="ri-question-mark icon__toolbar"></i>
      </li>
      <li class="element__toolbar" @click="logout">
        <i class="ri-logout-box-r-fill icon__toolbar"></i>
      </li>
    </ul>
    <div class="absolute bottom-[43px] left-0 z-[9999]" v-if="open">
      <div class="w-60 py-2.5 bg-blue-900 color text-white text-center">
        Язык
      </div>
      <element-menu :icon="'ri-chat-3-fill'">
        Русский
      </element-menu>
      <element-menu :icon="'ri-chat-3-fill'">
        English
      </element-menu>
      <element-menu :icon="'ri-chat-3-fill'">
        France
      </element-menu>
    </div>
    <div class="absolute bottom-[43px] left-11 z-[9999] mr-11" v-if="openMapMenu">
      <div class="w-60 py-2.5 bg-blue-900 color text-white text-center">
        Карты
      </div>
      <element-menu :icon="'ri-stack-fill'">
        OpenStreetMap
      </element-menu>
      <element-menu :icon="'ri-stack-fill'">
        OpenStreetMap.de
      </element-menu>
      <element-menu :icon="'ri-stack-fill'">
        Bing
      </element-menu>
      <element-menu :icon="'ri-stack-fill'">
        Google
      </element-menu>
      <element-menu :icon="'ri-stack-fill'">
        Google Earth
      </element-menu>
      <element-menu :icon="'ri-stack-fill'">
        Yandex
      </element-menu>
      <element-menu :icon="'ri-stack-fill'">
        Yandex Satellite
      </element-menu>
    </div>
    <div class="absolute bottom-[43px] left-48 z-[9999] mr-11" v-if="openPolygonMenu">
      <div class="w-60 py-2.5 bg-blue-900 color text-white text-center">
        Границы города
      </div>
      <div class="bg-black/75 w-60 text-white flex items-center cursor-pointer" @click="$emit('editPolygon')">
        <div class="px-3">
          <i class="ri-shape-fill icon__toolbar" ></i>
        </div>
        <div class="bg-white/95 text-black w-full py-2.5 pl-2">
            Редактировать     
         </div>
    </div>
      <!-- <element-menu :icon="'ri-shape-fill'" >
        
      </element-menu> -->
    </div>
    <div class="absolute bottom-[43px] left-[236px] z-[9999] mr-11" v-if="openEditRayon">
      <div class="w-60 py-2.5 bg-blue-900 color text-white text-center">
        Районы
      </div>
      <element-menu :icon="'ri-grid-fill'">
        Редактировать
      </element-menu>
      <element-menu :icon="'ri-grid-fill'">
        Группировать в зоны
      </element-menu>
      <div class="bg-black/75 w-60 text-white flex items-center cursor-pointer" @click="$emit('addPolygon')">
        <div class="px-3">
          <i class="ri-grid-fill icon__toolbar" ></i>
        </div>
        <div class="bg-white/95 text-black w-full py-2.5 pl-2">
             Новый район   
         </div>
    </div>
    </div>
    <div class="absolute bottom-[43px] left-[280px] z-[9999] mr-11" v-if="openDistrict">
      <div class="w-60 py-2.5 bg-blue-900 color text-white text-center">
        Дома, улицы
      </div>
      <element-menu :icon="'ri-home-gear-fill'">
        Редактировать дома
      </element-menu>
      <div class="bg-black/75 w-60 text-white flex items-center cursor-pointer" @click="$emit('addHome')">
        <div class="px-3">
          <i class="ri-home-gear-fill icon__toolbar" ></i>
        </div>
        <div class="bg-white/95 text-black w-full py-2.5 pl-2">
            Добавить дома, улицы     
         </div>
    </div>
      <element-menu :icon="'ri-home-gear-fill'">
        Редактор улиц
      </element-menu>
    </div>
    <div class="absolute bottom-[43px] left-[324px] z-[9999] mr-11" v-if="openFastAddress">
      <div class="w-60 py-2.5 bg-blue-900 color text-white text-center">
        Быстрые адреса
      </div>
      <element-menu :icon="'ri-flag-fill'">
        Редактировать БА
      </element-menu>
      <element-menu :icon="'ri-flag-fill'">
        Добавить БА
      </element-menu>
    </div>
    <div class="absolute bottom-[43px] left-[368px] z-[9999] mr-11" v-if="openRoute">
      <div class="w-60 py-2.5 bg-blue-900 color text-white text-center">
        Маршрут
      </div>
      <element-menu :icon="'ri-flag-fill'">
        Маршрут
      </element-menu>
    </div>
    <div class="absolute bottom-[43px] left-[412px] z-[9999] mr-11" v-if="openLinear">
      <div class="w-60 py-2.5 bg-blue-900 color text-white text-center">
        Линейка
      </div>
      <element-menu :icon="'ri-flag-fill'">
        Линейка
      </element-menu>
    </div>
  </div>
</template>
<script>
import ElementMenu from '../ElementMenu.vue'
export default {
  components: {ElementMenu},
    data() {
      return {
        open: false,
        openMapMenu: false,
        openPolygonMenu: false,
        openEditRayon: false,
        openDistrict: false,
        openFastAddress: false,
        openRoute: false,
        openLinear: false
      }
    },
    methods: {
      openToolbars(elementName) {
        if(elementName == 'open') {
          this.open = !this.open,
          this.openMapMenu = false,
          this.openPolygonMenu = false,
          this.openEditRayon = false,
          this.openDistrict = false,
          this.openFastAddress = false
          this.openRoute = false
          this.openLinear = false
        } else if (elementName == 'openMapMenu') {
          this.open = false,
          this.openMapMenu = !this.openMapMenu
          this.openPolygonMenu = false,
          this.openEditRayon = false,
          this.openDistrict = false,
          this.openFastAddress = false
          this.openRoute = false
          this.openLinear = false
        } else if (elementName == 'openPolygonMenu') {
          this.open = false,
          this.openMapMenu = false
          this.openPolygonMenu = !this.openPolygonMenu,
          this.openEditRayon = false,
          this.openDistrict = false,
          this.openFastAddress = false
          this.openRoute = false
          this.openLinear = false
        } else if (elementName == 'openEditRayon') {
          this.open = false,
          this.openMapMenu = false
          this.openPolygonMenu = false,
          this.openEditRayon = !this.openEditRayon,
          this.openDistrict = false,
          this.openFastAddress = false
          this.openRoute = false
          this.openLinear = false
        } else if (elementName == 'openDistrict') {
          this.open = false,
          this.openMapMenu = false
          this.openPolygonMenu = false,
          this.openEditRayon = false,
          this.openDistrict = !this.openDistrict,
          this.openFastAddress = false
          this.openRoute = false
          this.openLinear = false
        } else if (elementName == 'openFastAddress') {
          this.open = false,
          this.openMapMenu = false
          this.openPolygonMenu = false,
          this.openEditRayon = false,
          this.openDistrict = false,
          this.openFastAddress = !this.openFastAddress
          this.openRoute = false 
          this.openLinear = false
        } else if (elementName == 'openRoute') {
          this.open = false,
          this.openMapMenu = false
          this.openPolygonMenu = false,
          this.openEditRayon = false,
          this.openDistrict = false,
          this.openFastAddress = false
          this.openRoute = !this.openRoute
          this.openLinear = false
        } else if (elementName == 'openLinear') {
          this.open = false,
          this.openMapMenu = false
          this.openPolygonMenu = false,
          this.openEditRayon = false,
          this.openDistrict = false,
          this.openFastAddress = false
          this.openRoute = false
          this.openLinear = !this.openLinear
        }
      },
      logout() {
        this.$store.state.isAuthenticate
        localStorage.removeItem('user-token')
        this.$router.push('/login')
      }
    }
}
</script>

<style>
.toolbar{
  position: absolute;
  bottom: 0px;
  left: 32%;
  z-index: 9999;
}
.element__toolbar{
  background: rgba(0 0 0 / 75%);
  padding: 6px 12px;
}
.icon__toolbar{
  color: #fff;
  font-size: 20px;
}
.element__toolbar:hover{
  background: rgba(0 0 0 / 50%);
}
</style>