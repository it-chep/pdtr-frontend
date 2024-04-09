<template>
<p class="mailing-parameter">
  {{ value }}
</p>
</template>

<script setup>
import {defineProps} from "vue";

defineProps(["value"])
</script>

<style scoped>
.mailing-parameter {

}
</style>