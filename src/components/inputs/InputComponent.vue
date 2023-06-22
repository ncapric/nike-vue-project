<template>
  <div>
    <label :for="id">{{ text }}</label>
    <input
      v-model="inputValue"
      :type="type"
      :id="id"
      :value="modelValue"
      @input="emitInputValue"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['text', 'id', 'type', 'modelValue']);
const emits = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue.value);

const emitInputValue = () => {
  emits('update:modelValue', inputValue.value);
};
</script>

<style scoped>
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  margin: 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
}
input:focus {
  outline: none;
}
</style>
