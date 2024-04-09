<template>
    <div class="course-container">
      <div class="course-image-container">
        <img :src="course.image" alt="">
      </div>
      <div class="course-name">
        <p>{{ course.name }}</p>
      </div>
      <WatchCourceButton/>
    </div>
</template>

<script setup>
import {ref, defineProps} from "vue";
import WatchCourceButton from "@/entries/components/orders/WatchCourceButton.vue";
import ColumnElement from "@/entries/components/utils/ColumnElement.vue";

defineProps(["course"])
</script>

<style scoped>
.course-container {
  border: #009abd 2px solid;
  text-align: center;
  border-radius: 15px;
  color: #ffffff;
  width: 300px;
  padding: 10px;
  overflow-x: scroll;
  margin: 20px;
}

.course-image-container {
  margin-top: 10px;
}

.course-image-container img {
  border-radius: 25px;
  object-fit: cover;
  width: 250px;
  height: 250px;
}

.course-name p{
  font-size: 20px;
  font-weight: 700;
}
</style>