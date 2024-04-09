<template>
  <div class="lists">
    <ListsHeader @updateLists="fetchData" @inputValueChanged="handleSearch"/>
    <ListItem
        :lists="allItems"
        v-for="item in filteredItems" :key="item.id" :item="item"
        @updateLists="fetchData"
    />
  </div>
</template>

<script setup>
import ListItem from "@/entries/components/lists/ListItem.vue";
import ListsHeader from "@/entries/components/lists/ListsHeader.vue";
import axios from "axios";
import {ref, watch} from "vue";

const searchQuery = ref('');
const items = ref([]);
const filteredItems = ref(items.value);
const allItems = ref(items.value);

const handleSearch = (query) => {
  searchQuery.value = query;
};


watch(searchQuery, (newQuery) => {
  filteredItems.value = items.value.filter(item =>
      item.name.toLowerCase().includes(newQuery.toLowerCase())
  );
});

const fetchData = () => {
  axios.get('http://localhost:8080/lists/', {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  })
      .then(response => {
        items.value = response.data;
        allItems.value = items.value;

        filteredItems.value = items.value.filter(item =>
            item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      })
      // TODO: "Network Error" обработать когда бэк лежит
      .catch(error => {
        console.error('Ошибка при загрузке данных с сервера:', error);
      });
};
fetchData()
</script>

<style scoped>
.lists {
  margin-top: 60px;
  margin-left: 200px;
}
</style>
