<script setup lang='ts'>
import Image from 'primevue/image'

defineProps({
  id: Number,
  category: String,
  image: String,
  title: String,
  description: String,
  price: Number,
})
</script>

<template>
  <router-link :to="{ name: 'product', params: { id: id }}">
    <article>
      
      <div class="image">
        <Image :src="image" :alt="title" width="80"/>
      </div>
      
      <div class="content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      
      <div class="price">
        <p>{{ price }}</p>
        <p>руб</p>
      </div>
    
    </article>
  </router-link>
</template>

<style scoped>
article {
  display: grid;
  grid-template-columns: 100px auto 100px;
  align-items: center;
  gap: 20px;
  padding: 10px;
  transition: background-color 0.5s ease-out;
}

article:hover {
  border-radius: 2px;
  background-color: var(--grey-color);
}

h3 {
  color: var(--green-color);
  font-weight: 600;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.category {
  color: blueviolet;
}

.image {
  padding: 5px;
}

.price {
  display: flex;
  gap: 5px;
  justify-self: center;
}

.price p {
  color: var(--orange-color);
  font-weight: 500;
}

a {
  text-decoration: none;
}
</style>
