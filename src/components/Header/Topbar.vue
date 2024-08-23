<script setup lang='ts'>

</script>

<template>
  <div class="topbar">
    <div class="wrapper">
      <p><i class="pi pi-map-marker"></i>Московская обл., г. Лыткарино</p>
      <p><i class="pi pi-clock"></i> Пн-Пт 08:00 до 18:00 / Сб-Вс выходной</p>
      <p><i class="pi pi-box"></i>Доставка</p>
      <p><i class="pi pi-thumbs-up"></i>Яндекс отзывы</p>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  background: #000;
}

.wrapper {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.topbar p {
  font-size: var(--font-info);
  color: var(--grey-color);
  font-weight: 400;
}

.topbar i {
  padding: 0 5px 0 0;
}
</style>