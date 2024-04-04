import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritosStore = defineStore('favoritos', () => {
    
    const handleClickFavoritos = () => {
        console.log('agregar a favoritos')
    }

    return {
        handleClickFavoritos
    }
})