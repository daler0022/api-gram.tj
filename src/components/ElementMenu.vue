<template>
    <div class="bg-black/75 w-60 text-white flex items-center cursor-pointer">
        <div class="px-3">
          <i class="icon__toolbar" :class="icon"></i>
        </div>
        <div class="bg-white/95 text-black w-full py-2.5 pl-2">
            <slot></slot>     
         </div>
    </div>
</template>
<script>
export default {
  props: ['icon']
}
</script>
<style>
.icon__toolbar{
  color: #fff;
  font-size: 20px;
}
</style>