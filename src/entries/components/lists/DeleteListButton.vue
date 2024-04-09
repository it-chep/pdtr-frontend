<template>
  <div class="btn delete-list-btn" @click="openDeleteListModal">
    <span>Удалить список</span>
  </div>
  <DeleteListModal class="delete-list-modal" :listId="listId" :showModal="showModal" @close-modal="closeCreateListModal"/>
</template>

<script>

import DeleteListModal from "@/entries/components/lists/DeleteListModal.vue";

export default {
  components: {
    DeleteListModal
  },
  data() {
    return {
      showModal: false
    };
  },
  props: {
    listId: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openDeleteListModal() {
      this.showModal = true;
    },
    closeCreateListModal() {
      this.$emit('updateLists');
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.delete-list-btn {
  background-color: #d21212;
}

.delete-list-btn span {
  color: #ffffff;
  font-weight: 600;
}
</style>