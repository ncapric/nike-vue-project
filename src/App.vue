<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
  const locallyStoredUsers = JSON.parse(localStorage.getItem('users'));

  store.dispatch('setUsers', locallyStoredUsers);
});

</script>

<style scoped></style>
