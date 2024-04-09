<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Вы уверены, что хотите очистить список ?</h2>
      <form class="create-list-form">
        <div>
          <label>Исключить списки</label>
          <VueMultiselect
              v-model="taggingSelected"
              :options="taggingOptions"
              :close-on-select="false"
              :multiple="true"
              :deselectLabel="'Нажмите чтобы удалить'"
              :selectLabel="'Нажмите чтобы выбрать'"
              :selectedLabel="'Выбрано'"
              @tag="addTag"
              tag-placeholder="Добавьте списки"
              placeholder="Начните вводить название списка"
              label="name"
              track-by="id"
          >
            <template v-slot:noResult>
              <span>По вашему запросу ничего не найдено.</span>
            </template>
            <template v-slot:noOptions>
              <span>Списков не найдено.</span>
            </template>
          </VueMultiselect>
        </div>
        <!--        <label>Переменная клиента</label>-->
        <UsersCount
            v-if="showUsers"
            :textAfterCount="'пользователей будет удалено из списка'"
            :condition="getConditionByForm()"
            ref="usersCountRef"

        />
        <RowTwoElem class="btn-container">
          <div class="btn clean-btn" @click="cleanList">
            <span>Очистить список</span>
          </div>
          <CountUsersButton @click="updateUsersCount"/>
        </RowTwoElem>
      </form>
    </div>
  </div>
  <Message></Message>
</template>

<script>
import axios from "axios";
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
import CountUsersButton from "@/entries/components/buttons/CountUsersButton.vue";
import VueMultiselect from 'vue-multiselect'
import Message from "@/entries/components/utils/Message.vue";
import UsersCount from "@/entries/components/users/UsersCount.vue";

export default {
  components: {UsersCount, Message, VueMultiselect, CountUsersButton, RowTwoElem},
  props: {
    lists: {
      type: Object,
      required: true,
    },
    showModal: Boolean,
    listId: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      taggingSelected: [],
      taggingOptions: [],
      showUsers: null,
    }
  },
  watch: {
    lists: {
      handler(newLists) {
        this.taggingOptions = newLists;
      },
      immediate: true,
    },
  },
  methods: {
    cleanSelectedLists() {
      return this.taggingSelected.map(item => item.id);
    },
    closeModal() {
      this.$emit('close-modal');
    },
    cleanList() {
      axios.post("http://127.0.0.1:8080/lists/clean_list", {id: this.listId, excluded_ids: this.cleanSelectedLists()})
          .then(response => {
            this.$emit('close-modal');
            this.taggingSelected = [];
          })
          .catch(error => {
            console.error('Error cleaning list:', error);
          });
    },
    getConditionByForm() {
      return {
        lists: [this.$props.listId],
        excludedLists: this.cleanSelectedLists()
      }
    },
    updateUsersCount() {
      this.showUsers = true;
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.taggingOptions.push(tag)
      this.taggingSelected.push(tag)
    },
  }
};
</script>

<style scoped>
.btn-container {
  margin-top: 20px;
}

.clean-btn {
  background-color: #d21212;
}
</style>
