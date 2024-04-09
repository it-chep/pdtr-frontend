<template>
  <RowTwoElem class="left-right-buttons">
    <RowTwoElem v-if="showButtons()">
      <CreateMailingButton :listId="listId" @updateLists="handleUpdateLists"/>
      <CleanListButton :lists="lists" :listId="listId" @updateLists="handleUpdateLists"/>
      <LoadUsersFromList :listId="listId" @updateLists="handleUpdateLists"/>
    </RowTwoElem>
    <RowTwoElem>
      <DeleteListButton :listId="listId" @updateLists="handleUpdateLists"/>
    </RowTwoElem>
  </RowTwoElem>
</template>

<script>

import CreateMailingButton from "@/entries/components/buttons/CreateMailingButton.vue";
import CleanListButton from "@/entries/components/lists/CleanListButton.vue";
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
import LoadUsersFromList from "@/entries/components/lists/LoadUsersFromList.vue";
import DeleteListButton from "@/entries/components/lists/DeleteListButton.vue";

export default {
  components: {
    CreateMailingButton,
    CleanListButton,
    RowTwoElem,
    LoadUsersFromList,
    DeleteListButton
  },
  props: {
    lists: {
      type: Object,
      required: true,
    },
    listId: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleUpdateLists() {
      this.$emit('updateLists',);
    },
    showButtons() {
      const list = this.lists.find(list => list.id === this.listId);
      return list.users_count > 0;
    }
  }
}
</script>

<style scoped>
.left-right-buttons {
  justify-content: space-between
}
</style>