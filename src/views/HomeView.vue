<script setup lang='ts'>
import { ref, computed } from 'vue'
import { useFetch } from '@vueuse/core'
import Message from 'primevue/message'

const { isFetching, error, data } = useFetch('https://fakestoreapi.com/products/categories')
const categories = computed(() => {
  try {
    return JSON.parse(data.value as string)
  }
  catch (error) {
    return null
  }
})
</script>

<template>
  <div class="home">
    <div class="galleria">
      <div class="slider">
        <h2>Привет!</h2>
        <p>Магазин создан с целью дальнейшего использования в компании ООО "Премьер-Агро".</p>
        <p>Написан на Vue.js с данные из сервиса fakestoreapi.com.</p>
      </div>
    </div>
    <h2>Категории</h2>
    <div class="categories">
      <Message v-if="error" severity="warn">Error: {{ error }}</Message>
      <Message v-else-if="isFetching" severity="success">Loading...</Message>
      
      <ul v-else class="carousel">
        <li v-for="(category, index) in categories" :key="index">
            <router-link :to="{ name: 'category', params: { id: category }}">
              {{ category }}
              <i class="pi pi-arrow-right"></i>
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.carousel {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px
}

.carousel a {
  font-size: 1.6rem;
  color: black;
  text-underline-offset: 4px;
  text-decoration: revert;
  transition: text-decoration-color 0.5s ease-out;
  -webkit-text-decoration: revert;
}

.carousel a:hover {
  text-decoration-color: #c9c9c9;
  -webkit-text-decoration-color: #c9c9c9;
  transform: scaleX(1);
}

.slider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  min-height: 300px;
  border: 2px solid black;
}

h2 {
  font-size: 2rem;
  font-weight: 500;
  color: black;
  text-transform: uppercase;
}

.pi {
  transform: scaleX(1);
}

/* Это нужно применить к ссылка. Подчеркивание*/
/* 
text-decoration-thickness: 1px;
text-underline-offset: 0.25em; 
*/

@media screen and (width < 600px) {
 
}
</style>