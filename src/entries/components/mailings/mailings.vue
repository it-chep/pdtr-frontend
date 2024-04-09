<template>
  <div class="mailings">
    <MailingHeader/>
    <MailingItem v-for="mailing in mailings" :key="mailing.id" :mailing="mailing"/>
  </div>
</template>

<script setup>

import MailingHeader from "@/entries/components/mailings/MailingHeader.vue";
import MailingItem from "@/entries/components/mailings/MailingItem.vue";
const fakeMailings = [
    {
      id: 1,
      name: "Рассылка 1",
      status: "Cообщения полностью отправлены",
      parameters: {
        author: "jura09091@gmail.com",
        start_date: "30 декабря 2023, 00:55",
        end_date: "30 декабря 2023, 09:00",
        users: "1",
        lists: ""
      }
    },
    {
      id: 2,
      name: "Рассылка 2",
      status: "Идет отправка ...",
      parameters: {
        author: "jura09091@gmail.com",
        start_date: "20 декабря 2023, 00:55",
        end_date: "20 декабря 2023, 09:00",
        users: "100",
        lists: ""
      }
    },
]
const mailings = fakeMailings
</script>

<style scoped>
.mailings {
  margin-top: 60px;
  margin-left: 200px;
}
</style>