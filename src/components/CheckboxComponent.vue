<template>
  <div class="input-styling">
    <span>{{ props.text }}</span>
    <input
      type="checkbox"
      :checked="modelValue"
      @change="emitInputValue($event.target.checked)"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['text', 'modelValue']);
const emits = defineEmits(['update:modelValue']);

const emitInputValue = (checked: boolean | null) => {
  emits('update:modelValue', checked);
};

</script>

<style scoped>
input {
  margin-left: 10px;
}
</style>
