<template>

  <a class="ico-btn copy-mailing" @mouseover="setTooltip(true)" @mouseout="setTooltip(false)">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M4.55556 13.4444H2.77778C1.79594 13.4444 1 12.6485 1 11.6667V2.77778C1 1.79594 1.79594 1 2.77778 1H11.6667C12.6485 1 13.4444 1.79594 13.4444 2.77778V4.55556M6.33259 17H15.223C16.2044 17 17 16.2044 17 15.223V6.33259C17 5.35116 16.2044 4.55556 15.223 4.55556H6.33259C5.35116 4.55556 4.55556 5.35116 4.55556 6.33259V15.223C4.55556 16.2044 5.35116 17 6.33259 17Z"
          stroke="#95A3BA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <LeftTooltip :tooltop_help_text="'Скопировать рассылку'" :showTooltip="showTooltip"/>

  </a>
</template>

<script setup>

import LeftTooltip from "@/entries/components/tooltips/leftTooltip.vue";
import {ref} from "vue";

const showTooltip = ref(false);

const setTooltip = (value) => {
  showTooltip.value = value;
};
</script>

<style scoped>
</style>