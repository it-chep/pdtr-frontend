<template>
  <div>
    <Header/>
  </div>
  <div class="left-sidebar">
    <MenuItem label="Клиенты" @click="$router.push('/clients')" :isActive="activeItem === 'funnelConstructor'" :hasCountCircle="true" :count="1018" />
    <MenuItem label="Списки" @click="$router.push('/lists')" :isActive="activeItem === 'funnelConstructor'" :hasCountCircle="true" :count="1018" />
    <MenuItem label="Рассылки" @click="$router.push('/mailings')" :isActive="activeItem === 'funnelConstructor'" :hasCountCircle="true" :count="1018" />
    <MenuItem label="Курсы" @click="$router.push('/courses')" :isActive="activeItem === 'funnelConstructor'" :hasCountCircle="true" :count="1018" />
    <MenuItem label="Продукты" @click="$router.push('/products')" :isActive="activeItem === 'funnelConstructor'" :hasCountCircle="true" :count="1018" />
    <MenuItem label="Список заказов" @click="$router.push('/sales_list')" :isActive="activeItem === 'funnelConstructor'" :hasCountCircle="true" :count="1018" />
    <MenuItem label="Статистика" @click="$router.push('/statistic')" :isActive="activeItem === 'funnelConstructor'" :hasCountCircle="true" :count="1018" />
    <MenuItem label="Промоакции" @click="$router.push('/promo_codes')" :isActive="activeItem === 'funnelConstructor'" :hasCountCircle="true" :count="1018" />
  </div>
</template>

<script>
import MenuItem from '@/entries/components/sidebar/sidebarItem.vue';

export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      activeItem: 'funnelConstructor', // Установите активный пункт меню
    };
  },
};
</script>

<style scoped>
.left-sidebar {
  position: fixed;
  display: block;
  height: 100%;
  background: #000000;
  left: 0;
  top: 50px;
  width: 190px;
}
</style>