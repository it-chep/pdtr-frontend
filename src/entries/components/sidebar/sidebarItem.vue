<template>
  <div class="menu_item" :class="menuItemClass">
    <div class="content-wrapper">
      <div class="for_active"></div>
      <div class="content">
        <svg class="sidebar_icon" :width="iconWidth" :height="iconHeight" viewBox="0 0 18 18" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M4.66618 4.69692C3.59496 4.69692 2.93839 3.81803 2.93871 3.15129C2.93902 2.48455 3.41312 1.3026 4.48434 1.3026M2.39319 10.2733C1.27276 10.1218 1 9.63679 1 8.75796C1 7.87912 2.00012 6.66685 3.42361 6.84868M15.6068 10.2733C16.7272 10.1218 17 9.6368 17 8.75796C17 7.87913 15.9999 6.66685 14.5764 6.84869M13.3338 4.69692C14.405 4.69692 15.0616 3.81803 15.0613 3.15129C15.061 2.48455 14.5869 1.3026 13.5157 1.3026M10.9396 2.69669C10.9396 3.76791 10.0712 4.63631 9 4.63631C7.92878 4.63631 7.06039 3.76791 7.06039 2.69669C7.06039 1.62547 7.92878 0.75708 9 0.75708C10.0712 0.75708 10.9396 1.62547 10.9396 2.69669ZM10.9396 11.2431H7.06039C5.98917 11.2431 5.12077 10.9097 5.12077 9.90963C5.12077 8.09451 7.06039 7.39419 9 7.39419C10.9396 7.39419 12.8792 8.09451 12.8792 9.90963C12.8792 10.9097 12.0108 11.2431 10.9396 11.2431Z"
              stroke="#95A3BA" stroke-width="1.5" stroke-linecap="round" class="svg_path"></path>
        </svg>
        <span class="item_label">{{ label }}</span>
      </div>
      <!--    <div v-if="hasCountCircle" class="count-circle" :style="countCircleStyle">{{ count }}</div>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    link: String,
    isActive: Boolean,
    hasCountCircle: Boolean,
    count: Number,
  },
  computed: {
    menuItemClass() {
      return {
        'menu_item': true,
        'for_active': this.isActive,
      };
    },
    iconWidth() {
      // Your logic for setting icon width
    },
    iconHeight() {
      // Your logic for setting icon height
    },
    countCircleStyle() {
      // Your logic for setting count circle style
    },
  },
  methods: {
    navigate() {
      // Your navigation logic
    },
  },
};
</script>

<style scoped>

.sidebar_icon {
  width: 18px;
  height: 18px;
  margin-top: 10px;
}

.menu_item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: hsl(191, 100%, 37%);
}

.menu_item:hover {
  cursor: pointer;
  background-color: hsl(187, 93%, 17%);
}

.content-wrapper {
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.item_label {
  margin: 0 15px 0 15px;

}

</style>