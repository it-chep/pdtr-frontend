<template>
  <div class="search-input-container">
    <div class="input-wrapper">
      <input @input="onInput" class="search-project" id="search-project"
             placeholder="Найти рассылку ..." type="search">
      <div class="search-ico"></div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  methods: {
    onInput(event) {
      this.$emit('inputValueChanged', event.target.value);
    }
  }
})
// TODO: прокинуть event наверх
</script>

<style scoped>
.search-input-container {
  position: relative;
  width: 80%;
  background-color: #e8e8e8;
  border-radius: 8px;
  margin-right: 10px;
}

.search-ico {
  content: '';
  position: absolute;
  background-image: url(https://salebot.pro/assets/icon/search-icon-6d00345e3ab303e809a876dd72df2acb5dfea366edf4417bdbcac35426b56b01.svg);
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  right: 5px;
  top: 5px;
}

.search-project {
  width: 80%;
  background: transparent;
  border: none;
  outline: none;
  margin: 9px;
}

.search-project:focus {
  border: none;
  outline: none;
}
</style>