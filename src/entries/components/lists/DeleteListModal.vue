<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Вы уверены, что хотите удалить это список ?</h2>
      <form class="create-list-form">
        <div class="btn" @click="deleteList">
          <span>Удалить список</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
    };
  },
  props: {
    showModal: Boolean,
    listId: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
    deleteList() {
      axios.post("http://127.0.0.1:8080/lists/delete_list", {id: this.$props.listId})
          .then(response => {
            this.$emit('close-modal');
          })
          .catch(error => {
          });
    }
  }
};
</script>

<style scoped>

.btn {
  margin-top: 10px;
  background-color: #d21212;
}
</style>
