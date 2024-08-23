<script setup lang='ts'>
import { ref } from 'vue'
import { useAxios } from '@vueuse/integrations/useAxios'

import AutoComplete from 'primevue/autocomplete'
import Image from 'primevue/image'

const {
  data,
  isLoading,
  isFinished,
  error
} = useAxios('https://fakestoreapi.com/products')

const selectedProduct = ref()
const filteredProducts = ref()

const search = (event: any) => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredProducts.value = [...data.value]
    } else {
      filteredProducts.value = data.value.filter((product: any) => {
        return product.title.toLowerCase().includes(event.query.toLowerCase())
      })
    }
  }, 360)
}
</script>

<template>
  <div class="search">
    <AutoComplete v-model="selectedProduct" optionLabel="title" :suggestions="filteredProducts" @complete="search"
      placeholder="search" fluid>

      <template #option="slotProps">
        <div class="results">
          <Image :src="slotProps.option.image" :alt="slotProps.option.title" width="40" height="40" />
          <h3 class="result-title">{{ slotProps.option.title }}</h3>
          <p class="result-price">{{ slotProps.option.price }}&nbsp;<span>&#x20bd;</span></p>
        </div> 
      </template>

    </AutoComplete>
  </div>
</template>

<style scoped>
 .results {
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
}


/* .results {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
}

.result-title {
  display: block;
  flex: 1;
}

.p-autocomplete-list {
width: 100%;
} */

/* .results {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}

.result-title {
  flex: 1 1 auto;
}

.result-price {}

.search-container {}

.search-input {
  width: 100%;

  display: block;
  padding: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: all 0.5s ease-out;
}

.search-input:focus {
  border: 1px solid black;
}

.search-result {
  margin: 10px 0 0 0;
  padding: 10px;

  background-color: white;
  border-radius: 0.25rem;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  z-index: 1;
}

.search-item {
  display: flex;
}

button {
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;

  padding: 10px;

  transition: all 0.5s ease-out;
}

button:hover {
  border: 1px solid black;
} */
</style>