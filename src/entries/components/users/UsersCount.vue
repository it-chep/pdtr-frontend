<template>
  <div class="users-count" v-if="showUsersCount">
    <p>{{ usersCount }} {{ textAfterCount }}</p>
  </div>
</template>

<script>

import axios from "axios";

export default {
  props: {
    condition: {
      type: Object,
      required: true,
    },
    textAfterCount: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      usersCount: this.countUsersByCondition(),
      showUsersCount: false
    }
  },

  methods: {
    countUsersByCondition() {
      if (this.isClicked) {
        axios.get("http://localhost:8080/users/count_by_condition", {
          params: this.$props.condition
        })
            .then(response => {
              this.showUsersCount = true;
              this.usersCount = response.data;
            })
            .catch(error => {
              console.error('Error cleaning list:', error);
            });
        return 0
      }
    },
    exposeMethod() {
      this.countUsersByCondition();
    },
    mounted() {
      this.countUsersByCondition();
    },
  }

}

</script>

<style scoped>
.users-count {
  margin-top: 10px;
  color: red;
}
</style>