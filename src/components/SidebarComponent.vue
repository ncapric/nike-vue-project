<template>
  <div class="container">
    <img src="../assets/icons/jordan-logo.png" alt="Logo" class="logo" />
    <button @click="goToUsers">All users</button>
    <div class="logout">
      <p>Logout</p>
      <a href="">
        <img src="../assets/icons/Logout-button.svg" alt="Logout" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goToUsers () {
  router?.push('/users');
}
</script>

<style scoped lang="scss">
.container {
  width: 10vh;
  background-color: $secondary-color;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.logout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 50px;
}

img {
  width: 30px;
  height: auto;
  margin: 0 auto;
}
</style>
