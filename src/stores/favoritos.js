import { ref, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'
import { useModalStore } from './modal'

export const useFavoritosStore = defineStore('favoritos', () => {
    
    const bebidas = useBebidasStore()
    const modal = useModalStore()
    const favoritos = ref([])

    onMounted(() => {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })

    watch(favoritos, () => {
        sincronizarLocalStorage()
    }, {
        deep: true,
    })

    function sincronizarLocalStorage(){
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }

    function existeFavorito(){
        const favoritosLocalStorage =JSON.parse(localStorage.getItem('favoritos')) ?? []
        return favoritosLocalStorage.some(favorito => favorito.idDrink === bebidas.receta.idDrink)
    }

    function eliminarFavorito(){
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink)
    }

    function agregarFavoritos(){
        favoritos.value.push(bebidas.receta)
    }

    function handleClickFavoritos(e){
        if(existeFavorito()){
            eliminarFavorito()
            // e.target.textContent = "Eliminar de Favoritos"
        }else{
            agregarFavoritos()
            // e.target.textContent = "Agregar a Favoritos"
        }
        modal.modal = false
    }

    return {
        handleClickFavoritos,
        favoritos,
        existeFavorito
    }
})