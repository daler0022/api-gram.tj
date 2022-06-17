<template>
    <div class="absolute top-0 left-0 z-[9999]">
        <div class="border bg-black/75 text-white w-96 rounded-md">
            <h1 class="text-2xl px-3 font-semibold">Редактировать адрес</h1>
            <div class="flex justify-between my-4 px-3">
                <label>Название</label>
                <input class="border rounded" type="text" placeholder="Название">
            </div>
            <div class="flex justify-between my-4 px-3">
                <label>Категория</label>
                <input class="border rounded" type="text" placeholder="Категория">
            </div>
            <div class="flex justify-between my-4 px-3">
                <label>Улица</label>
                <input class="border rounded" type="text" placeholder="Улица">
            </div>
            <div class="flex justify-between my-4 px-3">
                <label>Номер дома</label>
                <input class="border rounded" type="text" placeholder="Номер дома">
            </div>
            <div class="flex justify-between my-4 px-3">
                <label>Координаты</label>
                <input class="border rounded" type="text" placeholder="Координаты">
            </div>
            <div class="flex justify-between my-4 px-3">
                <input type="checkbox" class="mt-1.5 mr-2">
                <label>Показывать на карте вместо улицы и номера дома </label>
            </div>
            <div class="flex my-4 px-3">
                <div class="bg-white text-black rounded-sm mr-2 p-1 cursor-pointer">Места встреч (0)</div>
                <div class="bg-white text-black rounded-sm mr-2 p-1 cursor-pointer">Синонимы (3)</div>
            </div>
            <div class="flex my-4 px-3">
                <div class="bg-white text-black rounded-sm mr-2 p-1 cursor-pointer">Отмена</div>
                <div class="bg-white text-black rounded-sm p-1 cursor-pointer ml-auto">Заблокировать</div>
                <div class="bg-black/40 text-white rounded mx-2 p-1 cursor-pointer">Сохранить</div>
            </div>
        </div>
    </div>
</template>