<script setup>
import * as $slots from "vuex";

const copyToClipboard = () => {
  const textarea = document.createElement('textarea');

  textarea.value = $slots.default()[0].children[0].text;

  document.body.appendChild(textarea);

  // Select and copy the text
  textarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);
};
</script>

<template>
  <div @click="copyToClipboard">
    <slot></slot>
    <span>Скопировано в буфер обмена!</span>
  </div>
</template>

<style scoped>
div {
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
