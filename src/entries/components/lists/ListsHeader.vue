<template>
  <RowTwoElem class="lists-header-container">
    <ListSearchInput @inputValueChanged="handleInputValueChange"/>
    <ListCreateButton @updateLists="handleUpdateLists"/>
  </RowTwoElem>
</template>

<script>

import ListSearchInput from "@/entries/components/lists/ListSearchInput.vue";
import ListCreateButton from "@/entries/components/lists/ListCreateButton.vue";
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";


export default {
  components: {
    ListSearchInput,
    ListCreateButton,
    RowTwoElem
  },
  methods: {
    handleUpdateLists() {
      this.$emit('updateLists',);
    },
    handleInputValueChange(value) {
      this.$emit('inputValueChanged', value);
    }
  }
}

</script>

<style scoped>
.lists-header-container {
  align-items: center
}
</style>