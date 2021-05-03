<template>
    <div>
        <AppHeader />
        <div class="container pt-4 pb-4">
            <Nuxt />
        </div>
    </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
export default {
    components: { AppHeader },
}
</script>
