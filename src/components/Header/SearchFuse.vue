<script setup lang='ts'>
import { ref, Transition, watch } from 'vue'
import { useFuse } from '@vueuse/integrations/useFuse'
import apiService from '@/services/apiService'
import Image from 'primevue/image'

type DataItem = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {}
}

const input = ref('')
const loading = ref(false)
const data = ref<DataItem[]>([])

const getProducts = async () => {
  loading.value = true
  try {
    const response = await apiService.getProducts()
    data.value = response.data
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

watch(input, () => {
  if (input.value.length > 1) {
    getProducts()
  } else {
    data.value = []
  }
})

const { results } = useFuse(input, data, {
  matchAllWhenSearchEmpty: false,
  resultLimit: 10,
  fuseOptions: { includeScore: true, keys: ['title'] }
})

const clearInput = () => {
  input.value = ''
}

</script>

<template>
  <div class="search-wrapper">
    <div class="input-wrapper">
      <input 
        v-model="input"
        type="text">

      <span 
        v-if="loading" 
        class="spinner-dotted">
        <i class="pi pi-spinner-dotted" 
           style="font-size: 1rem"></i>
      </span>
      <span 
        v-else-if="input.length > 0"
        @click="clearInput"
        class="clear-input">
        <i class="pi pi pi-times" 
           style="font-size: 1rem"></i>
      </span>
    </div>

    <Transition>
      <ul 
        v-if="results.length" 
        class="search-result-items">      
        
        <li 
          v-for="({ item }) in results" 
          :key="item.id">
          <router-link :to="{ name: 'product', params: { id: item.id } }">
            <div class="search-result-item">
              <div class="image">
                <Image 
                  :src="item.image"
                  :alt="item.title" 
                  width="40"/>
                </div>
              <div class="title">
                <h3>{{ item.title }}</h3>
                </div>
              <div>
              <p>{{ item.price }}
                  &nbsp;<span>&#x20bd;
                  </span>
                </p>
            </div>
            </div>
          </router-link>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.search-wrapper {
  width: 100%;
  position: relative;
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
  padding: 10px;

  position: absolute;
  overflow: auto;
  z-index: 1;

  background-color: white;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
              rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
}

.search-result-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title {
  flex: auto;
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