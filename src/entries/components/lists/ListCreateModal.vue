<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Создать список</h2>
      <form class="create-list-form">
        <label class="create-list-label" for="listName">Название списка:</label>
        <input type="text" id="listName" v-model="newListName" placeholder="Введите название списка ...">
        <span class="help-text">Необходимо заполнить поле</span>
        <div class="btn" @click="createList">
          <span>Создать</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ['showModal'],
  data() {
    return {
      newListName: ''
    };
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
    showError() {
      const nameInput = document.getElementById('listName');
      const helpText = document.querySelector('.help-text');
      nameInput.classList.add('error');
      helpText.style.display = "block";
    },
    createList() {
      if (this.newListName) {
        axios.post("http://127.0.0.1:8080/lists/add_list", {name: this.newListName})
            .then(response => {
              this.newListName = '';
              this.$emit('close-modal');
            })
            .catch(error => {
              this.showError()
            });
      } else {
        this.showError()
      }
    }
  }
};
</script>

<style scoped>
.create-list-label {
  display: block;
  margin-bottom: 10px;
}

.create-list-form {
  margin-top: 10px;
}

#listName {
  width: 100%;
  padding: 10px;
  height: 35px;
}

#listName:focus {
  border: 1px solid #009abd;
  border-radius: 2px;
}

.btn {
  margin-top: 10px;
  background-color: #009abd;
}

.error {
  border: 1px solid red;
}

.help-text {
  color: red;
  font-size: 12px;
  display: none;
}
</style>
