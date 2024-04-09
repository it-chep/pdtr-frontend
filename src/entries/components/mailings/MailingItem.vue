<template>
  <div class="mailing-item-container">
    <RowTwoElem>
      <MailingInfoBlock :mailing="mailing"/>
      <MailingParametersBlock :parameters="mailing.parameters"/>
    </RowTwoElem>
  </div>
</template>

<script setup>
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
import MailingInfoBlock from "@/entries/components/mailings/MailingInfoBlock.vue";
import MailingParametersBlock from "@/entries/components/mailings/MailingParametersBlock.vue";
import {defineProps} from "vue";

defineProps(["mailing"])
</script>

<style scoped>
.mailing-item-container {
  background-color: #e8e8e8;
  border-radius: 15px;
  color: #000000;
  width: 95%;
  padding: 10px;
  margin-top: 10px;
}
</style>