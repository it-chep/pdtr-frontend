<template>
  <p class="header">{{ header_text }}</p>
</template>

<script setup>
import {defineProps, ref} from "vue";

defineProps(["header_text"])
</script>

<style scoped>

.header {
  font-size: 15px;
  font-weight: 700;
}
</style>