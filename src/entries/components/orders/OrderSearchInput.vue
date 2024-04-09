<template>
  <div class="search-input-container">
    <div class="input-wrapper">
      <input @input="onInput" class="search-project" id="search-project"
             :placeholder="currentPlaceholder" type="search">
      <div class="search-ico"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      placeholders: ["имени пользователя", "номеру заказа", "телефону пользователя", "email пользователя"],
      currentPlaceholderIndex: 0,
      intervalId: null
    };
  },
  computed: {
    currentPlaceholder() {
      return `Найти заказ по ${this.placeholders[this.currentPlaceholderIndex]}`;
    }
  },
  methods: {
    onInput(event) {
      this.$emit('inputValueChanged', event.target.value);
    },
    changePlaceholder() {
      this.currentPlaceholderIndex = (this.currentPlaceholderIndex + 1) % this.placeholders.length;
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.changePlaceholder();
    }, 2000);
  },
  unmounted() {
    clearInterval(this.intervalId);
  }
});
</script>

<style scoped>
.search-input-container {
  position: relative;
  width: 80%;
  background-color: #e8e8e8;
  border-radius: 8px;
  margin-right: 10px;
}

.input-wrapper {
  position: relative;
}

.search-ico {
  content: '';
  position: absolute;
  background-image: url(https://salebot.pro/assets/icon/search-icon-6d00345e3ab303e809a876dd72df2acb5dfea366edf4417bdbcac35426b56b01.svg);
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}

.search-project {
  width: 80%;
  background: transparent;
  border: none;
  outline: none;
  margin: 9px;
  color: rgb(51, 51, 51);
  font-size: 16px;
  transition: color 0.3s;
}

.search-project::placeholder {
  color: rgba(51, 51, 51, 0.5);
  font-size: 14px;
}

.search-project:focus {
  border: none;
  outline: none;
  color: #000000;
}

.search-project:focus::placeholder {
  color: rgba(51, 51, 51, 0.5);
}

</style>