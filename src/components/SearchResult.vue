<script setup lang='ts'>

const props = defineProps({
  title: String,
  price: Number
})

</script>

<template>

  <li class="search-result-item">
    <p>{{ props.title }}</p>
    <p>{{ props.price }}&nbsp;руб</p>
  </li>

</template>

<style scoped>

.search-result-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
  margin: 0 0 10px 0;
}

</style>

