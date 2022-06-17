<template>
    <div class="">
        <div class="text-white" >
            <h1 class="text-2xl px-3 font-semibold">Добавить район</h1>
            <div class="my-4 px-3">
                <label>Название</label>
                <input class="border rounded text-black" type="text" placeholder="Название">
            </div>
            <div class="my-4 px-3">
                <label>Зона</label>
                <input class="border rounded text-black" type="text" placeholder="Зона">
            </div>
            <div class="my-4 px-3">
                <p class="mr-20">Площадь</p>
                <p>1.527 кв.км.</p>
            </div>
            <div class="flex my-4 px-3">
                <label>Наценки на район</label>
                <div class="bg-white text-black rounded-sm ml-4 p-1 cursor-pointer">Редактировать</div>
            </div>
            <div class="flex my-4 px-3">
                <label>Соседние районы</label>
                <div class="bg-white text-black rounded-sm ml-4 p-1 cursor-pointer">Редактировать</div>
            </div>
            <div class="my-4 px-3">
                <label>WKT</label>
                <input class="border rounded text-black" type="text" placeholder="WKT">
            </div>
            <div class="my-4 px-3">
                <label>Итоговый вид в <br> Taxsee Driver</label>
                <input class="border rounded text-black" type="text" placeholder="Итоговый вид в">
            </div>
            <div class="flex my-4 px-3">
                <div class="bg-white text-black rounded-sm mr-2 p-1 cursor-pointer">Отмена</div>
                <div class="bg-white text-black rounded-sm p-1 cursor-pointer ml-auto">Заблокировать</div>
                <div class="bg-black/40 text-white rounded ml-2 p-1 cursor-pointer">Сохранить</div>
            </div>
        </div>
    </div>
</template>