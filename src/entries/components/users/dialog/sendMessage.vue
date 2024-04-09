<template>
  <div class="send-message-input-container">
    <ColumnElement class="input-wrapper">
      <SendMessageInput/>
      <RowTwoElem class="send-message-input-buttons">
        <div class="additional-buttons">
          <AddFileButton/>
        </div>
        <CircleRowButton/>
      </RowTwoElem>
    </ColumnElement>
  </div>
</template>

<script setup>

import SendMessageInput from "@/entries/components/users/dialog/sendMessageInput.vue";
import CircleRowButton from "@/entries/components/buttons/circleRowButton.vue";
import AddFileButton from "@/entries/components/buttons/addFileButton.vue";
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";
import ColumnElement from "@/entries/components/utils/ColumnElement.vue";
</script>

<style scoped>
.send-message-input-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.input-wrapper {
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 100%;
  padding: 8px;
  position: relative;
}

.send-message-input-buttons {
  justify-content: space-between;
}

.additional-buttons {
  margin: 5px;
}
</style>