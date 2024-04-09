<template>
  <p class="field_name">{{ fieldName }}</p>
</template>

<script setup>
import {defineProps, ref} from "vue";

defineProps(["fieldName"])
</script>

<style scoped>
.field_name {
  font-size: 13px;
  width: 120px;
}
</style>