<template>
  <p class="parameter-name">{{ headerName }}</p>
</template>

<script setup>
import {defineProps} from "vue";

defineProps(["headerName"])
</script>

<style scoped>
.parameter-name {
  width: 250px;
  color: #6e6e6e;
}
</style>