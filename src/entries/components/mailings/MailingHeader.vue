<template>
  <RowTwoElem class="mailings-header-container">
    <MailingSearchInput @inputValueChanged="handleInputValueChange" />
    <MailingCreateButton/>
  </RowTwoElem>
</template>

<script>

import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
import MailingSearchInput from "@/entries/components/mailings/MailingSearchInput.vue";
import MailingCreateButton from "@/entries/components/mailings/MailingCreateButton.vue";
export default {
  components: {
    MailingSearchInput,
    MailingCreateButton,
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
.mailings-header-container {
    align-items: center
}
</style>