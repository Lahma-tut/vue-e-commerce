<script setup lang='ts'>
import { ref, computed } from 'vue'
import Image from 'primevue/image'
import { useFetch } from '@vueuse/core'
import TheFilter from '@/components/TheFilter.vue'

const filterData = ref([
  { name: "Accounting", key: "A" },
  { name: "Marketing", key: "M" },
  { name: "Production", key: "P" },
  { name: "Research", key: "R" }
]);

const filterSelected = ref([])

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
  <div class="breadcrumbs">
    <h1>Каталог</h1>
  </div>
  <div class="catalog">
    <aside>
      <TheFilter />
    </aside>
    <div class="content">
      <div class="card">
        <div class="card-wrapper">
          <div class="card-image">
            <Image 
              src="/src/assets/img/bio-preparaty-1011.jpeg" 
              alt="pesticides-juk" 
              />
          </div>
          <div class="card-body">
            <h3>Яблоня</h3>
            <a href="#">Смотреть все <i class="pi pi-arrow-circle-right"></i></a>
          </div>
        </div>

        <div v-if="isFetching">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <ul v-else class="card-list">
          <li v-for="(category, index) in categories" :key="index">
            <router-link :to="{ name: 'category', params: { id: category }}">
              {{ category }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
aside {
  flex: 0 0 20%;
}

.breadcrumbs {
  min-height: 150px;
  display: flex;
  align-items: center;
}

.catalog {
  display: flex;
  gap: 30px;
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

.content {
  display: grid;
  grid-template: repeat(1, 1fr) / repeat(3, 1fr);
  gap: 20px;
}


label {
  font-size: var(--font-info)
}

@media (width < 900px) {
  .catalog-content {
    display: grid;
    grid-template: repeat(1, 1fr) / repeat(2, 1fr);
    gap: 20px;
  }
}

@media (width < 660px) {
  .catalog-content {
    display: grid;
    grid-template: repeat(1, 1fr) / repeat(1, 1fr);
    gap: 20px;
  }
}


.card-wrapper {
  position: relative;
}

.card-image {
  filter: brightness(82%);
}
.img {
  border-radius: 40px;
}

.card-body {
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-body h3 {
  font-size: 1.2rem;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
}
.card-body a {
  color: white;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
}
i {
  padding: 0px 5px 0px 5px;
}

.card-list {
  line-height: 186%;
  padding: 10px 0 0 25px;
}
.card-list li {
  text-underline-offset: 4px;
  text-decoration: revert;
  text-decoration-color: #c9c9c9;
  transition: color .3s ease-out;
  -webkit-text-decoration: revert;
  -webkit-text-decoration-color: #c9c9c9;
}
.card-list li:hover {
  color: var(--orange-color);
}
</style>
