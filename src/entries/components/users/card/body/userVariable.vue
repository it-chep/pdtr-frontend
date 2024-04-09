<template>
  <UserBodyBlock>
    <UserBodyHeader :header_text="'Переменные'"/>
    <div class="info">
      <RowTwoElem v-for="(value, key) in fakeData" :key="key">
        <UserBodyFieldName :field-name="key"/>
        <p class="field_info">{{ value }}</p>
      </RowTwoElem>
    </div>
  </UserBodyBlock>
</template>

<script setup>

import UserBodyFieldName from "@/entries/components/users/card/body/userBodyFieldName.vue";
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
import UserBodyHeader from "@/entries/components/users/card/body/userBodyHeader.vue";
import UserBodyBlock from "@/entries/components/users/card/body/userBodyBlock.vue";

const fakeData = {
  admin: "1",
  getcourse_user_id: "19057404",
  answer: "4332",
  has_vpn: "1",
  email: "readymama@ya.ru",
  username: "readydoc",
  verified: "True",
  followers: "89889",
  profit: "1587.2",
  uid: "19057404",
};

</script>

<style scoped>
.info {
  font-size: 13px;

}
</style>