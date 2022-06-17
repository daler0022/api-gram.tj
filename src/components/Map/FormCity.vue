<template>
    <div>
        <div class="text-white rounded-md">
            <h1 class="text-2xl px-3 font-semibold">Редактирование границ города</h1>
            <div class="flex justify-between my-4 px-3">
                <label class="mr-3">WKT</label>
                <input class="border text-black rounded mx-0 w-[267px]" type="text" placeholder="WKT" :value="coordinates">
            </div>
            <div class="flex my-4 px-3">
                <div class="bg-white text-black rounded-sm mr-2 py-1 px-2 cursor-pointer"><i class="ri-search-line"></i></div>
                <button class="bg-white text-black rounded-sm p-1 ml-auto" @click="$emit('update')">Отменить</button>
                <button class="bg-black/40 text-white rounded ml-2 p-1" @click="$emit('postPolygon')">Сохранить</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['coordinates'],
}
</script>