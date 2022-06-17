<template>
    <div>
        <div class="text-white rounded-md">
            <h1 class="text-2xl px-3 font-semibold">Редактировать дом</h1>
            <div class="flex justify-between items-center my-4 px-3">
                <label class="text-sm">Номер дома</label>
                <input class="border rounded w-[150px] text-sm text-black px-2 py-1" type="text" :value="newAddress.house_number">
            </div>
            <div class="flex justify-between items-center my-4 px-3">
                <label class="text-sm">Тип дома</label>
                <input class="border rounded w-[150px] text-sm text-black px-2 py-1" type="text">
            </div>  
            <div class="flex justify-between items-center my-4 px-3">
                <label class="text-sm">Улица</label>
                <input class="border rounded w-[150px] text-sm text-black px-2 py-1" type="text" :value="newAddress.street">
            </div>  
            <div class="flex justify-between items-center my-4 px-3">
                <label class="text-sm">Район</label>
                <input class="border rounded w-[150px] text-sm text-black px-2 py-1" type="text">
            </div>
            <div class="flex justify-between items-center my-4 px-3">
                <label class="text-sm">Координаты</label>
                <input class="border rounded w-[150px] text-sm text-black px-2 py-1" type="text" :value="[newAddress.lat + ' '+ newAddress.lng]">
            </div>   
            <div class="flex justify-between items-center my-4 px-3">
                <label class="text-sm">Привязка к дороге</label>
                <div class="bg-white text-black rounded-sm pl-6 pr-7 cursor-pointer text-sm px-2 py-1">Редактировать</div>
            </div>
            <div class="flex my-6 px-3">
                <div class="bg-white text-black rounded-sm p-1 cursor-pointer text-sm px-2 py-1">Отмена</div>
                <div class="bg-white text-black rounded-sm mr-3 p-1 cursor-pointer text-sm ml-auto px-2 py-1">Удалить</div>
                <div class="bg-white text-black rounded-sm p-1 cursor-pointer text-sm px-2 py-1">Сохранить</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['newAddress'],
}
</script>