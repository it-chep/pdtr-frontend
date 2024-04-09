<template>
  <RowTwoElem class="orders-header-container">
    <OrderSearchInput @inputValueChanged="handleInputValueChange"/>
    <CreateOrderButton/>
  </RowTwoElem>
</template>

<script>

import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
import CreateOrderButton from "@/entries/components/orders/CreateOrderButton.vue";
import OrderSearchInput from "@/entries/components/orders/OrderSearchInput.vue";

export default {
  components: {
    OrderSearchInput,
    CreateOrderButton,
    RowTwoElem
  },
  methods: {
    handleInputValueChange(value) {
      this.$emit('inputValueChanged', value);
    }
  }
}

</script>

<style scoped>
.orders-header-container {
  align-items: center
}
</style>