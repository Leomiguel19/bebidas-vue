import { ref, onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import APIServices from '@/services/APIServices'

export const useBebidasStore = defineStore('bebidas', () => {
    const categorias = ref([])
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    })
    const recetas = ref([])

    onMounted(async function() {
        const {data: {drinks}} = await APIServices.obtenerCategorias()
        categorias.value = drinks
    })

    async function obtenerRecetas() {
        const { data: {drinks} } = await APIServices.buscarRecetas(busqueda)
        recetas.value = drinks
    }

    return {
        categorias,
        busqueda,
        obtenerRecetas,
        recetas
    }
})