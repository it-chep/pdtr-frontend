<template>
  <RowTwoElem class="search-input-container">
    <div class="filter-search-input">
      <input @input="onInput" class="search_upper" name="search" placeholder="Найти клиента ...">
    </div>
    <div class="information_dots">
      <InformationDots/>
    </div>
  </RowTwoElem>
</template>

<script>
import {defineProps, ref, onMounted, watch, defineComponent} from 'vue';
import InformationDots from "@/entries/components/utils/informationDots.vue";
import RowTwoElem from "@/entries/components/utils/RowTwoElem.vue";

export default defineComponent({
  components: {RowTwoElem, InformationDots},
  methods: {
    onInput(event) {
      this.$emit('inputValueChanged', event.target.value);
    }
  }
})
</script>

<style scoped>
.search-input-container {
  justify-content: space-between;
  height: 50px;
}

.filter-search-input::before {
  content: '';
  position: absolute;
  background-image: url(https://salebot.pro/assets/icon/search-icon-6d00345e3ab303e809a876dd72df2acb5dfea366edf4417bdbcac35426b56b01.svg);
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  left: 12px;
  top: 8px;
}

.filter-search-input {
  background-color: #d5d4d4;
  border-radius: 35px;
  width: 80%;
  margin-top: 5px;
  height: 30px;
}

.search_upper {
  margin-left: 50px;
  margin-top: 7px;
  width: 80%;
  background: transparent;
  border: none;
  outline: none;
}

.information_dots {
  position: relative;
  right: 5px;
  top: 5px;
}

</style>