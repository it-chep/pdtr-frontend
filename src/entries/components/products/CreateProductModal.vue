<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Создать продукт</h2>
      <form class="create-list-form">
        <label class="create-list-label" for="listName">Название продукта:</label>
        <input type="text" id="listName" v-model="newListName" placeholder="Введите название продукта ...">
        <span class="help-text">Необходимо заполнить поле</span>
        <div class="btn" @click="createList">
          <span>Создать</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
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
    createList() {
      if (this.newListName) {
        this.$emit('close-modal');
      } else {
        const nameInput = document.getElementById('listName')
        const helpText = document.querySelector('.help-text');
        nameInput.classList.add('error')
        helpText.style.display = "block"
      }
    //   TODO: пост на создание продукта
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  border-radius: 25px;
  background-color: #fefefe;
  margin: 15% auto;
  color: black;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

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
