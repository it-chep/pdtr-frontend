<template>
  <div class="user-dialog">
    <SendMessage/>
  </div>
</template>

<script setup>

import {ref, onMounted, watchEffect} from 'vue';
import {useRoute} from 'vue-router';
import SendMessage from "@/entries/components/users/dialog/sendMessage.vue";

const route = useRoute();
let userId = ref(route.params.id);
const userData = ref(null);
let limit = 35;

onMounted(async () => {
  userId.value = route.params.id;
  console.log('Загрузка страницы:', userId.value);
});

watchEffect(() => {
  userId.value = route.params.id;
  console.log('ID в маршруте изменился:', userId.value);
});

// try {
//   const response = await fetch(`http://localhost:8080/clients/${}?limit=${limit}`);
//   if (response.ok) {
//     userData = await response.json();
//   } else {
//     console.error('Ошибка при выполнении запроса:', response.statusText);
//   }
// } catch (error) {
//   console.error('Произошла ошибка:', error.message);
// }

</script>

<style scoped>
.user-dialog {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  border-right: 1px solid #868080;
}
</style>