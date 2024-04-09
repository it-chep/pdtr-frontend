<template>
  <div class="order-container">
    <div class="scroll-container">
      <RowTwoElem>
        <ColumnElement>
          <p class="order-number">№ Заказа</p>
          <a class="order-number">{{ order.id }}</a>
        </ColumnElement>
        <ColumnElement>
          <p class="order-creation">Дата создания</p>
          <p class="order-creation">{{ order.creation_date }}</p>
        </ColumnElement>
        <ColumnElement>
          <p class="order-user-name">Имя покупателя</p>
          <a class="order-user-name">{{ order.user.name }}</a>
        </ColumnElement>
        <ColumnElement>
          <p class="order-name">Состав заказа</p>
          <a class="order-name">{{ order.name }}</a>
        </ColumnElement>
        <ColumnElement>
          <p class="order-status-head">Статус заказа</p>
          <p :class="statusClass" class="order-status">{{ order.status }}</p>
        </ColumnElement>
        <ColumnElement>
          <p class="order-cost">Стоимость</p>
          <p class="order-cost">{{ order.cost }}</p>
        </ColumnElement>
        <ColumnElement>
          <p class="order-user-phone">Телефон</p>
          <a class="order-user-phone">{{ order.user.phone }}</a>
        </ColumnElement>
        <ColumnElement>
          <p class="order-user-email">Email</p>
          <a class="order-user-email">{{ order.user.email }}</a>
        </ColumnElement>
      </RowTwoElem>
    </div>
  </div>
</template>

<script setup>
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
import ColumnElement from "@/entries/components/utils/ColumnElement.vue";
import {defineProps, ref, computed} from "vue";

const props = defineProps(["order"]);

const statusClass = computed(() => {
  switch (props.order.status) {
    case "Завершен":
      return "completed-status";
    case "Отклонен":
      return "rejected-status";
    case "Новый":
      return "new-status";
    default:
      return "default-status";
  }
});
// TODO: сделать <a></a>> теги
</script>


<style scoped>
.order-container {
  background-color: #e8e8e8;
  text-align: center;
  border-radius: 15px;
  color: #000000;
  width: 95%;
  padding: 10px;
  margin-top: 10px;
  overflow-x: scroll;
}

.order-number {
  width: 82px;
}

.order-creation {
  width: 140px;
}

.order-user-name {
  width: 200px;
}

.order-name {
  width: 250px;
}

.order-status-head {
  width: 105px;
}

.order-cost {
  width: 120px;
}

.order-user-phone {
  width: 200px;
}

.order-user-email {
  width: 200px;
}

.scroll-container {
  width: 100%;
  overflow-x: auto;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.scroll-container:hover::-webkit-scrollbar {
  display: block;
}

.scroll-container::-webkit-scrollbar:focus {
  width: 2px;
}

.scroll-container::-webkit-scrollbar:horizontal {
  height: 2px;
}

.order-status {
  border-radius: 15px;
  color: white;
  width: 105px;
}

.completed-status {
  background-color: #297c29;
}

.rejected-status {
  background-color: #d21212;
}

.new-status {
  background-color: #007bbd;
}

.default-status {
  background-color: gray;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #009abd;
  border-radius: 5px;
}
</style>
