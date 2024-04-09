<template>
  <div class="list_item">
    <div class="list_top">
      <p class="list_id">
        №{{ item.id }}
      </p>
      <p class="list_header">
        {{ item.name }}
      </p>
    </div>
    <div class="list_bottom">
      <p class="list_clients">
        Клиентов в списке: {{ item.users_count }}
      </p>
      <ButtonsContainer :lists="lists" :listId="item.id" @updateLists="handleUpdateLists"/>
    </div>
  </div>
</template>

<script>

import ButtonsContainer from "@/entries/components/lists/ButtonsContainer.vue";

export default {
  components: {
    ButtonsContainer,
  },
  props: {
    lists: {
      type: Object,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleUpdateLists() {
      this.$emit('updateLists',);
    },
  }
}
</script>

<style scoped>
.list_item {
  background-color: #e8e8e8;
  border-radius: 15px;
  color: #000000;
  width: 90%;
  padding: 10px;
  margin-top: 10px;
}

.list_top {
  border-bottom: 1px solid #818181;
  width: 100%;
}

.list_id {
  font-size: 12px;
}

.list_header {
  font-size: 20px;
  font-weight: 700;
}

.list_clients {

}
</style>