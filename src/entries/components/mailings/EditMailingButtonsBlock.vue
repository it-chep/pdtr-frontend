<template>
  <div class="mailing-button-container">
    <RowTwoElem class="mailing-buttons">
      <CopyMailingButton/>
      <DeleteMailingButton/>
    </RowTwoElem>
  </div>
</template>

<script setup>

import DeleteMailingButton from "@/entries/components/mailings/DeleteMailingButton.vue";
import CopyMailingButton from "@/entries/components/mailings/CopyMailingButton.vue";
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
</script>

<style scoped>
.mailing-button-container {
  bottom: 10px;
  margin-right: 10px;
}
.mailing-buttons {
  justify-content: flex-end;
}
</style>