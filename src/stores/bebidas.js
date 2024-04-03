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

    async function seleccionarBebida(id){
        const { data: {drinks} } = await APIServices.buscarReceta(id)
        console.log('drinks');
        console.log(drinks[0]);
        // recetas.value = drinks
    }

    return {
        categorias,
        busqueda,
        obtenerRecetas,
        recetas,
        seleccionarBebida
    }
})