<script setup lang='ts'>
import { ref, computed, watch, watchEffect } from 'vue'
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'

import Image from 'primevue/image'
import Message from 'primevue/message'
import Breadcrumb from 'primevue/breadcrumb'
import apiService from '@/services/apiService'

type ProductType = {
  id: number
  category: string
  title: string
  description: string
  image: string
  price: number
}

const route = useRoute()

const product = ref<ProductType | null>()
const loading = ref(false)
const message = ref('')

watchEffect(async () => {
  const id = route.params.id
  try {
    loading.value = true
    const response = await apiService.getProduct(id)
    product.value = response.data
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
})

const home = ref({
    icon: 'pi pi-home'
})
const items = ref([
    { label: 'Electronics' }, 
    { label: 'Electronics', },
])

console.log('product:', product)

</script>

<template>
  <Message v-if="message" severity="warn">Error: {{ message }}</Message>
  <Message v-else-if="loading" severity="success">Loading...</Message>

  <div v-else class="product">
    <div class="breadcrumbs">
      <Breadcrumb :home="home" :model="items" />
      <h1>{{ product?.title }}</h1>
    </div>
    <div class="layout">
     
      <div class="content">
        <div class="image">
          <Image alt="Image" preview>
            <template #previewicon>
              <i class="pi pi-search"></i>
            </template>
            <template #image>
              <img :src="product?.image" alt="image" width="250" />
            </template>
            <template #preview="slotProps">
              <img :src="product?.image" alt="preview" width="600" :style="slotProps.style" @click="slotProps.onClick" />
            </template>
          </Image>
        </div>
        
        <div class="description">
          <div>
            <p>{{ product?.description }}</p>
          </div>
          <div class="description-category">
            <p>
              Category: 
              <router-link :to="{ name: 'category', params: { id: product?.category }}">
              {{ product?.category }}
            </router-link>
            </p>
          </div>
          <div class="price">
            <p>{{ product?.price }}</p>
            <p>руб</p>
          </div>
        </div>
      </div>
      
      <aside class="analogue">
        <h4>Похожие</h4>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.breadcrumbs {
  min-height: 150px;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 0;
}

.p-breadcrumb {
  padding: 5px 0;
}

.layout {
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 20px
}

.content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
}

.image {
  max-width: 300px;
}

.price {
  display: flex;
  gap: 5px;
}

.price p {
  color: var(--orange-color);
  font-weight: 500;
}

.description div {
  margin: 0 0 20px 0;
}

.description-category {

}

.analogue {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
