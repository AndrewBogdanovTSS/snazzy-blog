import {ref} from 'vue'
import useRequest from './useRequest'

export default (type) => {
    const {get} = useRequest()
    const item = ref(null)
    const items = ref([])
    const baseUrl = `https://jsonplaceholder.typicode.com/${type}`
    const fetchAll = async () => items.value = await get(baseUrl)
    const fetchOne = async (id) => item.value = await get(`${baseUrl}/${id}`)

    return {
        item,
        items,
        fetchAll,
        fetchOne
    }
}
