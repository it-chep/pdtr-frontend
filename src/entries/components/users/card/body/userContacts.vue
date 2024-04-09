<template>
  <UserBodyBlock>
    <UserBodyHeader :header_text="'Контакты'"/>
    <ColumnElement class="info">
      <RowTwoElem>
        <UserBodyFieldName :field-name="'Номер телефона:'"/>
        <p class="field_info">89826588317</p>
      </RowTwoElem>
      <RowTwoElem>
        <UserBodyFieldName :field-name="'Email:'"/>
        <p class="field_info">readymama@ya.ru</p>
      </RowTwoElem>
    </ColumnElement>
  </UserBodyBlock>
</template>

<script setup>

import UserBodyHeader from "@/entries/components/users/card/body/userBodyHeader.vue";
import UserBodyFieldName from "@/entries/components/users/card/body/userBodyFieldName.vue";
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
import ColumnElement from "@/entries/components/utils/ColumnElement.vue";
import UserBodyBlock from "@/entries/components/users/card/body/userBodyBlock.vue";

</script>

<style scoped>
.info {
  font-size: 13px;
}
</style>