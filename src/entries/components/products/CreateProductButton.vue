<template>
  <div class="btn create-product-btn" @click="openCreateProductModal">
    <span>Создать продукт</span>
  </div>
    <CreateProductModal class="list-create-modal" :showModal="showModal" @close-modal="closeCreateProductModal"/>

</template>

<script setup>

import CreateProductModal from "@/entries/components/products/CreateProductModal.vue";
import {ref} from "vue";

const showModal = ref(false);

const openCreateProductModal = () => {
  showModal.value = true;
};

const closeCreateProductModal = () => {
  showModal.value = false;
};
</script>

<style scoped>

</style>

<style scoped>
.create-product-btn {
  background-color: #009abd;
  margin-top: 0;
}
</style>