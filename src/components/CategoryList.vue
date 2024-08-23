<script setup lang='ts'>
import Image from 'primevue/image'

defineProps({
  heading: String,
  image: String,
})
</script>

<template>
  <div class="card">
    
    <div class="card-wrapper">
      <div class="card-image">
        <Image 
          :src="image" 
          :alt="heading" 
          />
      </div>
      
      <div class="card-body">
        <h3>{{ heading }}</h3>
        <a href="#">Смотреть все <i class="pi pi-arrow-circle-right"></i></a>
      </div>
    </div>
    
    <ul class="card-list">
      <li><a href="#">Акарициды</a></li>
      <li><a href="#">Гербициды</a></li>
      <li><a href="#">Инсектициды</a></li>
      <li><a href="#">Фунгициды</a></li>
    </ul>

  </div>
</template>

<style scoped>

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
.card-list a {
  text-underline-offset: 4px;
  text-decoration: revert;
  text-decoration-color: #c9c9c9;
  transition: color .3s ease-out;
  -webkit-text-decoration: revert;
  -webkit-text-decoration-color: #c9c9c9;
}
.card-list a:hover {
  color: var(--orange-color);
}

</style>
