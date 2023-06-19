<template>
  <div class="header">
    <img src="../assets/icons/site-logo.svg" alt="Logo" class="logo" />
    <div class="right-side">
      <div v-for="social in socialMedia" :key="social.altText">
        <a :href="social.pageLink">
          <img :src="social.imgSrc" :alt="social.altText" />
        </a>
      </div>
      <h2>Welcome: {{ randomUserInitials }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { socialMedia } from '@/constants/social-media-links';
import { useStore } from 'vuex';

const store = useStore();

const randomUserInitials = computed(() => store.getters.getRandomUserInitials);

</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #028c6a;
  width: 90vw;
}
.right-side {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

img {
  /* width: auto; */
  height: 20px;
  margin: 0 10px;
}

.logo {
  height: 70px;
}
</style>
