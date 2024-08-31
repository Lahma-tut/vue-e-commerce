<script setup lang='ts'>
import { ref, watch } from 'vue'
import apiService from '@/services/apiService'
import AutoComplete from 'primevue/autocomplete'
import Image from 'primevue/image'

const data = ref([])
const selectedProduct = ref()
const filteredProducts = ref()

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
</script>

<template>
  <div class="search-wrapper">
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
  </div>
</template>

<style scoped>
.search-wrapper {

}

.input-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
}

input {
  width: 100%;
}

.clear-input, 
.spinner-dotted {
  display: contents;
}

.search-result-items {
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 10px 0 0 0;
  padding: 5px;

  position: absolute;
  overflow: auto;
  z-index: 1;

  background-color: white;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
              rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
}

.search-result-items a {
  text-decoration: none;
}

.search-result-item {
  display: grid;
  grid-template: 1fr / 60px 5fr 80px;
  align-items: center;
  gap: 10px;
  padding: 4px 8px;

  transition: background-color 0.5s ease;
}

.search-result-item:hover {
  background-color: gainsboro;
  border-radius: 0.15rem;
}

.aktive {
  background-color: gainsboro;
  border-radius: 0.15rem;
}

.title {
  text-wrap: pretty;
}

.price {
  text-align: right;
}



.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>