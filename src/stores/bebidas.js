import { ref, onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import APIServices from '@/services/APIServices'

export const useBebidasStore = defineStore('bebidas', () => {
    const categorias = ref([])
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    })

    onMounted(async function() {
        const {data: {drinks}} = await APIServices.obtenerCategorias()
        categorias.value = drinks
    })

    function obtenerRecetas() {
        console.log("Consultando API...")
    }

    return {
        categorias,
        busqueda,
        obtenerRecetas
    }
})