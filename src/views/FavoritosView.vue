<script setup>
    import Receta from '@/components/Receta.vue';
    import { useFavoritosStore } from '@/stores/favoritos'

    const favoritos = useFavoritosStore()
</script>
<template>
    <div class="text-6xl font-extrabold">Favoritos</div>

    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        <Receta
            v-for="receta in favoritos.favoritos"
            :receta="receta"
            :key="receta.idDrink"
        />
    </div>
</template>
