<template>
    <div>
        <h1>История поездок</h1>
        <div>
            <!-- info -->
            <b-alert
            variant="info"
            show
            >
            <div class="alert-body">
                <span>Внимание! Данный раздел содержит информацию только за последние 3 месяца.</span>
            </div>
            </b-alert>
        </div>
        <div>Ничего не найдено.</div>
    </div>
</template>

<script>
import { BAlert, BCardText } from 'bootstrap-vue'
export default {
    components: {
        BAlert,
        BCardText,
    },
}
</script>