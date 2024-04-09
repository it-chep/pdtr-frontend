<template>
      <textarea v-model="message" @focus="handleFocus" @blur="handleBlur" ></textarea>
      <div v-if="!message" class="textbox-placeholder">Введите сообщение...</div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('');
const isFocused = ref(false);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};
</script>

<style scoped>

textarea {
  margin: 0;
  border: none;
  outline: none;
  resize: none;
  height: 75px;
}

.textbox-placeholder {
  color: #8e8e8e;
  position: absolute;
  top: 8px;
  left: 12px;
  pointer-events: none; /* Предотвращает взаимодействие с placeholder */
  transition: 0.3s;
}
</style>
