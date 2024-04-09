<template>
  <ColumnElement>
    <p class="mailing-parameters-header">
      Параметры рассылки
    </p>
    <RowTwoElem>
      <MailingParameterName :headerName="'Автор рассылки:'"/>
      <MailingParameterValue :value="parameters.author"/>
    </RowTwoElem>
    <RowTwoElem>
      <MailingParameterName :headerName="'Время создания:'"/>
      <MailingParameterValue :value="parameters.start_date"/>
    </RowTwoElem>
    <RowTwoElem>
      <MailingParameterName :headerName="'Время окончания рассылки:'"/>
      <MailingParameterValue :value="parameters.end_date"/>
    </RowTwoElem>
    <RowTwoElem>
      <MailingParameterName :headerName="'Количество получателей'"/>
      <MailingParameterValue :value="parameters.users"/>
    </RowTwoElem>
  </ColumnElement>

</template>

<script setup>
import {defineProps} from "vue";
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
import ColumnElement from "@/entries/components/utils/ColumnElement.vue";
import MailingParameterName from "@/entries/components/mailings/MailingParameterName.vue";
import MailingParameterValue from "@/entries/components/mailings/MailingParameterValue.vue";

defineProps(["parameters"])

</script>

<style scoped>
.mailing-parameters-header {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}
</style>