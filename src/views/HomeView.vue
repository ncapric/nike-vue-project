<template>
  <div class="home-page">
    <Sidebar />
    <div class="container">
      <Header />
      <Form />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/HeaderComponent.vue';
import Sidebar from '@/components/SidebarComponent.vue';
import Form from '@/components/FormComponent.vue';

</script>

<style scoped>
.home-page {
  display: flex;
  height: 100vh;
  width: 100vw;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
