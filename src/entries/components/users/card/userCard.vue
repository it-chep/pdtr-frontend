<template>
  <ColumnElement class="user-card">
    <UserCardHead/>
    <UserCardBody/>
  </ColumnElement>
</template>

<script setup>
import UserCardHead from "@/entries/components/users/card/head/userCardHead.vue";
import UserCardBody from "@/entries/components/users/card/body/userCardBody.vue";
import ColumnElement from "@/entries/components/utils/ColumnElement.vue";
</script>

<style scoped>
.user-card {
  position: relative;
  width: 20%;
}
</style>