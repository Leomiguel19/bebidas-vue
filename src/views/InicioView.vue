<script setup>
    import { useBebidasStore } from '@/stores/bebidas';
    import Receta from '../components/Receta.vue'

    const bebidas = useBebidasStore()
</script>
<template>
    <div class="text-6xl font-extrabold">Recetas</div>

    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        <Receta
            v-for="receta in bebidas.recetas"
            :receta="receta"
            :key="receta.idDrink"
        />
    </div>
</template>
