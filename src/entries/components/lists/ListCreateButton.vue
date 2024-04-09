<template>
  <div class="btn create-list-btn" @click="openCreateListModal">
    <span>Создать список</span>
  </div>
  <ListCreateModal class="list-create-modal" :showModal="showModal" @close-modal="closeCreateListModal"/>
</template>

<script>
import ListCreateModal from "@/entries/components/lists/ListCreateModal.vue";

export default {
  components: {
    ListCreateModal
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    openCreateListModal() {
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
.create-list-btn {
  background-color: #009abd;
  margin-top: 0;
}

.create-list-btn span {
  color: #ffffff;
  font-weight: 600;
}

</style>