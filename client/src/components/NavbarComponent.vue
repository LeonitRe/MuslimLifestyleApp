<script setup>
import LinkComp from './navComponents/LinkComp.vue'
</script>
<template>
  <nav>
    <div class="border-1 w-100 d-flex cont">
      <LinkComp link="New Arrivals"></LinkComp>
      <LinkComp link="Women" />
      <LinkComp link="Accessories" />
      <LinkComp link="Men" />
      <LinkComp link="Kids" />
      <LinkComp link="Fragrances" />
      <LinkComp link="Ramadan" />
      <LinkComp link="Outlet" />
      <LinkComp link="More" />
    </div>
  </nav>
</template>
<style scoped>
.cont {
  height: 12vh;
}
</style>
