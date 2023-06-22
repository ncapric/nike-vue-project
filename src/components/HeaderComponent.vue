<template>
  <div class="header">
    <img src="../assets/icons/site-logo.svg" alt="Logo" class="logo" />
    <div class="right-side">
      <div v-for="social in socialMediaLinks" :key="social.altText">
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
import { useStore } from 'vuex';

import { socialMediaLinks } from '@/constants/social-media-links';

const store = useStore();

const randomUserInitials = computed(() => store.getters.userInitials);

</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $complementary-color;
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
