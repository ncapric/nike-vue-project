<template>
  <ag-grid-vue
    style="height: 100vh; width: 100%"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
  ></ag-grid-vue>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, onUnmounted } from 'vue';

import { AgGridVue } from 'ag-grid-vue3';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const store = useStore();
const rowData = computed(() => {
  return store.state.users;
}
);

onUnmounted(() => {
  store.dispatch('setUsers');
});

const columnDefs = [
  { headerName: 'Name', field: 'name' },
  { headerName: 'Lastname', field: 'lastname' },
  { headerName: 'Age', field: 'age' }
];

</script>

<style scoped></style>
