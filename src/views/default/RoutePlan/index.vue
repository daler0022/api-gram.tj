<template>
    <div>
        <h1>Запланированные маршруты</h1>
        <div class="pb-1">
            <b-button
                type="submit"
                variant="primary"
                :to="'/route-plan/create'"
                >
                    Добавить маршрут
            </b-button>
        </div>
        <div>Ничего не найдено</div>
    </div>
</template>

<script>
import {
  BButton
} from 'bootstrap-vue'
export default {
    components: {
        BButton
    },
}
</script>