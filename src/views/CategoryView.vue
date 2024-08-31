<script setup lang='ts'>
import { ref, computed } from 'vue'
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'


import TheFilter from '@/components/Filter.vue'
import Message from 'primevue/message'
import CategoryProductItem from '@/components/CategoryProductItem.vue'

const route = useRoute()

const { isFetching, error, data } = useFetch(`https://fakestoreapi.com/products/category/${route.params.id}`)
const productsCategory = computed(() => {
  try {
    return JSON.parse(data.value as string)
  }
  catch (error) {
    return null
  }
})
</script>

<template>
  <Message v-if="error" severity="warn">Error: {{ error }}</Message>
  <Message v-else-if="isFetching" severity="success">Loading...</Message>
  
  <div v-else class="category">
    <div class="breadcrumbs">
      <h1>{{ route.params.id }}</h1>
    </div>
    <div class="layout">
      <aside>
        <TheFilter />
      </aside>
      <div class="content">
        <CategoryProductItem
          v-for="product in productsCategory" 
          :key="product.id" 
          :id="product.id" 
          :category="product.category" 
          :image="product.image"
          :title="product.title"
          :description="product.description"
          :price="product.price" 
          />
      </div>
    </div>
  </div>
</template>

<style scoped>
.breadcrumbs {
  min-height: 150px;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px
}

.filter {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.manufacturer-list,
.culture-list {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 4px 0;
}

@media screen and (width < 880px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px
  }
}
</style>
