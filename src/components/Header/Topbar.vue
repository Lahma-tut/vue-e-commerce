<script setup lang='ts'>

</script>

<template>
  <div class="topbar">
    <div class="wrapper">
      <p class="map"><i class="pi pi-map-marker"></i>Московская обл., г. Лыткарино</p>
      <p class="clock"><i class="pi pi-clock"></i> Пн-Пт 08:00 до 18:00 / Сб-Вс выходной</p>
      <p class="box"><i class="pi pi-box"></i>Доставка</p>
      <p class="thumbs"><i class="pi pi-thumbs-up"></i>Яндекс отзывы</p>
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
  justify-content: space-between;
  padding: 0 20px;
  max-width: var(--max-width);
  margin: var(--margin-auto);
}

.topbar p {
  font-size: var(--font-info);
  color: var(--grey-color);
  font-weight: 400;
}

.topbar i {
  padding: 0 5px 0 0;
}

@media screen and (width < 880px) {
  .box, .thumbs {
    display: none;
  }
}

@media screen and (width < 600px) {
  .topbar {
    display: none;
  }
}

</style>