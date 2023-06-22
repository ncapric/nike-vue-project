<template>
  <form @submit.prevent="submitForm">
    <h2>Form</h2>

  <Input
    text="First name"
    id="first-name"
    type="text"
    v-model="username"
  />
  <Input
    v-model="lastname"
    text="Last Name"
    for="last-name"
    id="last-name"
    type="text"
  />
  <Input
    text="How old are you?"
    for="age"
    id="age"
    type="number"
    v-model="age"
  />
  <Checkbox
    text="I have my parent's consent."
    v-model="underAgedCheck"
    v-if="isUnderAged"
  />
  <Checkbox
    text="I agree with the terms and services"
    v-model="isChecked"
  />
  <!-- Use component -->
  <input type="submit" value="Submit" :disabled="!formIsValid" />
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import Input from '@/components/inputs/InputComponent.vue';
import Checkbox from '@/components/inputs/CheckboxComponent.vue';

const router = useRouter();
const username = ref('');
const lastname = ref('');
const age = ref(0);
const isChecked = ref(false);
const underAgedCheck = ref(false);

const store = useStore();

const isUnderAged = computed(() => {
  return age.value < 17;
});

const formIsValid = computed(() => {
  const isRequiredFieldsFilled =
    username.value.trim() !== '' &&
    lastname.value.trim() !== '' &&
    isChecked.value;

  if (age.value > 17) return isRequiredFieldsFilled;

  return isRequiredFieldsFilled && underAgedCheck.value;
});

function submitForm () {
  if (formIsValid.value) {
    const newUser = {
      name: username.value,
      lastname: lastname.value,
      age: age.value
    };

    try {
      store.dispatch('addUser', newUser);

      router.push('/users');

      return alert('FORM IS VALID CONGRATULATIONS!');
    } catch (e) {
      alert(e);
    }
  }

  return alert('Form is not valid');
}
</script>

<style scoped lang="scss">
form {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $primary-color;
  height: 100vh;
}

input {
  display: block;
  font-size: 18px;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
  margin: 10px 5px;
  padding: 10px 10px 10px 5px;
}
input:focus {
  outline: none;
}
</style>
