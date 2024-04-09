<template>
  <div class="users_list" ref="scrollContainer">
    <UserSearchInput @inputValueChanged="handleSearch"/>
    <UsersFilter/>
    <UserRecord
        @click="openUserDialog(user.id)"
        v-for="user in filteredItems"
        :key="user.id"
        :userData="user"
    />
  </div>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue';
import UserRecord from "@/entries/components/users/list/userRecord.vue";
import UserSearchInput from "@/entries/components/users/list/userSearchInput.vue";
import UsersFilter from "@/entries/components/users/list/usersFilter.vue";
import {useRouter} from "vue-router";

const userData = ref([]);
const router = useRouter();
const searchQuery = ref('');
const filteredItems = ref(userData.value);


const openUserDialog = (userId) => {
  router.push(`/clients/${userId}`);
};

const fakeData = [
  {
    "id": 1,
    "name": "Пользователь 1",
    "path_to_avatar": "https://cs9.pikabu.ru/post_img/2017/01/25/6/1485331254192128001.jpg",
    "last_message": "Привет, как дела?",
    "last_activity_time": "22.11.2024 12:12"
  },
  {
    "id": 2,
    "name": "Пользователь 2",
    "path_to_avatar": "https://n1s2.hsmedia.ru/49/8c/2f/498c2ffff20b44d714b0dbd878771473/728x485_1_e9eda34f26b6e8cfd60381f2a4d3c33b@5000x3334_0xac120003_4586687991632400092.jpeg",
    "last_message": "Привет, что нового?",
    "last_activity_time": "22.11.2024 12:15"
  },
  {
    "id": 3,
    "name": "Пользователь 3",
    "path_to_avatar": "https://n1s2.hsmedia.ru/49/8c/2f/498c2ffff20b44d714b0dbd878771473/728x485_1_e9eda34f26b6e8cfd60381f2a4d3c33b@5000x3334_0xac120003_4586687991632400092.jpeg",
    "last_message": "Привет, что нового?",
    "last_activity_time": "22.11.2024 12:15"
  },
  {
    "id": 4,
    "name": "Пользователь 4",
    "path_to_avatar": "https://n1s2.hsmedia.ru/49/8c/2f/498c2ffff20b44d714b0dbd878771473/728x485_1_e9eda34f26b6e8cfd60381f2a4d3c33b@5000x3334_0xac120003_4586687991632400092.jpeg",
    "last_message": "Привет, что нового?",
    "last_activity_time": "22.11.2024 12:15"
  },
  {
    "id": 5,
    "name": "Пользователь 5",
    "path_to_avatar": "https://n1s2.hsmedia.ru/49/8c/2f/498c2ffff20b44d714b0dbd878771473/728x485_1_e9eda34f26b6e8cfd60381f2a4d3c33b@5000x3334_0xac120003_4586687991632400092.jpeg",
    "last_message": "Привет, что нового?",
    "last_activity_time": "22.11.2024 12:15"
  },
  {
    "id": 6,
    "name": "Пользователь 6",
    "path_to_avatar": "https://n1s2.hsmedia.ru/49/8c/2f/498c2ffff20b44d714b0dbd878771473/728x485_1_e9eda34f26b6e8cfd60381f2a4d3c33b@5000x3334_0xac120003_4586687991632400092.jpeg",
    "last_message": "Привет, что нового?",
    "last_activity_time": "22.11.2024 12:15"
  },
  {
    "id": 7,
    "name": "Пользователь 7",
    "path_to_avatar": "https://n1s2.hsmedia.ru/49/8c/2f/498c2ffff20b44d714b0dbd878771473/728x485_1_e9eda34f26b6e8cfd60381f2a4d3c33b@5000x3334_0xac120003_4586687991632400092.jpeg",
    "last_message": "Привет, что нового?",
    "last_activity_time": "22.11.2024 12:15"
  },
  {
    "id": 8,
    "name": "Пользователь 8",
    "path_to_avatar": "https://n1s2.hsmedia.ru/49/8c/2f/498c2ffff20b44d714b0dbd878771473/728x485_1_e9eda34f26b6e8cfd60381f2a4d3c33b@5000x3334_0xac120003_4586687991632400092.jpeg",
    "last_message": "Привет, что нового?23232323232323232323232323",
    "last_activity_time": "22.11.2024 12:15"
  },
];

onMounted(() => {
  userData.value = fakeData;
  filteredItems.value = userData.value
});

const handleSearch = (query) => {
  searchQuery.value = query;
};

watch(searchQuery, (newQuery) => {
  filteredItems.value = userData.value.filter(item =>
      item.name.toLowerCase().includes(newQuery.toLowerCase())
  );
});

</script>

<style scoped>
.users_list {
  width: 100%;
  overflow-y: auto;
  border-right: 1px solid #868080;
  cursor: pointer;
  margin-top: 0;
  justify-content: left;
}

</style>


// try {
//   const response = await fetch('http://localhost:8080/clients');
//   if (response.ok) {
//     userData.value = await response.json();
//   } else {
//     console.error('Ошибка при выполнении запроса:', response.statusText);
//   }
// } catch (error) {
//   console.error('Произошла ошибка:', error.message);
// }