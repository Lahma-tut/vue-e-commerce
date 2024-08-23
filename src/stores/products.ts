import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useProductStore = defineStore('products', () => {
  const products = ref([])
  const filteredProducts = ref([])

  const fetch = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const filter = (query: string) => {
    if (query === '') {
      filteredProducts.value = products.value
      return
    }

    filteredProducts.value = products.value.filter((product: any) => {
      return (
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
    })
  }

  return { 
    products, 
    fetch,
    filter,
    filteredProducts
  }

})