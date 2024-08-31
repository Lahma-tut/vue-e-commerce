<script setup lang='ts'>
import { ref, Transition, watch } from 'vue'
import { useFuse } from '@vueuse/integrations/useFuse'
import { onClickOutside, onKeyDown, onKeyStroke } from '@vueuse/core'
import apiService from '@/services/apiService'
import Image from 'primevue/image'
import { useFocus } from '@vueuse/core'
import AutoComplete from 'primevue/autocomplete'
import router from '@/router'

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
const isOpen = ref(false)
const target = ref(null)
const selectedIndex = ref(-1)

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

const setSelected = (item: string) => {
  isOpen.value = false
  input.value = item
}

const handleInput = (event: Event) => {
  isOpen.value = true
  input.value = (event.target as HTMLInputElement).value
}

const clearInput = () => {
  input.value = ''
}


onClickOutside(target, clearInput)

onKeyStroke('ArrowDown', (e: any) => {
  e.preventDefault()
  selectedIndex.value += 1
}, { target: document })

onKeyStroke('ArrowUp', (e: any) => {
  e.preventDefault()
  selectedIndex.value -= 1
}, { target: document })

function offKeyStroke() {
  selectedIndex.value = -1
}

const submit = (id: any) => {
  router.push({ name: 'product', params: { id: id } })
}

</script>

<template>
  <div class="search-wrapper">
    <div class="input-wrapper">
      <input 
        v-model="input"
        type="text"
        placeholder="search"
        @input="handleInput"
        >
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
        v-if="results.length && isOpen" 
        class="search-result-items"
        ref="target"
        >      
        <template v-for="({ item }, index) in results" :key="index">
          <li 
            :class="selectedIndex === index ? 'aktive' : '' "
            @click="setSelected(item.title)"
            @click.prevent="submit(item.id)"
            >
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
              <div class="price">
                <p>{{ item.price }}
                  &nbsp;<span>&#x20bd;
                  </span>
                </p>
            </div>
            </div>
        </li>
        </template>
       
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
  cursor: pointer;
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