<template>
  <ag-grid-vue
    style="height: 309px; width: 100%"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :pagination="true"
    :paginationPageSize="5"
  ></ag-grid-vue>
</template>

<script setup lang="ts">
import { computed, onUnmounted } from 'vue';
import { useStore } from 'vuex';

import { AgGridVue } from 'ag-grid-vue3';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { columnDefs } from '@/constants/column-def';

const store = useStore();
const rowData = computed(() => {
  return store.getters.users;
}
);

onUnmounted(() => {
  store.dispatch('setUsers', undefined);
});

</script>

<style scoped></style>
