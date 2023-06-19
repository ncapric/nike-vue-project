<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
  const locallyStoredUsers = localStorage.getItem('users');
  const parsedUsers = locallyStoredUsers ? JSON.parse(locallyStoredUsers) : [];

  store.dispatch('setUsers', parsedUsers);
});

</script>

<style scoped></style>
