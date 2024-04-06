import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotificacionStore = defineStore('notificacion', () => {

    const texto = ref('')
    const error = ref(false)
    const mostrar = ref(false)

    return{
        texto,
        error,
        mostrar,
    }
})
