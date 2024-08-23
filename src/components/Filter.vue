<template>
  <div class="filter">
    <div class="filter-manufacturer">
      <h4>Фильтер</h4>
        <div class="slider">
            <InputText v-model.number="value" class="w-full mb-4" />
            <Slider v-model="value" class="w-full" />
        </div>
        <!-- <div v-if="isFetching">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div 
          v-else 
          class="manufacturer-list" 
          v-for="item of category" 
          :key="item.key">
          <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
        <label :for="category.key">{{ category.name }}</label>
      </div> -->
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, computed } from 'vue'
import { useFetch } from '@vueuse/core'
import Checkbox from 'primevue/checkbox'
import Slider from 'primevue/slider';
import InputText from 'primevue/inputtext';

const categories = ref([
  { name: "Accounting", key: "A" },
  { name: "Marketing", key: "M" },
  { name: "Production", key: "P" },
  { name: "Research", key: "R" }
])

const selectedCategories = ref([])

const valueSlider = ref('50')
const value = ref(50)

// const url = ref('https://fakestoreapi.com/products/category')

// const { isFetching, error, data } = useFetch(url)
// const category = computed(() => {
//   try {
//     return JSON.parse(data.value as string)
//   }
//   catch (error) {
//     return null
//   }
// })

</script>

<style scoped>
.slider input {
  margin: 0 0 15px 0;
}
</style>