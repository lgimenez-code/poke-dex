<template>
  <main class="app">
    <router-view />
  </main>
</template>

<script>
import BaseIcons from './assets/icons/BaseIcons.js';
import BaseImages from './assets/img/BaseImages.js';

export default {
  provide() {
    return {
      BaseIcons,
      BaseImages,
    };
  }
}
</script>