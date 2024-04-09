<template>
  <div class="user-container">
    <div class="user-container-content">
      <UsersList class="user-list"/>
      <UserDialog class="users-dialog"/>
      <UserCard/>
    </div>
  </div>
</template>

<script setup>

import UsersList from "@/entries/components/users/list/usersList.vue";
import UserDialog from "@/entries/components/users/dialog/userDialog.vue";
import UserCard from "@/entries/components/users/card/userCard.vue";
</script>

<style scoped>
.user-container-content {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
}

.user-container {
  height: calc(100vh - 58px);
  width: auto;
  overflow: auto;
}

.users_list {
  margin-top: 60px;
  margin-left: 200px;
  position: relative;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 998;
}

.users-dialog {
  position: relative;
  display: flex;
}
</style>