import {reactive, computed} from 'vue'

const active = reactive([])
const isLoading = computed(() => !!active.length)
const get = async (url) => {
    const index = active.length
    active[index] = url
    const response = await fetch(url).catch(err => console.log('Err:', err))
    const data = await response.json()
    active.splice(index, 1)
    return data
}

export default () => ({isLoading, get})
