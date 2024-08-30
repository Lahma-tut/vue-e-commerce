<!-- <script setup lang='ts'>
import { ref, watch } from 'vue'
import apiService from '@/services/apiService'
import AutoComplete from 'primevue/autocomplete'
import Image from 'primevue/image'

const data = ref([])
const selectedProduct = ref()
const filteredProducts = ref()

const search = (event: any) => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredProducts.value = [...data.value]
    } else if (event.query.trim().length > 1) {
      filteredProducts.value = data.value.filter((product: any) => {
        return product.title.toLowerCase().includes(event.query.toLowerCase())
      })
    }
  }, 360)
}

const getProducts = async () => {
  try {
    const response = await apiService.getProducts()
    data.value = response.data
  } catch (error) {
    console.log(error)
  }
}

watch( selectedProduct, () => {
  if (selectedProduct.value.length > 1) {
    getProducts()
  } else (
    data.value = []
  )
})
</script>

<template>
    <AutoComplete 
      v-model="selectedProduct" 
      optionLabel="title" 
      :suggestions="filteredProducts" 
      @complete="search"
      placeholder="search"
      fluid>
      
      <template #option="slotProps">
        <div class="results">
          <router-link :to="{ name: 'product', params: { id: slotProps.option.id } }">
            <Image
              :src="slotProps.option.image"
              :alt="slotProps.option.title"
              width="40"
              />
            <h3 class="result-title">{{ slotProps.option.title }}</h3>
            <p class="result-price">{{ slotProps.option.price }}&nbsp;<span>&#x20bd;</span></p>
          </router-link>
        </div> 
      </template>
    </AutoComplete>
</template>

<style scoped>
.results {
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
}

.result-title {
  flex: auto;
}

.result-price {

}

</style> -->