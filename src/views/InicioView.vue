<script setup>
    import { useBebidasStore } from '@/stores/bebidas';
    import Receta from '../components/Receta.vue'

    const bebidas = useBebidasStore()
</script>
<template>
    <div class="text-6xl font-extrabold">Recetas</div>
    
    <p v-if="bebidas.noRecetas" class="my-10 text-center text-2xl">No hay Resultados, utiliza el formulario para buscar recetas.</p>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        <Receta
            v-for="receta in bebidas.recetas"
            :receta="receta"
            :key="receta.idDrink"
        />
    </div>
</template>
