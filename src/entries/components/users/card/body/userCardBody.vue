<template>
  <div class="container">
    <UserContacts/>
    <UserLists/>
    <UserVariable/>
  </div>
</template>

<script setup>

import UserContacts from "@/entries/components/users/card/body/userContacts.vue";
import UserVariable from "@/entries/components/users/card/body/userVariable.vue";
import UserLists from "@/entries/components/users/card/body/userLists.vue";
</script>

<style scoped>
.container {
  position: relative;
  background-color: #333333;
  height: 100%;
  width: 100%;
}
</style>