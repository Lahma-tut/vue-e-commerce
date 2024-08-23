<script setup lang='ts'>
import { RouterView } from 'vue-router'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header/Header.vue'
import Topbar from '@/components/Header/Topbar.vue'
</script>

<template>
  <Topbar />
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
