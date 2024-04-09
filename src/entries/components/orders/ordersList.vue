<template>
  <div class="list-container">
    <OrderListHeader @inputValueChanged="handleSearch"/>
    <OrderItem v-for="orderData in filteredItems" :key="orderData.id" :order="orderData"/>
  </div>
</template>

<script setup>


import OrderItem from "@/entries/components/orders/orderItem.vue";
import OrderListHeader from "@/entries/components/orders/OrderListHeader.vue";
import {ref, watch} from "vue";

const fakeData = [
  {
    id: 1,
    name: "Клуб DOCSTAR 4.0 1 месяц",
    status: "Завершен",
    cost: "2 500 руб.",
    creation_date: "05.01.2024 00:42",
    user: {
      name: "Нечепорук Максим",
      phone: "89826588217",
      email: "maxim.necheporuk@yandex.ru",
    },
  },
  {
    id: 2,
    name: "Клуб DOCSTAR 4.0 3 месяца",
    status: "Отклонен",
    cost: "2 900 руб.",
    creation_date: "05.01.2024 12:45",
    user: {
      name: "Нечепорук Владимир",
      phone: "89826588217",
      email: "vovan.50cent@yandex.ru",
    },
  },
  {
    id: 3,
    name: "Клуб DOCSTAR 4.0 3 месяца",
    status: "Новый",
    cost: "4 900 руб.",
    creation_date: "05.01.1034 02:45",
    user: {
      name: "Первунина Марина",
      phone: "8888888888",
      email: "vovan.50cent@yandex.ru",
    },
  }
]
const searchQuery = ref('');
const orders = ref(fakeData);
const filteredItems = ref(orders.value);

const handleSearch = (query) => {
  searchQuery.value = query;
};

watch(searchQuery, (newQuery) => {
  filteredItems.value = orders.value.filter(item =>
      item.id.toString().includes(newQuery) ||
      item.name.toLowerCase().includes(newQuery.toLowerCase()) ||
      item.user.name.toLowerCase().includes(newQuery.toLowerCase()) ||
      item.user.phone.includes(newQuery) ||
      item.user.email.toLowerCase().includes(newQuery.toLowerCase())
  );
});
</script>

<style scoped>
.list-container {
  margin-left: 200px;
  margin-top: 60px;
}
</style>