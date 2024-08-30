<script setup lang='ts'>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import Drawer from 'primevue/drawer'
import Button from 'primevue/button'
import Image from 'primevue/image'
import SearchFuse from './SearchFuse.vue'

const visibleMenu = ref(false)
const visibleСart = ref(false)
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <a href="/">
          <div class="logo-content">
            <h3>Jewelery</h3>
            <div class="logo-img">
              <Image 
                src="/src/assets/icon/dragon-svgrepo-logo-22.svg" 
                alt="dragon-svg" 
                width="60"/>
            </div>
          </div>
        </a>
      </div>

      <div class="search">
        <SearchFuse />
      </div>
     
      <nav class="menu">
        <Drawer 
          v-model:visible="visibleMenu" 
          header="MENU" 
          position="right">
          <ul>
            <li><router-link to="/" class="menu-link">Home</router-link></li>
            <li><router-link to="/category/electronics" class="menu-link">Category</router-link></li>
            <li><router-link to="/catalog/11" class="menu-link">Product</router-link></li>
          </ul>
        </Drawer>
          
        <Button icon="pi pi-align-left" @click="visibleMenu = true"/>
      </nav>
        
      <div class="cart">
        <Drawer 
          v-model:visible="visibleСart" 
          header="СART" 
          position="right">
          <p>1. USB 3.0 and USB 2.0 Compatibility High Capacity</p>
          <p>2. Supports TRIM command, Garbage Collection technology</p>
          <p>3. The advanced SLC Cache Technology allows performance boost</p>
        </Drawer>
        
        <Button icon="pi pi-shopping-cart" @click="visibleСart = true"/>
      </div>
      
      <address class="contact">
        <p class="email">agro@pr-agro.ru</p>
        <p class="tel">+7 (495) 198-07-97</p>
      </address>

    </div>
  </header>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 220px auto 70px 70px 180px;
  align-items: center;
  height: 130px;
  gap: 15px;
  padding: 0 20px;
  max-width: var(--max-width);
  margin: var(--margin-auto);
}

.menu,
.cart, 
.contact {
  justify-self: center;
}

.email {
  font-size: 17px;
  font-weight: 500;
  color: var(--orange-color);
}

.tel {
  font-size: 18px;
  font-weight: 600;
  color: var(--green-color);
}

.logo-content {
  display: flex;
  gap: 10px;
  align-items: center;
}

.logo a {
  font-size: 2rem;
  font-weight: 400;
  color: black;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}

.logo-img {
  margin: 0 0 6px 0;
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

@media screen and (width < 880px) {
  .wrapper {
    display: grid;
    grid-template: 1fr 1fr/ 1fr 60px 60px;
    gap: 0;
    align-items: center;
    margin: 25px 0 25px 0;
  }

  .logo {
    grid-column: 1 / 2;
    grid-row: 1 / 2; 
  }

  .menu {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end;
  }
  
  .cart {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    justify-self: end;
  }

  .contact {
    display: none;
  }
  
  .search {
    grid-column: 1 / 4;
    grid-row: 2 / 2;
  }
}

@media screen and (width < 600px) {
  .logo a {
    font-size: 1.5rem;
    font-weight: 400;
    color: black;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
  }

  .logo-img {
    width: 50px;
    margin: 0 0 6px 0;
  }
}
</style>