<template>
    <div class="h-full bg-black/70 w-80 absolute top-0 right-0 z-[9999]" :class="!panel ? 'hidden' : ''">
        <div @click="$emit('close')" class="text-white text-2xl ml-1 cursor-pointer"><i class="ri-close-line"></i></div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['panel'],
}
</script>