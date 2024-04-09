<template>
  <div class="product-item-container">
    <RowTwoElem class="product-item">
      <p class="product-item-id">
        № {{ product.id }}
      </p>
      <p class="product-item-name">
        {{ product.name }}
      </p>
      <InformationDots></InformationDots>
    </RowTwoElem>
  </div>
</template>

<script setup>

import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
import InformationDots from "@/entries/components/utils/informationDots.vue";

import {defineProps} from "vue";

defineProps(["product"])
// TODO: логику по переходу в продукт
</script>

<style scoped>
.product-item-container {
  background-color: #e8e8e8;
  text-align: left;
  border-radius: 15px;
  color: #009abd;
  width: 95%;
  padding: 10px;
  margin-top: 10px;
}

.product-item {
  align-items: center;
}

.product-item-container p {
  cursor: pointer;
}

.product-item-id {
  margin-left: 15px;
  width: 20%;
}

.product-item-name {
  width: 70%;
}
</style>