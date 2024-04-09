<template>
  <div class="courses-container">
    <CoursesHeader/>
    <div class="courses">
      <CourseItem v-for="course in courses" :key="course.id" :course="course"/>
    </div>
  </div>
</template>

<script setup>

import CourseItem from "@/entries/components/courses/CourseItem.vue";
import CoursesHeader from "@/entries/components/courses/CoursesHeader.vue";

const fakeData = [
  {
    id: 1,
    name: "Инстатерапия 4.0",
    image: "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/dd337fdf4d851bc7f5e3b0c50f2667e0.png/s/x150/a/28448",
  },
  {
    id: 2,
    name: "Клуб DOCSTAR",
    image: "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/e20c7ffe62b181ed17b83221f4c23ca4.png/s/x150/a/28448",
  },
  {
    id: 3,
    name: "Ютубоскопия",
    image: "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/dd337fdf4d851bc7f5e3b0c50f2667e0.png/s/x150/a/28448",
  },
  {
    id: 4,
    name: "Инстатерапия 4.0",
    image: "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/dd337fdf4d851bc7f5e3b0c50f2667e0.png/s/x150/a/28448",
  },
  {
    id: 5,
    name: "Клуб DOCSTAR",
    image: "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/e20c7ffe62b181ed17b83221f4c23ca4.png/s/x150/a/28448",
  },
  {
    id: 6,
    name: "Ютубоскопия",
    image: "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/dd337fdf4d851bc7f5e3b0c50f2667e0.png/s/x150/a/28448",
  },
]
const courses = fakeData;
</script>

<style scoped>
.courses-container {
  margin-left: 200px;
  margin-top: 60px;
}

.courses {
    display: flex;
  flex-wrap: wrap;
}
</style>