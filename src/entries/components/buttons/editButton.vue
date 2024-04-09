<template>
  <div class="edit-btn" @mouseover="setTooltip(true)" @mouseout="setTooltip(false)">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.5 19.5H14M16.9999 9.99993L13.9999 6.99993M18.879 5.12095C19.7071 5.94954 19.7071 7.29237 18.879 8.12095L8.892 18.108C8.63571 18.3642 8.31461 18.546 7.963 18.634L4.5 19.5L5.366 16.037C5.45392 15.6853 5.63573 15.3642 5.892 15.108L15.88 5.12095C16.7082 4.29302 18.0508 4.29302 18.879 5.12095Z"
        stroke="#009abd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <LeftTooltip :tooltop_help_text="tooltop_help_text" :showTooltip="showTooltip"/>
  </div>
</template>

<script setup>
import LeftTooltip from "@/entries/components/tooltips/leftTooltip.vue";
import {defineProps, ref} from "vue";
defineProps(['tooltop_help_text']);

const showTooltip = ref(false);

const setTooltip = (value) => {
  showTooltip.value = value;
};
</script>

<style scoped>
.edit-btn {
  margin: 0 auto;
  text-align: center;
  position: relative;
  cursor: pointer;
}


</style>
