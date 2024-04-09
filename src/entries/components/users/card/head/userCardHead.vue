<template>
  <RowTwoElem>
    <div class="user-record">
      <img class="user_avatar" src="https://cs9.pikabu.ru/post_img/2017/01/25/6/1485331254192128001.jpg" alt=""/>
      <div class="user-info">
        <p class="user_name">{{ userData.name }}</p>
        <p class="user_id">ID пользователя: {{ userData.id }}</p>
      </div>
    </div>
    <div class="user-head_buttons">
      <EditButton :tooltop_help_text="'Редактировать профиль'"/>
      <CopyLinkButton :tooltop_help_text="'Скопировать ссылку на профиль'"/>
    </div>
  </RowTwoElem>
</template>

<script setup>
import EditButton from "@/entries/components/buttons/editButton.vue";
import CopyLinkButton from "@/entries/components/buttons/copyLinkButton.vue";
import {defineProps, ref} from "vue";
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";

defineProps(['userData']);
//
const userData = {"name": "Пользователь 1", "id": "1"}
//
</script>

<style scoped>
.user-head_buttons {
  margin-right: 10px;
}
</style>