<script setup lang='ts'>
import { ref, computed } from 'vue'
import { useAxios } from '@vueuse/integrations/useAxios'

import InputText from 'primevue/inputtext'
import Image from 'primevue/image'

const searchQuery = ref('')
const isOpen = ref(false)

const {
  data,
  isLoading,
  isFinished,
  error
} = useAxios('https://fakestoreapi.com/products')

const filteredProducts = computed(() => {
  const search = searchQuery.value.toLowerCase()
  return search.length > 1
    ? data.value.filter((product: any) => product.title.toLowerCase().includes(search))
    : null
})

const setSelected = (item: string) => {
  isOpen.value = false
  searchQuery.value = item
}

const handleInput = (event: Event) => {
  isOpen.value = true
  searchQuery.value = (event.target as HTMLInputElement).value
}

</script>

<template>
  <div class="search">
    <InputText v-model="searchQuery" placeholder="search" fluid @input="handleInput"/>

    <Transition>
      <ul v-if="filteredProducts && isOpen" class="search-result">
        
        <li v-if="!filteredProducts.length">
          <h3>Ничего не найдено</h3>
        </li>

        <router-link :to="{ name: 'product', params: { id: id }}">
          <li
            v-for="(product, index, id) in filteredProducts" 
            :key="id"
            @click="setSelected(product.title)"
            >
              <div class="product-image">
                <Image :src="product.image" :alt="product.title" width="40" />
              </div>
              <h3 class="product-title">{{ product.title }}</h3>
              <div>
                <p>{{ product.price }}&nbsp;<span>&#x20bd;</span></p>
              </div>
            </li>
          </router-link>

        </ul>
    </Transition>

  </div>
</template>

<style scoped>
.search {
  position: relative;
}

.search-result {
  position: absolute;
  margin: 10px 0 0 0;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  z-index: 1;
}

.search-result li {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  transition: background-color 0.5s ease-out;
  cursor: pointer;
}

.search-result li:hover {
  border-radius: 2px;
  background-color: var(--grey-color);
}

.product-title {
  flex: auto
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

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