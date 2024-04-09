<template>
  <div class="product-list-container">
    <ProductListHeader/>
    <ProductItem v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script setup>

import ProductListHeader from "@/entries/components/products/ProductListHeader.vue";
import ProductItem from "@/entries/components/products/ProductItem.vue";

const fakeData = [
  {
    id: 1,
    name: "КУРС 1",
  },
  {
    id: 2,
    name: "Курс 2"
  }
]

const products = fakeData
</script>

<style scoped>
.product-list-container {
  margin-top: 60px;
  margin-left: 200px;
}
</style>