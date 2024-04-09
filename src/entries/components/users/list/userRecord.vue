<template>
  <div class="user-record">
    <img class="user_avatar" :src="userData.path_to_avatar" alt=""/>
    <ColumnElement class="user_info">
      <p class="user_name">{{ userData.name }}</p>
      <p class="user_last_message">{{ userData.last_message }}</p>
    </ColumnElement>
    <div class="user_additional_info">
      <p class="user_last_activity_time">{{ userData.last_activity_time }}</p>
    </div>
  </div>
</template>

<script setup>
import {ref, defineProps} from 'vue';
import ColumnElement from "@/entries/components/utils/ColumnElement.vue";

const props = defineProps(['userData']);
</script>


<style>
.user-record {
  width: 100%;
  display: flex;
}

.user_info {
  width: 240px;
  overflow: hidden;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.user_additional_info {
  display: flex;
  margin-right: 0;
  font-size: 10px;
  text-align: center;
}

.user_name {
  width: 150px;
  position: relative;
  top: 0;
}

.user_avatar {
  position: relative;
  margin: 5px 15px 5px 5px;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  object-fit: cover;
}
</style>