<template>
  <div class="btn clean-list-btn" @click="openCleanListModal">
    <span>Очистить список</span>
  </div>
  <CleanListModal :lists="lists" class="clean-list-modal" :listId="listId" :showModal="showModal" @close-modal="closeCleanListModal"/>
</template>

<script>
import CleanListModal from "@/entries/components/lists/CleanListModal.vue";

export default {
  components: {
    CleanListModal
  },
  data() {
    return {
      showModal: false
    };
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
    openCleanListModal() {
      this.showModal = true;
    },
    closeCleanListModal() {
      this.$emit('updateLists');
      this.showModal = false;
    }
  }
};

</script>

<style scoped>
.clean-list-btn {
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.btn span {
  color: #000000;
  font-weight: 400;
}
</style>