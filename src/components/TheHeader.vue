<template>
  <header>
    <div class="topbar">
      <div class="topbar-wrapper">
        <p><i class="pi pi-map-marker"></i>Московская обл., г. Лыткарино</p>
        <p><i class="pi pi-clock"></i> Пн-Пт 08:00 до 18:00 / Сб-Вс выходной</p>
        <p><i class="pi pi-box"></i>Доставка</p>
        <p><i class="pi pi-thumbs-up"></i>Яндекс отзывы</p>
      </div>
    </div>
    <nav>
      <div class="nav-wrapper">
        <div class="logo">
          <a href="/" class="logo_box">
            <img src="/src/assets/icon/dragon-svgrepo-com-black.svg" alt="dragon-svg" width="50">
            <p>магазин</p>
          </a>
        </div>
        <div class="search">
          <Search />
        </div>
        <div class="menu">
          <Drawer v-model:visible="visibleMenu" header="MENU" position="right">
            <p><router-link to="/" class="menu-link">Home</router-link></p>
            <p><router-link to="/category/electronics" class="menu-link">Category</router-link></p>
            <p><router-link to="/catalog/11" class="menu-link">Product</router-link></p>
          </Drawer>
          <Button icon="pi pi-align-left" @click="visibleMenu = true"/>
        </div>
        <div class="cart">
          <Drawer v-model:visible="visibleСart" header="СART" position="right">
            <p>1. USB 3.0 and USB 2.0 Compatibility High Capacity</p>
            <p>2. Supports TRIM command, Garbage Collection technology</p>
            <p>3. The advanced SLC Cache Technology allows performance boost</p>
          </Drawer>
          <Button icon="pi pi-shopping-cart" @click="visibleСart = true"/>
        </div>
        <div class="contact">
          <p class="email">agro@pr-agro.ru</p>
          <p class="tel">+7 (495) 198-07-97</p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Search from '@/components/Search.vue'

import Image from 'primevue/image'
import Drawer from 'primevue/drawer'
import Button from 'primevue/button'

const visibleMenu = ref(false)
const visibleСart = ref(false)
</script>

<style scoped>
.logo_box {
  display: flex;
  gap: 10px;
}

.logo a {
  font-size: 2rem;
  font-weight: 500;
  color: #000;
}

.pi-align-left {
  display: block;
  font-size: 26px;
  color: var(--green-color);
  transition: color .5s ease-out;
}

.pi-shopping-cart {
  display: block;
  font-size: 30px;
  color: var(--green-color);
  transition: color .5s ease-out;
}

.pi-align-left:hover,
.pi-shopping-cart:hover {
  color: var(--orange-color);
}

.menu-link {
  font-size: 1.5rem;
  color: black;
  text-underline-offset: 4px;
  text-decoration: revert;
  transition: text-decoration-color 0.5s ease-out;
  -webkit-text-decoration: revert;
}

.menu-link:hover {
  text-decoration-color: #c9c9c9;
  -webkit-text-decoration-color: #c9c9c9;
}
</style>