<template>
  <div class="header">
    <LogoImage/>
  </div>
</template>

<script setup>

import LogoImage from "@/entries/components/header/logoImage.vue";
</script>

<style scoped>
.header {
  width: 100%;
  background: #222222;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>