<template>
    <div v-if="showTooltip" style="display: block" class="tooltip">{{ tooltop_help_text }}</div>
</template>
<script setup>
import {defineProps} from "vue";
const { tooltop_help_text, showTooltip } = defineProps(['tooltop_help_text', 'showTooltip']);
</script>

<style scoped>
.tooltip {
  font-size: 10px;
  position: absolute;
  top: 0;
  transform: translateX(-100%);
  background-color: rgba(0, 154, 189, 0.5);
  color: rgba(255, 255, 255, 0.75);
  padding: 5px;
  border-radius: 5px;
  display: none;
}
</style>