<template>
    <div class="absolute top-0 left-0 z-[9999]">
        <div class="border bg-black/75 text-white rounded-md" style="width: 510px;">
            <h1 class="text-2xl px-3 font-semibold">Маршрут</h1>
             <div class="flex mt-4 px-3">
                <input type="checkbox" class="mt-1.5 mr-2">
                <label class="text-sm">Время расчета маршрута</label>
            </div>
            <div class="flex my-0 px-3">
                <input type="checkbox" class="mt-1.5 mr-2">
                <label class="text-sm">Учитывать пробки</label>
            </div>
            <div class="flex my-0 px-3">
                <input type="checkbox" class="mt-1.5 mr-2">
                <label class="text-sm">Определять направления</label>
            </div>
            <div class="flex justify-between my-4 px-3">
                <label class="text-sm">Тип транспорта</label>
                <input class="border rounded w-[267px] text-sm" type="text" placeholder="Тип транспорта">
            </div>
            <div class="flex justify-between my-4 px-3">
                <label class="text-sm">Стратегия</label>
                <input class="border rounded w-[267px] text-sm" type="text" placeholder="Стратегия">
            </div>
            <div class="flex my-4 px-3 justify-between">
                <div class="bg-white text-black rounded-sm px-6 py-0.5 cursor-pointer text-sm">Худжанд</div>
                <input class="border rounded w-[267px] text-sm" type="text" placeholder="введите координаты или адрес">
            </div>
            <div class="flex my-4 px-3 justify-between">
                <div class="cursor-pointer text-sm">Позиция новой точки</div>
                <input class="border rounded w-[267px] text-sm" type="text" placeholder="Позиция новой строки">
            </div>
            <div class="flex my-4 px-3">
                <div class="bg-white text-black rounded-sm p-1 cursor-pointer ml-auto text-sm">Добавить</div>
                <div class="bg-black/40 text-white rounded ml-14 p-1 cursor-pointer text-sm">Добавить центр н/п</div>
            </div>
            <div class="mx-3 my-4">
                <ul class="text-sm">
                    <li>Стратегия по умолчанию:</li>
                    <li>Оптимальный</li>
                    <li>Расстояние:</li>
                    <li>Время:</li>
                    <li>С учетом пробок:</li>
                    <li>По городу:</li>
                    <li>Междугород:</li>
                    <li>Холостой пробег:</li>
                    <li>Наценка на дорогу:</li>
                    <li>Комментарий</li>
                </ul>
            </div>
            <div class="flex my-4 px-3">
                <div class="bg-white text-black rounded-sm mr-2 p-1 cursor-pointer text-sm">Google Maps</div>
                <div class="bg-white text-black rounded-sm mr-2 p-1 cursor-pointer text-sm">Yandex Maps</div>
                <div class="bg-white text-black rounded-sm mr-2 p-1 cursor-pointer text-sm">2GIS</div>
            </div>
        </div>
    </div>
</template>