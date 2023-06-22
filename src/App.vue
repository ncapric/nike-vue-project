<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { RouterView } from 'vue-router';

const store = useStore();

onMounted(() => {
  store.dispatch('setUsers', null);
});

</script>

<style scoped></style>
