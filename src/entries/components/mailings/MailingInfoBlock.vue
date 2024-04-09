<template>
  <div class="info-block-container">
    <div class="info-block">
      <div class="mailing-status">
        <p>{{ mailing.status }}</p>
      </div>
      <p>{{ mailing.name }}</p>
    </div>
    <EditMailingButtonsBlock/>

  </div>

</template>

<script setup>
import {defineProps} from "vue";
import EditMailingButtonsBlock from "@/entries/components/mailings/EditMailingButtonsBlock.vue";

defineProps(["mailing"])

</script>

<style scoped>
.info-block-container {
  width: 60%;
}

.info-block {
  height: 80%;
}

.mailing-status {
  font-size: 12px;
  background-color: rgba(0, 154, 189, 0.5);
  max-width: 250px;
  text-align: center;
  border-radius: 15px;
}

.mailing-status p {
  padding: 2px;
}
</style>